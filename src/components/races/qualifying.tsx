import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchRaceQualifyingResults from "../../api/fetchRaceQualifyingResults";
import { Table } from "react-bootstrap";

const Qualifying = () => {
  const { season, round } = useParams();
  const obj = {
    season: season ?? "",
    round: round ?? "",
  };
  const searchResult = useQuery(["search", obj], fetchRaceQualifyingResults, {
    enabled: obj.season !== "" && obj.round !== "",
  });
  const qualyInfo = searchResult.data?.MRData.RaceTable.Races[0];
  const qualyResults =
    searchResult.data?.MRData.RaceTable.Races[0].QualifyingResults ?? [];
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={6}>
              Qualifying Results <i className="fa fa-solid fa-arrow-right"></i>
              &nbsp;
              {qualyInfo?.raceName}
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Driver</th>
            <th>Position</th>
            <th>Time Q1</th>
            <th>Time Q2</th>
            <th>Time Q3</th>
          </tr>
        </thead>
        <tbody>
          {qualyResults.map((result) => (
            <tr>
              <td>{result.Driver.permanentNumber}</td>
              <td>
                {result.Driver.givenName} {result.Driver.familyName}
              </td>
              <td>{result.position}</td>
              <td>{result.Q1}</td>
              <td>{result.Q2}</td>
              <td>{result.Q3}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Qualifying;
