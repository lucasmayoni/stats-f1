import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchDriver from "../../api/fetchDriver";
import { Card, ListGroup } from "react-bootstrap";

const DriversShow = () => {
  const { driverId } = useParams();
  const result = useQuery(["driverId", driverId], fetchDriver);
  const driver = result.data?.MRData.DriverTable.Drivers[0];
  return (
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
  );
};

export default DriversShow;
