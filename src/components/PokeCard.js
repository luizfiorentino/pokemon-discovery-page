import React from "react";
import { Link } from "react-router-dom";

export default function PokeCard({ name }) {
  return (
    <div>
      <h2>*</h2>
      <h2>
        <Link to={`/details/${name}`}>{name}</Link>
      </h2>
    </div>
  );
}
