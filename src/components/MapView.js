import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 28.6139, // Delhi (change if needed)
  lng: 77.209,
};

function MapView() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;
