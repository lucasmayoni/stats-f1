import { Table, Badge, OverlayTrigger, Popover } from "react-bootstrap";
import { IRace } from "../../models/interfaces";
import { Link } from "react-router-dom";

const RacesList = ({ scheduleResults }: { scheduleResults: IRace[] }) => {
  const date = new Date().toISOString().split("T")[0];
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  return (
    <div>
      <Table hover striped responsive bordered>
        <thead>
          <tr>
            <th>Round</th>
            <th>Race Name</th>
            <th>Circuit Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {scheduleResults.map((schedule) => (
            <tr key={schedule.round}>
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
              <td style={{ width: "20px", textAlign: "center" }}>
                <OverlayTrigger
                  rootCloseEvent="click"
                  rootClose={true}
                  trigger="click"
                  placement="left"
                  overlay={popover}
                >
                  <i className="fa-solid fa-clock"></i>
                </OverlayTrigger>
              </td>
              <td style={{ width: "20px", textAlign: "center" }}>
                <Link
                  title="See race results"
                  to={`/results/${schedule.season}/${schedule.round}`}
                  style={{ color: "#000000" }}
                >
                  <i className="fa-solid fa-table-list"></i>
                </Link>
              </td>
              <td style={{ width: "20px", textAlign: "center" }}>
                <Link
                  title="See circuit detailed info"
                  to={`/circuit/show/${schedule.Circuit.circuitId}`}
                  style={{ color: "#000000" }}
                >
                  <i className="fa-solid fa-info"></i>
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
