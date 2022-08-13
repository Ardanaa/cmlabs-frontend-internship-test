import React from "react";
import { Container } from 'react-bootstrap';
import { GiHotMeal } from 'react-icons'
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