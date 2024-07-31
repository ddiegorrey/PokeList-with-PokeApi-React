import "./index.css";

interface FilterProps {
  onFilterChange: (type: string | null) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  return (
    <div className="container-fluid">
      <button
        type="button"
        className="btn-custom btn-normal mx-2 mt-3"
        onClick={() => onFilterChange(null)}
      >
        All
      </button>
      <button
        type="button"
        className="btn-custom btn-normal mx-2 mt-3"
        onClick={() => onFilterChange("normal")}
      >
        Normal
      </button>
      <button
        type="button"
        className="btn-custom btn-fire mx-2 mt-3"
        onClick={() => onFilterChange("fire")}
      >
        Fire
      </button>
      <button
        type="button"
        className="btn-custom btn-water mx-2 mt-3"
        onClick={() => onFilterChange("water")}
      >
        Water
      </button>
      <button
        type="button"
        className="btn-custom btn-electric mx-2 mt-3"
        onClick={() => onFilterChange("electric")}
      >
        Electric
      </button>
      <button
        type="button"
        className="btn-custom btn-grass mx-2 mt-3"
        onClick={() => onFilterChange("grass")}
      >
        Grass
      </button>
      <button
        type="button"
        className="btn-custom btn-ice mx-2 mt-3"
        onClick={() => onFilterChange("ice")}
      >
        Ice
      </button>
      <button
        type="button"
        className="btn-custom btn-fighting mx-2 mt-3"
        onClick={() => onFilterChange("fighting")}
      >
        Fighting
      </button>
      <button
        type="button"
        className="btn-custom btn-poison mx-2 mt-3"
        onClick={() => onFilterChange("poison")}
      >
        Poison
      </button>
      <button
        type="button"
        className="btn-custom btn-ground mx-2 mt-3"
        onClick={() => onFilterChange("ground")}
      >
        Ground
      </button>
      <button
        type="button"
        className="btn-custom btn-flying mx-2 mt-3"
        onClick={() => onFilterChange("flying")}
      >
        Flying
      </button>
      <button
        type="button"
        className="btn-custom btn-psychic mx-2 mt-3"
        onClick={() => onFilterChange("psychic")}
      >
        Psychic
      </button>
      <button
        type="button"
        className="btn-custom btn-bug mx-2 mt-3"
        onClick={() => onFilterChange("bug")}
      >
        Bug
      </button>
      <button
        type="button"
        className="btn-custom btn-rock mx-2 mt-3"
        onClick={() => onFilterChange("rock")}
      >
        Rock
      </button>
      <button
        type="button"
        className="btn-custom btn-ghost mx-2 mt-3"
        onClick={() => onFilterChange("ghost")}
      >
        Ghost
      </button>
      <button
        type="button"
        className="btn-custom btn-dragon mx-2 mt-3"
        onClick={() => onFilterChange("dragon")}
      >
        Dragon
      </button>
      <button
        type="button"
        className="btn-custom btn-dark mx-2 mt-3"
        onClick={() => onFilterChange("dark")}
      >
        Dark
      </button>
      <button
        type="button"
        className="btn-custom btn-steel mx-2 mt-3"
        onClick={() => onFilterChange("steel")}
      >
        Steel
      </button>
    </div>
  );
}
