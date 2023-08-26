import { useQuery } from "@tanstack/react-query";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import fetchSeasons from "../../api/fetchSeasons";
import { useContext } from "react";
import { useSeason } from "./seasonContext";

const Header = () => {
  // const { data: res, isLoading } = useQuery([], fetchSeasons);
  // if (isLoading) {
  //   return <div>Loading...</div>;g
  // }

  const seasons = useSeason()?.MRData.SeasonTable.Seasons ?? [];

  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">F1 Stats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/races/"}>Races</Nav.Link>
            <NavDropdown title="Drivers" id="basic-nav-dropdown">
              {seasons.map((season) => (
                <NavDropdown.Item
                  key={season.season}
                  href={`/drivers/${season.season}`}
                >
                  {season.season}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href={"/standings/"}>Standings</Nav.Link>
            <Nav.Link href={"/constructors/"}>Constructors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
