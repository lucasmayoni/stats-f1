import { Table, Badge } from "react-bootstrap";
import { IRace } from "../../models/interfaces";
import { Link } from "react-router-dom";

const RacesList = ({ scheduleResults }: { scheduleResults: IRace[] }) => {
  const date = new Date().toISOString().split("T")[0];
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Race Name</th>
            <th>Circuit Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {scheduleResults.map((schedule) => (
            <tr>
              <td>{schedule.round}</td>
              <td>{schedule.raceName}</td>
              <td>{schedule.Circuit.circuitName}</td>
              <td>{schedule.date}</td>
              <td>{schedule.time}</td>
              {schedule.date < date ? (
                <td>
                  <Badge bg="success">Finished</Badge>
                </td>
              ) : (
                <td>
                  <Badge bg="warning">Pending</Badge>
                </td>
              )}
              <td>
                <Link to={`/results/${schedule.season}/${schedule.round}`}>
                  <i className="bi bi-card-checklist"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RacesList;
