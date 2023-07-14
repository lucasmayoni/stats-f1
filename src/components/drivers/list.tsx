import fetchDrivers from "../../api/fetchDrivers";
import { Button, Table } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const DriversList = () => {
  const { year } = useParams();
  const result = useQuery(["year", year], fetchDrivers);
  const drivers = result?.data?.MRData?.DriverTable?.Drivers ?? [];
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={5}>Drivers List for season {year}</th>
        </tr>
        <tr>
          <th>Number </th>
          <th>Code</th>
          <th>Name</th>
          <th>Nationality</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((driver) => (
          <tr key={driver.driverId}>
            <td>#&nbsp;{driver.permanentNumber}</td>
            <td>{driver.code}</td>
            <td>
              {driver.givenName} {driver.familyName}
            </td>
            <td>{driver.nationality}</td>
            <td>
              <Button
                size="sm"
                variant="primary"
                href={`/drivers/show/${driver.driverId}`}
              >
                INFO
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default DriversList;
