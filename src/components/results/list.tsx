import { IResult } from "../../models/interfaces";

const ResultList = ({ raceResults }: { raceResults: IResult[] }) => {
  return (
    <div>
      <h1>Results</h1>
      {!raceResults.length ? (
        <p>No results</p>
      ) : (
        <ul>
          {raceResults.map((result) => (
            <li key={result.position}>{result.Driver.code}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ResultList;
