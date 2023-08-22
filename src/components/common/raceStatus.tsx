import { Badge } from "react-bootstrap";

const RaceStatus = ({ status }: { status: string }) => {
  switch (status) {
    case "Finished":
    case "+1 Lap":
      return (
        <Badge bg="success" pill>
          {status}
        </Badge>
      );
    case "Disqualified":
      return (
        <Badge bg="dark" pill>
          {status}
        </Badge>
      );
    case "Accident":
    case "Collision":
    case "Collision damage":
      return (
        <Badge bg="danger" pill>
          {status}
        </Badge>
      );
    case "Engine":
    case "Gearbox":
    case "Transmission":
    case "Clutch":
    case "Hydraulics":
    case "Electrical":
    case "Spun off":
    case "Radiator":
    case "Suspension":
    case "Brakes":
    case "Differential":
    case "Overheating":
    case "Mechanical":
    case "Tyre":
    case "Driveshaft":
    case "Driver Seat":
    case "Puncture":
    case "Power loss":
    case "Oil leak":
    case "Fuel pressure":
    case "Power Unit":
    case "Cooling system":
    case "Water pump":
    case "Fuel leak":
    case "Fuel pump":
    case "Front wing":
    case "Water leak":
    case "Water pressure":
    case "Vibrations":
    case "Turbo":
    case "Undertray":
      return (
        <Badge bg="warning" pill>
          {status}
        </Badge>
      );
    case "Retired":
    case "Withdrew":
      return (
        <Badge bg="primary" pill>
          {status}
        </Badge>
      );
    default:
      return (
        <Badge bg="secondary" pill>
          {status}
        </Badge>
      );
  }
};
export default RaceStatus;
