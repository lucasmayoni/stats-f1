import { Table } from "react-bootstrap";
import { IDriverStandingsLists } from "../../models/interfaces";

const DriverStandings = ({
  driverStandings,
}: {
  driverStandings: IDriverStandingsLists;
}) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th colSpan={5}>Driver Standings</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Year</th>
            <th>Team / Constructor</th>
            <th>Position</th>
            <th>Points</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {driverStandings?.MRData.StandingsTable.StandingsLists.map(
            (driverInfo) => (
              <tr
                key={
                  driverInfo.DriverStandings[0].Constructors[0].constructorId
                }
              >
                <td>{driverInfo.season}</td>
                <td>{driverInfo.DriverStandings[0].Constructors[0].name}</td>
                <td>{driverInfo.DriverStandings[0].position}</td>
                <td>{driverInfo.DriverStandings[0].points}</td>
                <td>{driverInfo.DriverStandings[0].wins}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
      <ul></ul>
    </div>
  );
};
export default DriverStandings;
