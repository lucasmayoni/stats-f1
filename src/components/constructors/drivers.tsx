import { Card, ListGroup } from "react-bootstrap";
import { constructorWithDrivers } from "../../api/constructors/fetchConstructors";
import { IDriver, IDriverList } from "../../models/interfaces";
import { useEffect, useState } from "react";

const DriversDetail = ({ season, constructorId }: { season: string, constructorId: string }) => {
    const [data, setData] = useState<IDriverList>();
    useEffect(() => {
        constructorWithDrivers(season, constructorId).then((res) => {
            setData(res);
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    if (!data) {
        return <div>Loading...</div>;
    }
    return (

        <ListGroup variant="flush">
            {
                data.MRData?.DriverTable?.Drivers.map((driver, idx) => (
                    <ListGroup.Item key={idx}>{driver.givenName} {driver.familyName}</ListGroup.Item>
                ))
            }
        </ListGroup>

    )
}

export default DriversDetail;