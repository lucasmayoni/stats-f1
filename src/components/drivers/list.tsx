import fetchDrivers from "../../api/drivers/fetchDrivers";
import { Button, Table } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { convertFlagSuffix} from '../../utils/DateConverter';
import '../../styles/table.css';

const DriversList = () => {
  const { year } = useParams();
  const result = useQuery(["year", year], fetchDrivers);
  const drivers = result?.data?.MRData?.DriverTable?.Drivers ?? [];
  return (
    <Table bordered hover className="table-custom">
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
            <td><img src={`https://flagsapi.com/${convertFlagSuffix(driver.nationality.toString())}/flat/32.png`}></img> &nbsp;&nbsp;{driver.nationality}</td>
            <td>
              
              <Button
                style={{color: "#555"}}
                size="sm"
                variant="link"
                href={`/drivers/show/${driver.driverId}`}
              >
                <i className="fa fa-info-circle"></i>&nbsp;INFO
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default DriversList;
