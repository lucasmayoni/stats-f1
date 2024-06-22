import { Button, Card, Col, Row } from "react-bootstrap";
import { IConstructor } from "../../models/interfaces";
import DriversDetail from "./drivers";
import { useEffect, useState } from "react";
import { getTeams } from "../../api/sportsapi/teamsAPIClient";
import '../../styles/card.css';


interface IConstructorWithImage extends IConstructor {
  imageUrl: string;
  teamLocation:string;
}

const ConstructorDetails = ({ constructorList, season}: {
  constructorList: IConstructor[];
  season: string;
}) => {

  const [itemsWithImage, setItemsWithImage] = useState<IConstructorWithImage[]>([]);
  const defaultImage = '../../assets/f1-logo.png';
  useEffect(() => {
    const fetchTeamData = async () =>  {
      try {
        const itemList = await Promise.all(
          constructorList.map(async (item) => {
            const response = await getTeams((item.name).toLowerCase());
            const responseSize = response.response.length;
            return {...item, imageUrl: response.response[responseSize-1]?.logo ?? defaultImage, teamLocation:response.response[responseSize-1]?.base}
          })
        );
        setItemsWithImage(itemList);
      } catch (error) {
        console.error('Error fetching images', error)
      }
    };
    fetchTeamData();
  }, [constructorList]);
  return (
    <Row xs={1} md={5} className="g-4">
      {itemsWithImage.map((constructor, idx) => (
        <Col key={idx}>
          <Card className="card-custom">
            <Card.Header className="card-custom-header">
            {constructor.name}
            </Card.Header>
            <Card.Img className="card-custom-img-constructor"
              variant="top"
              src={constructor.imageUrl}
            />
            <Card.Body className="card-custom-body">
              <Card.Text className="card-custom-text"><i className="fa fa-location-dot"></i>&nbsp;{constructor.teamLocation ?? constructor.nationality}</Card.Text>
            </Card.Body>
            <DriversDetail
              season={season}
              constructorId={constructor.constructorId}
            />
            <Card.Footer className="card-custom-footer">
            <Card.Link href={constructor.url}><i className="fa fa-circle-info"></i> &nbsp;More info</Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default ConstructorDetails;
