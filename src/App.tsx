import { Map, Source, Layer } from "react-map-gl";
import data from "./data";
import { FillLayerSpecification } from "mapbox-gl";

const MAPBOX_STYLES = {
  light: "mapbox://styles/mapbox/light-v9",
  dark: "mapbox://styles/mapbox/dark-v9",
  streets: "mapbox://styles/mapbox/streets-v9",
  outdoors: "mapbox://styles/mapbox/outdoors-v9",
  satellite: "mapbox://styles/mapbox/satellite-streets-v9",
  customStreets: "mapbox://styles/communitylogiq/cl4nfqn13000115qodliwpes5",
};

const style: Omit<FillLayerSpecification, "id" | "source"> = {
  type: "fill",
  paint: {
    "fill-color": "orange",
    "fill-opacity": 0.9,
  },
};

function App() {
  return (
    <Map
      // seems to be slight type mismatch between
      // react-map-gl and mapbox-gl.
      // ignore until we discover its a problem.
      // Could also try upgrading mapbox-gl
      // @ts-ignore
      mapLib={import("mapbox-gl")}
      initialViewState={{
        latitude: 49.190956386059554,
        longitude: -123.99084221671657,
        zoom: 14.571518385838502,
      }}
      mapStyle={MAPBOX_STYLES.customStreets}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      logoPosition="top-left"
      interactiveLayerIds={["my-data"]}
      onClick={(ev) => console.log(ev.features)}
    >
      <Source id="my-data" type="geojson" data={data}>
        <Layer id="my-data" {...style} />
      </Source>
    </Map>
  );
}

export default App;
