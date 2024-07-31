import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import "./index.css";

interface Pokemon {
  PokeName: string;
  PokeId: number;
  PokeImage: string;
  PokeTypes: string[];
}

interface PokemonListProps {
  selectedType: string | null;
}

export default function PokemonList({ selectedType }: PokemonListProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const maxPoke = 151;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= maxPoke; i++) {
          promises.push(fetch(`${url}${i}/`).then((res) => res.json()));
        }
        const results = await Promise.all(promises);
        const pokemonData = results.map((pokemon: any) => ({
          PokeName: pokemon.name,
          PokeId: pokemon.id,
          PokeImage: pokemon.sprites.front_default,
          PokeTypes: pokemon.types.map((typeInfo: any) => typeInfo.type.name),
        }));
        setPokemons(pokemonData);
        setFilteredPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    if (selectedType) {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.PokeTypes.includes(selectedType)
      );
      setFilteredPokemons(filtered);
    } else {
      setFilteredPokemons(pokemons);
    }
  }, [selectedType, pokemons]);

  return (
    <div className="container">
      <div className="row">
        {filteredPokemons.map((pokemon) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={pokemon.PokeId}
          >
            <PokemonCard
              PokeName={pokemon.PokeName}
              PokeId={pokemon.PokeId}
              PokeImage={pokemon.PokeImage}
              PokeTypes={pokemon.PokeTypes}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
