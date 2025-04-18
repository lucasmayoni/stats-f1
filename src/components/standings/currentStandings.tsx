import { useQuery } from "@tanstack/react-query";
import { Col, Row, Table } from "react-bootstrap";
import fetchCurrentStandings from "../../api/standings/fetchCurrentStandings";
import fetchConstructorStandings from "../../api/standings/fetchConstructorStandings";
import '../../styles/table.css';
const CurrentStandings = () => {
  const results = useQuery(["drivers"], fetchCurrentStandings);
  const driverStandings = 
    (results.data?.MRData.StandingsTable?.StandingsLists ?? []).length > 0 
        ? results.data?.MRData.StandingsTable.StandingsLists[0].DriverStandings 
        : [];

  const results2 = useQuery(["constructors"], fetchConstructorStandings);
  const constructorStandings = 
    (results2.data?.MRData?.total ?? 0) > 0 
        ? results2.data?.MRData.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings 
        : [];


  return (
    <div>
      <Row>
        <Col sm={6}>
          <Table className="table-custom" hover bordered>
            <thead>
              <tr>
                <th colSpan={5}>Current Season Driver Standings</th>
              </tr>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Points</th>
                <th>Wins</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {driverStandings?.map((driverInfo: any) => (
                <tr key={driverInfo.Constructors[0].constructorId}>
                  <td>{driverInfo.position}</td>
                  <td>
                    {driverInfo.Driver.givenName} {driverInfo.Driver.familyName}
                  </td>
                  <td>{driverInfo.points}</td>
                  <td>{driverInfo.wins}</td>
                  <td>{driverInfo.Constructors[0].name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col sm={6}>
          <Table className="table-custom" hover bordered>
            <thead>
              <tr>
                <th colSpan={4}>Current Season Constructor Standings</th>
              </tr>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Points</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {constructorStandings?.map((constructorInfo: any) => (
                <tr key={constructorInfo.constructorId}>
                  <td>{constructorInfo.position}</td>
                  <td>{constructorInfo.Constructor.name}</td>
                  <td>{constructorInfo.points}</td>
                  <td>{constructorInfo.wins}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
export default CurrentStandings;
