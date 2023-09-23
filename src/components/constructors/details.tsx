import { Button, Table } from "react-bootstrap";
import { IConstructor } from "../../models/interfaces";

const ConstructorDetails = ({constructorList}: {constructorList: IConstructor[]}) => {
    return (
        <Table hover striped bordered>
        <thead>
          <tr>
            <th>Constructors</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Nationality</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {constructorList.map((constructor) => (
            <tr key={constructor.constructorId}>
              <td>{constructor.name}</td>
              <td>{constructor.nationality}</td>
              <td>
                <Button
                  size="sm"
                  variant="primary"
                  href={constructor.url}
                  target="blank"
                >
                  INFO
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
}
export default ConstructorDetails;