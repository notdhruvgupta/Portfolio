import { motion, stagger } from "framer-motion";
import Image from "next/image";
import React from "react";

function Navbar({delayNum} : {delayNum: number}) {
  return (
    <div className="flex relative items-center justify-between w-full overflow-hidden">
      <div className="flex items-center gap-2">
        <motion.div className="p-2" whileHover={{ rotate: 360}}>
          <Image
            className=" opacity-80 pb-1"
            src="/logo.svg"
            alt="logo"
            width={30}
            height={50}
          />
        </motion.div>
        <p className="text-3xl font-[400]">
          Dhruv <span className="font-[600]">Gupta</span>
        </p>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: delayNum,
            },
          },
        }}
        className="flex gap-16 font-[300]"
      >
        {["Projects", "About", "Contact"].map((item, index) => (
          <motion.div
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ ease: [0, 0.55, 0.45, 1] }}
            key={index}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Navbar;
