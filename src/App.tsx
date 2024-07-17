import { Map } from "react-map-gl";

const MAPBOX_STYLES = {
  light: "mapbox://styles/mapbox/light-v9",
  dark: "mapbox://styles/mapbox/dark-v9",
  streets: "mapbox://styles/mapbox/streets-v9",
  outdoors: "mapbox://styles/mapbox/outdoors-v9",
  satellite: "mapbox://styles/mapbox/satellite-streets-v9",
  customStreets: "mapbox://styles/communitylogiq/cl4nfqn13000115qodliwpes5",
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
        longitude: -124.00597106759845,
        latitude: 49.18253094260672,
        zoom: 12,
      }}
      mapStyle={MAPBOX_STYLES.customStreets}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      logoPosition="top-left"
      onClick={console.log}
    ></Map>
  );
}

export default App;
