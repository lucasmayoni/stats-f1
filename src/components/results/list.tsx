import { Badge, Spinner, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fetchSearchResults from "../../api/fetchResults";
import { useQuery } from "@tanstack/react-query";
import RaceStatus from "../common/raceStatus";
import "./list.css";
import "../../styles/table.css";

const ResultList = () => {
  const { season, round } = useParams();
  const obj = {
    season: season ?? "",
    round: round ?? "",
  };
  const { data: searchResult, isLoading } = useQuery(
    ["search", obj],
    fetchSearchResults,
    {
      enabled: obj.season !== "" && obj.round !== "",
    }
  );

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const raceResults = searchResult?.MRData?.RaceTable?.Races[0]?.Results ?? [];

  const raceInfo = searchResult?.MRData.RaceTable.Races[0];

  const Trophy = ({ position }: { position: number }) => {
    switch (position) {
      case 1:
        return (
          <i className="fa-solid fa-trophy" style={{ color: "#ffdd00" }}></i>
        );
      case 2:
        return (
          <i className="fa-solid fa-trophy" style={{ color: "#c2c2c2" }}></i>
        );
      case 3:
        return (
          <i className="fa-solid fa-trophy" style={{ color: "#b36800" }}></i>
        );
      default:
        return "";
    }
  };

  const GridVariation = ({
    position,
    grid,
  }: {
    position: number;
    grid?: number;
  }) => {
    if (position === grid || grid === undefined) {
      return (
        <Badge pill bg="dark">
          <i className="fa-solid fa-minus "></i>
        </Badge>
      );
    } else if (
      parseInt(position.toString(), 10) < parseInt(grid.toString(), 10)
    ) {
      console.log(position, grid, position < grid);
      return (
        <Badge bg="success" pill>
          <i className="fa-solid fa-arrow-up">&nbsp;{grid - position}</i>
        </Badge>
      );
    } else {
      return (
        <Badge pill bg="danger">
          <i className="fa-solid fa-arrow-down ">&nbsp;{grid - position}</i>
        </Badge>
      );
    }
  };
  return (
    <div>
        <Table hover bordered className="table-custom">
        <thead>
          <tr>
            <th colSpan={9}>
              Results from: {raceInfo?.raceName} - {raceInfo?.Circuit.circuitName}
            </th>
          </tr>
          <tr>
            <th className="tableColumnHeader-md centered">#</th>
            <th className="tableColumnHeader-sm">Position</th>
            <th className="tableColumnHeader-sm">Grid</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th className="tableColumnHeader-sm">Laps</th>
            <th>Time</th>
            <th className="tableColumnHeader-sm">Status</th>
            <th className="tableColumnHeader-sm">Points</th>
          </tr>
        </thead>
        <tbody>
          {raceResults.map((result) => (
            <tr>
              <td style={{ textAlign: "center" }}>
                <GridVariation position={result.position} grid={result.grid} />
              </td>
              <td style={{ textAlign: "center" }}>
                <Trophy position={result.position} />
                &nbsp;
                {result.position}
              </td>
              <td style={{ textAlign: "center" }}>{result.grid}</td>
              <td>
                {result.Driver.givenName} {result.Driver.familyName} (
                {result.Driver.code})
              </td>
              <td>{result.Constructor?.name}</td>
              <td>{result.laps}</td>
              <td>
                {result.Time?.time || result.FastestLap?.Time?.time}
                {result.FastestLap?.rank === "1" ? (
                  <i
                    style={{ marginLeft: "5px", color: "#5f05ff" }}
                    title="Fastest lap"
                    className="fa-solid fa-stopwatch"
                  ></i>
                ) : (
                  ""
                )}
              </td>
              <td>
                <RaceStatus status={result.status} />
              </td>
              <td>{result.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ResultList;
