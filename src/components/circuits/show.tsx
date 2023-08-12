import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCircuit from "../../api/circuits/fetchCircuit";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import fetchCircuitFastestsLaps from "../../api/circuits/fetchCircuitFastestsLaps";
import CircuitFastLaps from "./circuitFastLaps";
import CircuitMap from "./circuitMap";

const CircuitShow = () => {
  const { circuitId } = useParams();
  const { data: circuitInfo } = useQuery(
    ["circuitId", circuitId],
    fetchCircuit
  );

  const { data: circuitFastestsLaps } = useQuery(
    ["id", circuitInfo?.circuitId],
    fetchCircuitFastestsLaps
  );
  return (
    <div>
      <Row>
        <Col sm={6}>
          <Card style={{ border: "0px none" }}>
            <Card.Body>
              <Card.Title>Circuit Information</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ paddingLeft: "0px" }}>
                  <i className="fa-solid fa-sign-hanging"></i> Circuit
                  Name:&nbsp;
                  {circuitInfo?.circuitName}
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: "0px" }}>
                  <i className="fa-solid fa-location-dot"></i> Location:&nbsp;
                  {circuitInfo?.Location.locality}&nbsp;
                  {circuitInfo?.Location.country}
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: "0px" }}>
                  <i className="fa-solid fa-map-location-dot"></i>{" "}
                  Latitude:&nbsp;
                  {circuitInfo?.Location.lat}
                </ListGroup.Item>
                <ListGroup.Item style={{ paddingLeft: "0px" }}>
                  <i className="fa-solid fa-map-location-dot"></i>{" "}
                  Longitude:&nbsp;
                  {circuitInfo?.Location.long}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <CircuitMap
            latitude={circuitInfo?.Location.lat}
            longitude={circuitInfo?.Location.long}
            circuitName={circuitInfo?.circuitName}
          />
        </Col>
      </Row>
      <Row bordered>
        <Col sm={6}>
          <CircuitFastLaps data={circuitFastestsLaps!} />
        </Col>
        <Col sm={6}></Col>
      </Row>
    </div>
  );
};
export default CircuitShow;
