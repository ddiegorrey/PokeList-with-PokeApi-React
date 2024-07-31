import "./../Filter/index.css";

interface PokeProps {
  PokeName: string;
  PokeId: number;
  PokeImage: string;
  PokeTypes: string[];
}

export default function PokemonCard({
  PokeName,
  PokeId,
  PokeImage,
  PokeTypes,
}: PokeProps) {
  return (
    <div className="card pokecard">
      <img src={PokeImage} className="pokeimg" alt="PokemonImage" />
      <div className="card-body">
        <h5 className="card-title">{PokeName}</h5>
        <p className="card-text">{PokeId}</p>
        <div>
          {PokeTypes.map((type) => (
            <p key={type} className={`btn-custom btn-${type}`}>
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
