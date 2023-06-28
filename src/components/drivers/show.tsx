import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchDriver from "../../api/fetchDriver";

const DriversShow = () => {
  const { driverId } = useParams();
  const result = useQuery(["driverId", driverId], fetchDriver);
  const driver = result.data?.MRData.DriverTable.Drivers[0];
  return <div>{!driver ? <h1>LOADING</h1> : <h1>{driver.code}</h1>}</div>;
};

export default DriversShow;
