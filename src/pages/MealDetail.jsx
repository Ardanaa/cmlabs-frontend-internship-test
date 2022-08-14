import React from "react";
import MealDetailProduct from "../components/MealDetailProduct";
import Navbar from "../components/Navbar"


function MealDetail() {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Home Product */}
      <MealDetailProduct></MealDetailProduct>

    </>
  );
}

export default MealDetail;