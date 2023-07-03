import { Button, Col, Form, Row } from "react-bootstrap";
import RacesList from "./list";
import { useQuery } from "@tanstack/react-query";
import fetchSeasons from "../../api/fetchSeasons";
import { useState } from "react";
import fetchRaces from "../../api/fetchRaces";

const Schedules = () => {
  const result = useQuery([], fetchSeasons);
  const [request, setRequest] = useState({ season: "" });
  const seasons = result.data?.MRData.SeasonTable.Seasons ?? [];
  const searchResult = useQuery(["search", request], fetchRaces, {
    enabled: request.season !== "",
  });
  const scheduleResults = searchResult.data?.MRData.RaceTable.Races ?? [];
  return (
    <div>
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
                <option>{season.season}</option>
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
      <RacesList scheduleResults={scheduleResults} />
    </div>
  );
};
export default Schedules;
