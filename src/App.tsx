import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriversList from "./components/drivers/list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DriversShow from "./components/drivers/show";
import Schedules from "./components/races";
import ResultList from "./components/results/list";
import Header from "./components/common/header";
import CircuitShow from "./components/circuits/show";
import Qualifying from "./components/races/qualifying";
import CurrentStandings from "./components/standings/currentStandings";

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
        <Container fluid>
          <Header />
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Routes>
                <Route path="/drivers/:year" element={<DriversList />} />
                <Route
                  path="/drivers/show/:driverId"
                  element={<DriversShow />}
                />
                <Route
                  path="/results/:season/:round/"
                  element={<ResultList />}
                />
                <Route path="/races" element={<Schedules />} />
                <Route
                  path="/circuit/show/:circuitId"
                  element={<CircuitShow />}
                />
                <Route
                  path="/races/qualifying/:season/:round"
                  element={<Qualifying />}
                />
                <Route path="/standings/" element={<CurrentStandings />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
