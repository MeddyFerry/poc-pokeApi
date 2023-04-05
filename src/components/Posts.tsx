import React from "react";
import { motion } from "framer-motion";
import "./posts.css";

const Posts = ({ currentPosts }) => {
  const hoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 10px #9CA3AF",
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
          >
            <img src={post.image} alt={post.name} className="mx-auto mb-4" />
            <h2 className="text-center">{post.name}</h2>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Posts;
