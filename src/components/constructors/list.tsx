import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "react-bootstrap";
import fetchConstructors from "../../api/constructors/fetchConstructors";

const ConstructorList = () => {
  const result = useQuery(["constructors"], fetchConstructors);
  const constructors =
    result?.data?.MRData?.ConstructorTable?.Constructors ?? [];
  return (
    <div>
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
          {constructors.map((constructor) => (
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
    </div>
  );
};
export default ConstructorList;
