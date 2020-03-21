import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAPITULOS } from "../../GQL/Querys";
import Capitulos from "../Capitulos/Capitulos";
import { Spinner } from "reactstrap";

export default function Inicio() {
  const { data, loading, error } = useQuery(GET_CAPITULOS);
  if (loading)
    return (
      <div className="text-center">
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      </div>
    );
  if (error) return `${error}`;
  if (!data) return "Not found";

  return (
    <div className="App">
      <h1>Personajes de Breaking Bad</h1>
      <Capitulos characters={data.characters} />
    </div>
  );
}
