import { useState } from "react";
import Navbar from "./Components/Navbar";
import FiltersButton from "./Components/Filter";
import PokemonList from "./Components/ListPokemon";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleFilterChange = (type: string | null) => {
    setSelectedType(type);
  };

  return (
    <>
      <Navbar />
      <FiltersButton onFilterChange={handleFilterChange} />
      <PokemonList selectedType={selectedType} />
    </>
  );
}
