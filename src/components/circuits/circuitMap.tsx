import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const CircuitMap = ({
  latitude,
  longitude,
  circuitName,
}: {
  latitude: number | undefined;
  longitude: number | undefined;
  circuitName: string | undefined;
}) => {
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
  return (
    <ComposableMap
      width={800}
      height={300}
      projection="geoMercator"
      projectionConfig={{
        // logngitude, latitude
        center: [longitude!, latitude!],
        scale: 600,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#dcdce0"
              stroke="#EAEAEC"
            />
          ))
        }
      </Geographies>
      {/* logngitude, latitude */}
      <Marker coordinates={[longitude!, latitude!]}>
        <g
          fill="none"
          stroke="#FF5533"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-12, -24)"
        >
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
        </g>
        <text
          textAnchor="middle"
          y={10}
          style={{ fill: "#5D5A6D", fontSize: "8px" }}
        >
          {circuitName}
        </text>
      </Marker>
    </ComposableMap>
  );
};
export default CircuitMap;
