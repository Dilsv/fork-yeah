import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault.js";
import useFetchCategories from "../../hooks/useFetchCategories.js";
import RecipesPageComponent from "../../components/RecipesPageComponent";
import styles from "../../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <Container className="mt-5">
      <>
        <p className={`h2 ${styles.Title}`}> Welcome to Fork Yeah 🍽️ </p>
        <p>
          Food isn’t just about eating—it’s about experiences, creativity, and
          the joy of sharing a great meal. At Fork Yeah!, we bring together
          passionate home cooks, aspiring chefs, and food lovers to explore a
          world of flavours, one recipe at a time. Whether you’re looking for a
          quick 15-minute dinner, a show-stopping dessert, or a healthy meal to
          fuel your day, you’ll find it here. We make cooking exciting,
          accessible, and most importantly—delicious!
        </p>

        <p className={`h2 ${styles.Title}`}> About Us </p>
        <p>
          Fork Yeah! was created with one simple goal: to make cooking fun,
          easy, and accessible to everyone. We know that whether you’re a
          beginner or a seasoned cook, finding the right recipe can make all the
          difference. That’s why we offer a collection of tried-and-tested
          recipes, step-by-step guides, and expert tips to help you create
          amazing dishes with confidence. We’re more than just a recipe
          website—we’re a place to discover new flavours, master cooking
          techniques, and build confidence in the kitchen. Whether you’re here
          to learn, explore, or simply indulge in food inspiration, we’re
          excited to have you on this journey!
        </p>

        <p className={`h2 ${styles.Title}`}> What You’ll Find on Fork Yeah! </p>
        <p>
          🍲 Diverse & Exciting Recipes From classic comfort food to bold
          international dishes, our collection caters to all tastes and skill
          levels. Whether you want a simple home-cooked meal or an adventurous
          new dish, we’ve got you covered.
        </p>

        <p>
          📖 Easy-to-Follow Cooking Guides Our recipes come with clear,
          step-by-step instructions, cooking tips, and ingredient breakdowns to
          ensure success in the kitchen—every time!
        </p>

        <p>
          🔍 Smart Search & Filters Looking for vegan recipes? Quick dinners?
          Gluten-free options? Our search tools make it easy to find the perfect
          dish for any occasion.
        </p>

        <p className={`h2 ${styles.Title}`}> Get Cooking Today! </p>
        <p>
          {" "}
          🍝 Creamy Garlic Parmesan Pasta – A quick and comforting dish ready in
          under 30 minutes.{" "}
        </p>
        <p>
          {" "}
          🥗 Zesty Avocado & Quinoa Salad – A refreshing, healthy meal packed
          with flavour.{" "}
        </p>
        <p>
          🍰 Classic Chocolate Lava Cake – A rich and indulgent dessert for
          chocoholics!
        </p>

        <p> Cooking tips & Tricks </p>
        <p>
          {" "}
          🔥 Perfectly Sear Your Meat – Let it come to room temperature before
          cooking for an even sear.{" "}
        </p>
        <p>
          {" "}
          🧄 Enhance Flavours Instantly – Toast your spices before using them to
          deepen their aroma.{" "}
        </p>
        <p>
          {" "}
          🥑 Keep Avocados Fresh – Store them with an onion to slow browning.{" "}
        </p>

        <p className={`h2 ${styles.Title}`}> Featured Recipe of the Week </p>
        <p>
          🔹 This Week’s Must-Try: Spicy Honey Glazed Chicken – A perfect mix of
          sweet, spicy, and smokey flavours!
        </p>

        <p className={`h2 ${styles.Title}`}> User favourite recipes </p>
        <p>
          🌟 Most Loved: 🍕 Ultimate Homemade Margherita Pizza – Simple, cheesy,
          and absolutely delicious! 🥘 One-Pot Chicken & Rice – A hearty,
          no-fuss meal for busy days.
        </p>

        <p className={`h2 ${styles.Title}`}> Seasonal & Holiday Recipes</p>
        <p>
          🐰 Easter Special: Carrot Cake Muffins 🎃 Pumpkin Spice Everything!
        </p>

        <p className={`h2 ${styles.Title}`}> Mini Cooking Challenges </p>
        <p>This week's challenge: Make a dish using only 5 ingredients!</p>
      </>
    </Container>
  );
};

export default HomePage;
