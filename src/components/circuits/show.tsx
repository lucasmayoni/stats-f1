import { useParams } from "react-router-dom";

const CircuitShow = () => {
  const { circuitId } = useParams();
  return <h3>CIRCUIT INFO</h3>;
};
export default CircuitShow;
