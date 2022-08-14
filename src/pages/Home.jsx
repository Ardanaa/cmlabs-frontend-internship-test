import React from "react";
import { Container } from "react-bootstrap";
import { GiHotMeal, GiBowlOfRice } from "react-icons/gi";
import { FaCookieBite } from "react-icons/fa";
import HomeProduct from "../components/HomeProduct";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      <Container>
        <div className="text-center">
          <div style={{ color: "orange" }} >
            <GiHotMeal></GiHotMeal>
            <GiBowlOfRice className="mx-3"></GiBowlOfRice>
            <FaCookieBite></FaCookieBite>
          </div>
          <p>Mealapp API Website</p>
          <p className="fs-1 fw-bold">See All The Delicious Food</p>
        </div>
      </Container>

      {/* Home Product */}
      <HomeProduct></HomeProduct>

    </>
  );
}

export default Home;