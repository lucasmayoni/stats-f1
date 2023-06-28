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
          <th>Code</th>
          <th>Name</th>
          <th>Number</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((driver) => (
          <tr key={driver.driverId}>
            <td>{driver.code}</td>
            <td>
              {driver.givenName} {driver.familyName}
            </td>
            <td>{driver.permanentNumber}</td>
            <td>
              <Button
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
