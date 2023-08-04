import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCircuit from "../../api/fetchCircuit";
import { Card, ListGroup } from "react-bootstrap";

const CircuitShow = () => {
  const { circuitId } = useParams();
  const circuitInfo = useQuery(["circuitId", circuitId], fetchCircuit);
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <i className="fa-solid fa-arrow-right"></i> Circuit Name:&nbsp;
              {circuitInfo?.data?.circuitName}
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa-solid fa-arrow-right"></i> Location:&nbsp;
              {circuitInfo?.data?.Location.locality}&nbsp;
              {circuitInfo?.data?.Location.country}
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa-solid fa-arrow-right"></i> Latitude:&nbsp;
              {circuitInfo?.data?.Location.lat}
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fa-solid fa-arrow-right"></i> Longitude:&nbsp;
              {circuitInfo?.data?.Location.long}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CircuitShow;
