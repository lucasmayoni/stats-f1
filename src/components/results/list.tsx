import { Table } from "react-bootstrap";
import { IResult } from "../../models/interfaces";

const ResultList = ({ raceResults }: { raceResults: IResult[] }) => {
  return (
    <div>
      <h1>Results</h1>
      {!raceResults.length ? (
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
