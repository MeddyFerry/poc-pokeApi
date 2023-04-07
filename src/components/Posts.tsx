import React from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import "./posts.css";

const Posts = ({ currentPosts }) => {
  const navigate = useNavigate();
  const hoverVariants = {
    hover: {
      scale: 1.17,
      rotate: 5,
      transition: {
        duration: 0.2,
        type: "tween",
      },
    },
  };

  return (
    <div className="flex flex-wrap justify-center">
      {currentPosts.map((post, index) => {
        return (
          <motion.div
            key={index}
            className="w-1/4 p-4 card"
            whileHover="hover"
            variants={hoverVariants}
            onClick={() => {
              navigate(`/pokemon/${post.name}`);
            }}
          >
            <img src={post.image} alt={post.name} className="mx-auto mb-4" />
            <h2 className="text-center text-white text-1xl ">{post.name}</h2>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Posts;
