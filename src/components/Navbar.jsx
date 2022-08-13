import { Container, Nav, Navbar } from 'react-bootstrap';


function navbar() {
  return ( 
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">mealapp</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Food</Nav.Link>
            <Nav.Link href="#pricing">Ingredients</Nav.Link>
            <Nav.Link href="#pricing">Local Culinary</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
   );
}

export default navbar;