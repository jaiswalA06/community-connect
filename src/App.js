import MapView from "./components/MapView";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CommunityConnect</h1>

      <div style={{ padding: "10px", textAlign: "center" }}>
        <p>Discover nearby community resources and volunteer opportunities</p>
      </div>

      <MapView />
    </div>
  );
}
export default App;
