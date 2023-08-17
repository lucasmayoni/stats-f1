import { useQuery } from "@tanstack/react-query";
import { Col, Row, Table } from "react-bootstrap";
import fetchCurrentStandings from "../../api/standings/fetchCurrentStandings";
import fetchConstructorStandings from "../../api/standings/fetchConstructorStandings";

const CurrentStandings = () => {
  const results = useQuery(["search"], fetchCurrentStandings);
  const driverStandings =
    results.data?.MRData.StandingsTable.StandingsLists[0].DriverStandings ?? [];

  // const { data: res } = useQuery(["search"], fetchConstructorStandings);
  // const constructorStandings =
  //   res?.MRData.StandingsTable.StandingLists[0].ConstructorStandings ?? [];
  return (
    <div>
      <Row>
        <Col sm={6}>
          <Table striped hover bordered>
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
              {driverStandings.map((driverInfo: any) => (
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
          {/* <Table striped hover bordered>
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
              {constructorStandings.map((constructorInfo: any) => (
                <tr key={constructorInfo.Constructors.constructorId}>
                  <td>{constructorInfo.position}</td>
                  <td>{constructorInfo.Constructor.name}</td>
                  <td>{constructorInfo.points}</td>
                  <td>{constructorInfo.wins}</td>
                </tr>
              ))}
            </tbody>
          </Table> */}
        </Col>
      </Row>
    </div>
  );
};
export default CurrentStandings;
