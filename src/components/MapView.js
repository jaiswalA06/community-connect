import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 28.6139, // Delhi
  lng: 77.209,
};

function MapView() {
  const [resources, setResources] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resources"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {resources.map((res) => (
          <Marker
            key={res.id}
            position={{ lat: res.lat, lng: res.lng }}
            onClick={() => setSelected(res)}
          />
        ))}

        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <p>
                <strong>Category:</strong> {selected.category}
              </p>
              <button onClick={() => alert("Thanks for volunteering!")}>
                Volunteer
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapView;
