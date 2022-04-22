import React from "react";
import { useParams } from "react-router-dom";

export default function PokeDetails() {
  const route_params = useParams();
  console.log(route_params);

  return (
    <div>
      <p>PokeDetails</p>
      <h2>{route_params.pokemon_name}</h2>
    </div>
  );
}
