import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import {GiHotMeal} from 'react-icons'
import HomeProduct from '../components/HomeProduct';

function Home() {
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

      <Container>
        <div className="text-center">
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