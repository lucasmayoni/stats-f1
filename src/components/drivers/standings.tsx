import { IDriverStandingsLists } from "../../models/interfaces";

const DriverStandings = ({
  driverStandings,
}: {
  driverStandings: IDriverStandingsLists;
}) => {
  console.log(driverStandings);
  return (
    <div>
      <h3>Driver Standings</h3>
      <ul>
        {driverStandings?.MRData.StandingsTable.StandingsLists?.map(
          (driverInfo) => (
            <li key={driverInfo.DriverStandings[0].Driver.familyName}>
              Position: {driverInfo.DriverStandings[0].position} Year:{" "}
              {driverInfo.season}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default DriverStandings;
