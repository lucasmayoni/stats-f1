import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchDriver from "../../api/drivers/fetchDriver";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import DriverStandings from "./standings";
import fetchDriverStandings from "../../api/drivers/fecthDriverStandings";
import { useEffect, useState } from "react";
import { getDrivers } from "../../api/sportsapi/driversAPIClient";
import '../../styles/card.css';
import { convertFlagSuffix } from "../../utils/DateConverter";


const DriversShow = () => {
  const { driverId } = useParams();
  const [driverDetInfo, setDriverDetInfo] =  useState([]);
  const result = useQuery(["driverId", driverId], fetchDriver);
  const driver = result.data;
  const standings = useQuery(["id", driverId], fetchDriverStandings);
  standings.data?.MRData.StandingsTable.StandingsLists.sort(
    (a, b) => b.season - a.season
  );
  useEffect(() =>{
    const fetchDriverData = async () => {
      try {
          const response = await getDrivers(driverId?.toString().toLowerCase().replace("_", " ")); 
          const driverImage = response.response[0].image;
          setDriverDetInfo(driverImage);      
      } catch (error) {
        console.error('Error fetching Driver Info');
      }
    }
    fetchDriverData();
  },[]);
  return (
    
      <Row>
      <Col sm={3}>
      <Card className="card-custom">
        <Card.Header className="card-custom-header">
        {driver?.givenName} {driver?.familyName} ({driver?.code})
        </Card.Header>
        <Card.Img className="card-custom-img" variant="top" src={driverDetInfo.toString()}></Card.Img>
        <Card.Body className="card-custom-body">
          <ListGroup variant="flush">
            <ListGroup.Item className="card-custom-text">
              <i className="fa-solid fa-arrow-right"></i> Date of Birth:&nbsp;
              {driver?.dateOfBirth}
            </ListGroup.Item>
            <ListGroup.Item className="card-custom-text">
              <i className="fa-solid fa-arrow-right"></i> Nationality:&nbsp;
              <img src={`https://flagsapi.com/${convertFlagSuffix(driver?.nationality || 'none')}/flat/32.png`}></img> &nbsp;{driver?.nationality} 
            </ListGroup.Item>
            <ListGroup.Item className="card-custom-text">
              <i className="fa-solid fa-arrow-right"></i> Number:&nbsp; #
              {driver?.permanentNumber}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="card-custom-footer">
          <Card.Link href={driver?.url}><i className="fa fa-circle-info"></i> &nbsp;More info</Card.Link>
        </Card.Footer>
      </Card>
      </Col>
      <Col sm={9}>
      {standings.data ? (
        <DriverStandings driverStandings={standings.data} />
      ) : (
        <div>Loading...</div>
      )}
      </Col>
      </Row>
    
  );
};

export default DriversShow;
