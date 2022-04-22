import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PokemonDiscoveryPage from "../src/components/PokemonDiscoveryPage";
import PokeDetails from "./components/PokeDetails";

function App() {
  return (
    <div className="App">
      <Link to="/">Home Page</Link>
      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />}>
          <Route path=":getFilter" element={<PokemonDiscoveryPage />} />
        </Route>
        <Route path="/details/:pokemon_name" element={<PokeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
