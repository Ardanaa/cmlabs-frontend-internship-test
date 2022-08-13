import React from "react";
import CategoryDetailProduct from '../components/CategoryDetailProduct';
import Navbar from '../components/Navbar'


function CategoryDetail() {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Home Product */}
      <CategoryDetailProduct></CategoryDetailProduct>

    </>
  );
}

export default CategoryDetail;