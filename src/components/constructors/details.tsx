import { Button, Card, Col, Row } from "react-bootstrap";
import { IConstructor } from "../../models/interfaces";
import DriversDetail from "./drivers";

const ConstructorDetails = ({ constructorList, season }: { constructorList: IConstructor[], season: string }) => {
  return (
    <Row xs={1} md={5} className="g-4">
      {
        constructorList.map((constructor, idx) => (
          <Col key={idx}>
            <Card style={{ width: '18rem', display: 'flex', alignItems: 'stretch' }}>
              <Card.Img variant="top" src={`../assets/${constructor.constructorId}.png`} />
              <Card.Body>
                <Card.Title>{constructor.name}</Card.Title>
                <Card.Text>
                  {constructor.nationality}
                </Card.Text>
                <DriversDetail season={season} constructorId={constructor.constructorId} />
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">More Info</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))
      }
    </Row >
  )
}
export default ConstructorDetails;