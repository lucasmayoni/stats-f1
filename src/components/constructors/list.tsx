import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import fetchConstructors from "../../api/constructors/fetchConstructors";
import fetchSeasons from "../../api/fetchSeasons";
import ConstructorDetails from "./details";

const ConstructorList = () => {
  const result_seasons = useQuery([], fetchSeasons);

    const [request, setRequest] = useState({ season: "" });
    const seasons = result_seasons.data?.MRData.SeasonTable.Seasons ?? [];
    seasons.sort((a, b) => b.season - a.season);
    const searchResult = useQuery(["search", request], fetchConstructors, {
      enabled: request.season !== "",
    });
    const constructors = searchResult.data?.MRData.ConstructorTable.Constructors ?? [];
  return (
    <div>
      <Row>
        <Col>
        <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            season: formData.get("season")?.toString() ?? "",
          };
          setRequest(obj);
        }}
      >
         <Row className="align-items-center">
          <Col xs="2">
            <Form.Label visuallyHidden>Year</Form.Label>
            <Form.Select name="season" className="mb-3">
              {seasons.map((season) => (
                <option key={season.season}>{season.season}</option>
              ))}
            </Form.Select>
          </Col>
          <Col xs="2">
            <Button variant="primary" type="submit" className="mb-3">
              Buscar
            </Button>
          </Col>
        </Row> 

      </Form>
        </Col>
      </Row>
      <Row>
        <Col>
        <ConstructorDetails constructorList={constructors} />
        </Col>
        </Row>
    </div>
  );
};
export default ConstructorList;
