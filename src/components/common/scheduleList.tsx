import { ListGroup } from "react-bootstrap";
import { ISchedule } from "../../models/interfaces";

const RaceScheduleList = ({ schedule }: { schedule: ISchedule }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        Practice 1: {schedule.FirstPractice.date}
        {schedule.FirstPractice.time}
      </ListGroup.Item>
      <ListGroup.Item>
        Practice 2: {schedule.SecondPractice.date}
        {schedule.SecondPractice.time}
      </ListGroup.Item>
      {schedule.ThirdPractice && (
        <ListGroup.Item>
          Practice 3: {schedule.ThirdPractice.date}
          {schedule.ThirdPractice.time}
        </ListGroup.Item>
      )}
      {schedule.Sprint && (
        <ListGroup.Item>
          Sprint: {schedule.Sprint.date}
          {schedule.Sprint.time}
        </ListGroup.Item>
      )}
      <ListGroup.Item>
        Qualifying: {schedule.Qualifying?.date}
        {schedule.Qualifying?.time}
      </ListGroup.Item>
    </ListGroup>
  );
};
export default RaceScheduleList;
