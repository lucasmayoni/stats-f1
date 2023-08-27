import { ListGroup } from "react-bootstrap";
import { ISchedule } from "../../models/interfaces";
import { convertTimeZone } from "../../utils/DateConverter";

const RaceScheduleDetail = ({ schedule }: { schedule: ISchedule }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        Practice 1: {schedule.FirstPractice.date}&nbsp;
        {convertTimeZone(schedule.FirstPractice.time)[0] +
          ":" +
          convertTimeZone(schedule.FirstPractice.time)[1]}
      </ListGroup.Item>
      <ListGroup.Item>
        Practice 2: {schedule.SecondPractice.date}&nbsp;
        {convertTimeZone(schedule.SecondPractice.time)[0] +
          ":" +
          convertTimeZone(schedule.SecondPractice.time)[1]}
      </ListGroup.Item>
      {schedule.ThirdPractice && (
        <ListGroup.Item>
          Practice 3: {schedule.ThirdPractice.date}&nbsp;
          {convertTimeZone(schedule.ThirdPractice.time)[0] +
            ":" +
            convertTimeZone(schedule.ThirdPractice.time)[1]}
        </ListGroup.Item>
      )}
      {schedule.Sprint && (
        <ListGroup.Item>
          Sprint: {schedule.Sprint.date}&nbsp;
          {convertTimeZone(schedule.Sprint.time)[0] +
            ":" +
            convertTimeZone(schedule.Sprint.time)[1]}
        </ListGroup.Item>
      )}
      <ListGroup.Item>
        Qualifying: {schedule.Qualifying?.date}&nbsp;
        {convertTimeZone(schedule.Qualifying?.time ?? "")[0] +
          ":" +
          convertTimeZone(schedule.Qualifying?.time ?? "")[1]}
      </ListGroup.Item>
    </ListGroup>
  );
};
export default RaceScheduleDetail;
