import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { useParams } from "react-router";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefault.js";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import { useRedirect } from "../../hooks/useRedirect";

function ProfilePage() {
  /**
   * The ProfilePage component is a functional component that renders the profile page for a user.
   * It fetches the profile data from the API using the profile id from the URL.
   * @returns {JSX.Element} - The JSX for the component.
   * @param {Object} profileData - The profile data.
   * @param {Object} currentUser - The current user data.
   * @param {Function} setProfileData - A function to set the profile data state.
   * @param {Function} useRedirect - A function to redirect the user to the login page.
   */

  useRedirect("loggedOut");
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const [profileData, setProfileData] = useState({
    id: "",
    owner: "",
    name: "",
    image: "",
    created_at: "",
    updated_at: "",
  });

  // Fetch the profile data from the API.
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`);
        setProfileData(data);
      } catch (err) {
        if (err.response.status === 401) {
        }
      }
    };
    fetchProfileData();
  }, [id]);

  return (
    <>
      {currentUser && (
        <Container>
          <Row>
            <Col className="my-2">
              <Card className="my-2">
                <Card.Header>
                  <>
                    {profileData?.owner && (
                      <ProfileEditDropdown id={profileData.id} />
                    )}
                  </>
                  <h1>{profileData.owner}'s Profile Page</h1>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <Image
                        src={profileData.image}
                        alt={profileData.owner}
                        rounded
                        fluid
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Title>{profileData.name}</Card.Title>
                      <Card.Text>
                        Joined at: {profileData.created_at}
                        <br />
                        Updated at: {profileData.updated_at}
                        <br />
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default ProfilePage;
