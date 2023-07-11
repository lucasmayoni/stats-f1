import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fetchSearchResults from "../../api/fetchResults";
import { useQuery } from "@tanstack/react-query";

const ResultList = () => {
  const { season, round } = useParams();
  const obj = {
    season: season ?? "",
    round: round ?? "",
  };
  const searchResult = useQuery(["search", obj], fetchSearchResults, {
    enabled: obj.season !== "" && obj.round !== "",
  });
  const raceResults =
    searchResult.data?.MRData?.RaceTable?.Races[0]?.Results ?? [];
  console.log(raceResults);
  return (
    <div>
      <h1>Results</h1>
      {raceResults.length === 0 ? (
        <p>No results</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {raceResults.map((result) => (
              <tr>
                <td>{result.position}</td>
                <td>{result.Driver.code}</td>
                <td>{result.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
export default ResultList;
