import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import PokeCard from "./PokeCard";

export default function PokemonDiscoveryPage() {
  const [getPokes, setPokes] = useState([]);

  useEffect(() => {
    async function takePokes() {
      try {
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=151`;
        const response = await axios.get(URL);
        console.log(response);
        setPokes(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    takePokes();
  }, []);

  return (
    <div>
      <h1>PokemonDiscoveryPage</h1>
      {getPokes ? (
        getPokes.map((poke, i) => {
          return <PokeCard key={i} name={poke.name} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
