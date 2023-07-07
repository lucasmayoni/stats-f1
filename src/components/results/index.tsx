import { useQuery } from "@tanstack/react-query";
import { Button, Col, Form, Row } from "react-bootstrap";
import fetchSeasons from "../../api/fetchSeasons";
import { useState } from "react";
import ResultList from "./list";
import fetchSearchResults from "../../api/fetchResults";

const Results = () => {
  const [request, setRequest] = useState({ season: "", round: "" });
  const result = useQuery([], fetchSeasons);
  const seasons = result.data?.MRData.SeasonTable.Seasons ?? [];
  const sortedSeasons = seasons.sort((a, b) => b.season - a.season);
  const searchResult = useQuery(["search", request], fetchSearchResults, {
    enabled: request.season !== "" && request.round !== "",
  });
  const raceResults =
    searchResult.data?.MRData?.RaceTable?.Races[0]?.Results ?? [];
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            season: formData.get("season")?.toString() ?? "",
            round: formData.get("round")?.toString() ?? "",
          };
          setRequest(obj);
        }}
      >
        <Row>
          <Col>
            <Form.Label>Year</Form.Label>
            <Form.Select name="season">
              {sortedSeasons.map((season) => (
                <option>{season.season}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Round</Form.Label>
            <Form.Select name="round">
              {[...Array(23)].map((_, i) => (
                <option>{i + 1}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
      {/* <ResultList raceResults={raceResults} /> */}
    </div>
  );
};
export default Results;
