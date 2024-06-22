import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCircuit from "../../api/circuits/fetchCircuit";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import fetchCircuitFastestsLaps from "../../api/circuits/fetchCircuitFastestsLaps";
import CircuitFastLaps from "./circuitFastLaps";
import CircuitMap from "./circuitMap";
import { useEffect, useState } from "react";
import { getCircuits } from "../../api/sportsapi/circuitsAPIClient";
import '../../styles/card.css';
import '../../styles/table.css';

const CircuitShow = () => {

  const [circuitDetInfo, setCircuitDetInfo] = useState([]);

  const { circuitId } = useParams();
  const { data: circuitInfo } = useQuery(
    ["circuitId", circuitId],
    fetchCircuit
  );

  const { data: circuitFastestsLaps } = useQuery(
    ["id", circuitInfo?.circuitId],
    fetchCircuitFastestsLaps
  );
  useEffect(() => {
      const fetchCircuitData = async () => {
        try {
            const response = await getCircuits(circuitId?.toString().toLowerCase().replace("_", " ")); 
            const circuitImage = response.response[0].image;
            setCircuitDetInfo(circuitImage);      
        } catch (error) {
          console.error('Error fetching Circuit Info');
        }
      }
      fetchCircuitData();
  },[]);
  return (
    <div>
      <Row>
        <Col sm={6}>
          <Card className="card-custom">
          <Card.Header className="card-custom-header">
              Circuit Information
              </Card.Header>
            <Card.Body>
              
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
                <ListGroup.Item>
                  <Image width="300" src={circuitDetInfo.toString()} />
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
