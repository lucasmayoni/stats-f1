import { useQuery } from "@tanstack/react-query";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import fetchSeasons from "../../api/fetchSeasons";

const Header = () => {
  const result = useQuery([], fetchSeasons);
  const seasons = result.data?.MRData.SeasonTable.Seasons ?? [];
  const sortedSeasons = seasons.sort((a, b) => b.season - a.season);

  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">F1 Stats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/races/"}>Races</Nav.Link>
            <NavDropdown title="Drivers" id="basic-nav-dropdown">
              {sortedSeasons.map((season) => (
                <NavDropdown.Item href={`/drivers/${season.season}`}>
                  {season.season}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
