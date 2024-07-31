import "./index.css";
import Pokelogo from "./../../assets/pokeball.png";

export default function Navbar() {
  return (
    <>
      {/* Bootstap Navbar */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <img
              src={Pokelogo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top "
            />
            Pokemon
          </a>
        </div>
      </nav>
    </>
  );
}
