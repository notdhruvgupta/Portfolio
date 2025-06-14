import { motion } from "framer-motion";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <motion.div
      whileHover="hovered"
      className="p-5 flex flex-col justify-between h-full"
    >
      <div className="flex justify-between">
        <p>
          Connect <br /> With Me
        </p>
        <motion.div
          initial={{ x: -50, y: 50 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
          variants={{
            hovered: {
              x: -10,
              y: 10,
              transition: {
                duration: 0.2,
                delay: 0
              }
            }
          }}
          // exit={{ x: -50, y: 50 }}
          className=" "
        >
          <ArrowUpRight size={30} />
        </motion.div>
      </div>
      <p className="text-4xl">Contact Me</p>
    </motion.div>
  );
}

export default Contact;
