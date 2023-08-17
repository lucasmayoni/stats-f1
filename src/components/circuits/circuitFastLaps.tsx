import { Table } from "react-bootstrap";
import { IResultLists } from "../../models/interfaces";

const CircuitFastLaps = ({ data }: { data: IResultLists }) => {
  const results = data?.MRData?.RaceTable?.Races ?? [];
  results.sort((a, b) => b.season - a.season);
  return (
    <div>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th colSpan={3}>Fastests Laps</th>
          </tr>
          <tr>
            <th>Season</th>
            <th>Driver</th>
            <th>Lap Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.Circuit.circuitId}>
              <td>{result.season}</td>
              <td>
                {result.Results[0].Driver.givenName}{" "}
                {result.Results[0].Driver.familyName}
              </td>
              <td>{result.Results[0].FastestLap?.Time.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default CircuitFastLaps;
