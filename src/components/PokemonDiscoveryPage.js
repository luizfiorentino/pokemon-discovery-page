import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokeCard from "./PokeCard";

export default function PokemonDiscoveryPage() {
  const [getPokes, setPokes] = useState([]);
  const [getFilter, setFilter] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      async function takePokes() {
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=151`;
        const response = await axios.get(URL);
        console.log(response);
        setPokes(response.data.results);
      }
      takePokes();
      if (params.getFilter) {
        setFilter(params.getFilter);
      } else {
        setFilter("");
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const filteredChars = (event) => {
    setFilter(event.target.value);
    navigate(`/${event.target.value}`);
  };

  return (
    <div>
      <h1>PokemonDiscoveryPage</h1>
      <input type="text" value={getFilter} onChange={filteredChars} />
      {getPokes ? (
        getPokes
          .filter((poke) => poke.name.startsWith(getFilter))
          .map((poke, i) => <PokeCard key={i} name={poke.name} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
