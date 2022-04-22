import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PokemonDiscoveryPage from "../src/components/PokemonDiscoveryPage";

function App() {
  return (
    <div className="App">
      <Link to="/">Home Page</Link>
      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />} />
      </Routes>
    </div>
  );
}

export default App;
