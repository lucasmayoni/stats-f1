import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchDriver from "../../api/drivers/fetchDriver";
import { Card, ListGroup } from "react-bootstrap";
import DriverStandings from "./standings";
import fetchDriverStandings from "../../api/drivers/fecthDriverStandings";

const DriversShow = () => {
  const { driverId } = useParams();
  const result = useQuery(["driverId", driverId], fetchDriver);
  const driver = result.data;
  const standings = useQuery(["id", driverId], fetchDriverStandings);
  standings.data?.MRData.StandingsTable.StandingsLists.sort(
    (a, b) => b.season - a.season
  );
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {driver?.givenName} {driver?.familyName} ({driver?.code})
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <i className="fa-solid fa-arrow-right"></i> Date of Birth:&nbsp;
              {driver?.dateOfBirth}
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa-solid fa-arrow-right"></i> Nationality:&nbsp;
              {driver?.nationality}
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa-solid fa-arrow-right"></i> Number:&nbsp; #
              {driver?.permanentNumber}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Body>
          <Card.Link href={driver?.url}>More info</Card.Link>
        </Card.Body>
      </Card>
      {standings.data ? (
        <DriverStandings driverStandings={standings.data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DriversShow;
