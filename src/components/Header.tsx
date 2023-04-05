import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div
      className="flex flex-col justify-center items-center content-center"
      style={{ transform: "scale(0.5)" }}
    >
      <img src={logo} alt="My Image" />
      <h1 className="text-5xl font-bold text-center text-gray-700 mt-4 pt-4">
        Bienvenue sur le site de Pokedex
      </h1>
      <p className=" text-center text-gray-700 text-3xl mt-6 pt-3 ">
        Vous pouvez consulter la liste des pokemons et leurs caractéristiques
      </p>
    </div>
  );
}

export default Header;
