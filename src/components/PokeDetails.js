import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PokeDetails() {
  const route_params = useParams();
  console.log(route_params);

  const [getDetails, setDetails] = useState(null); // Must be null beacuse it returns FALSE, [] returns TRUE, and it will try to render from an empty array

  useEffect(() => {
    const fetchDetails = async () => {
      const URL = `https://pokeapi.co/api/v2/pokemon/${route_params.pokemon_name}`;
      const response = await axios.get(URL);
      setDetails(response.data);
      console.log(response.data);
    };
    fetchDetails();
  }, []);

  return getDetails ? (
    <div>
      <p>PokeDetails</p>
      <h1>{getDetails.name}</h1>
      <img src={getDetails.sprites.front_default} />
      <p>{getDetails.weight} kilos</p>
      <p>
        Types:{" "}
        {getDetails.types.map((typeObj, i) => (
          <span index={i}>{typeObj.type.name} </span>
        ))}
      </p>
      <div>
        <p>Abilities:</p>{" "}
        {getDetails.abilities.map((a) => (
          <div>
            <li>{a.ability.name}</li>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p>Loading..</p>
  );
}
