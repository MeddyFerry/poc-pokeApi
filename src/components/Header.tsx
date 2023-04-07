import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";

function Header() {
  const hoverVariants = {
    hover: {
      scale: 1.18,
      transition: {
        duration: 0.2,
        type: "tween",
      },
    },
  };

  return (
    <div className=" flex flex-col justify-center items-center content-center">
      <Link
        to="/"
        className="logo-link"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.img
          src={logo}
          alt="My Image"
          variants={hoverVariants}
          whileHover="hover"
          className="w-1/2 h-1/2"
        />
      </Link>
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
