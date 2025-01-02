import { Table } from "react-bootstrap";
import { IDriverStandingsLists } from "../../models/interfaces";
import '../../styles/table.css';
const DriverStandings = ({
  driverStandings,
}: {
  driverStandings: IDriverStandingsLists;
}) => {
  return (
      <Table bordered hover className="table-custom">
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
          {driverStandings?.MRData.StandingsTable.StandingsLists?.map(
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
  );
};
export default DriverStandings;
