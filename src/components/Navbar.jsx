import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";


function navbar() {
  return ( 
    <>
      <Navbar bg="light" expand="md" className="mb-3">
          <Container>
            <Navbar.Brand href="/"className="fw-bold">mealapp</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
              className="w-50"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  mealapp
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2">Food</Nav.Link>
                  <Nav.Link href="#action2">Ingredients</Nav.Link>
                  <Nav.Link href="#action2">Local Culinary</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
   );
}

export default navbar;