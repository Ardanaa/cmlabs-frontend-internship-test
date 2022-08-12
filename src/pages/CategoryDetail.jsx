import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import {GiHotMeal} from 'react-icons'
import CategoryDetailProduct from '../components/CategoryDetailProduct';

function CategoryDetail() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">mealapp</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Food</Nav.Link>
            <Nav.Link href="#pricing">Ingredients</Nav.Link>
            <Nav.Link href="#pricing">Local Culinary</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Home Product */}
      <CategoryDetailProduct></CategoryDetailProduct>
      
    </>
  );
}

export default CategoryDetail;