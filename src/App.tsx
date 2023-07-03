import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriversList from "./components/drivers/list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DriversShow from "./components/drivers/show";
import Results from "./components/results";
import Schedules from "./components/races";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">F1 Stats</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href={"/results/"}>Results</Nav.Link>
                  <Nav.Link href={"/races/"}>Races</Nav.Link>

                  <NavDropdown title="Drivers" id="basic-nav-dropdown">
                    <NavDropdown.Item href={"/drivers/2019"}>
                      2019
                    </NavDropdown.Item>
                    <NavDropdown.Item href={"/drivers/2020"}>
                      2020
                    </NavDropdown.Item>
                    <NavDropdown.Item href={"/drivers/2021"}>
                      2021
                    </NavDropdown.Item>
                    <NavDropdown.Item href={"/drivers/2022"}>
                      2022
                    </NavDropdown.Item>
                    <NavDropdown.Item href={"/drivers/2023"}>
                      2023
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/drivers/:year" element={<DriversList />} />
            <Route path="/drivers/show/:driverId" element={<DriversShow />} />
            <Route path="/results" element={<Results />} />
            <Route path="/races" element={<Schedules />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
