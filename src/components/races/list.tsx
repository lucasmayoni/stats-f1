import { useQuery } from "@tanstack/react-query";
import { Table, Badge } from "react-bootstrap";
import fetchRaces from "../../api/fetchRaces";
import { useParams } from "react-router-dom";
import { IRace } from "../../models/interfaces";

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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RacesList;
