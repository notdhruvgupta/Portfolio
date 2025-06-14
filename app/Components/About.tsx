"use client";
import { delay, easeIn, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const divVariant = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      staggerChildren: 1,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: 500 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 1.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

function About() {
  return (
    <motion.div
      variants={divVariant}
      initial="hidden"
      animate="visible"
      className=" h-full relative px-8 py-5 overflow-hidden flex flex-col justify-end"
    >
      <div className="flex absolute top-0 right-0 justify-end p-2">
        <motion.div
          className=" opacity-30"
          animate={{ rotate: 180 }}
          transition={{ duration: 5, ease: "linear",
            //  repeat: Infinity 
            }}
        >
          <Image
            className=""
            src="flow.svg"
            alt="flow"
            width={120}
            height={500}
          />
        </motion.div>
      </div>
      <motion.div variants={itemVariant} className="text-3xl font-[300] pb-3">
        Developer & Designer✨
        <br />
      </motion.div>
      <motion.div
        variants={itemVariant}
        className=" text-[3.2em] mr-5 leading-[1em]"
      >
        Transforming <span className=" font-[400]">visionary</span>{" "}
        <span className=" relative inline-flex justify-center items-center">
          <div className=" absolute -top-[15px] w-[160px] opacity-20 rotate-3">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 796.17 496.91"
            >
              <defs>
                <style>
                  {`
                    .cls-1 {
                        fill: none;
                        stroke: #000;
                        stroke-linecap: round;
                        stroke-width: 30px;
                    }
                `}
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                  <motion.path
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    className="cls-1"
                    d="M382.57,15.5s-140.93,13.56-239,58C31.26,123.26,25.13,165.27,18,186.26c-4.11,12.07-13.79,80.17,76.59,119.35,105.86,45.9,254.3,55,324.77,53.5,131.74-4.52,240-27.88,300.26-78.36,52-43.61,64.68-78.87,60.25-110.77-4.68-33.74-41.53-60.29-82.72-78.37C658.81,74.78,582.74,61.47,498,58.45c-121.46-4.32-193,6-281.87,34.66"
                  />
                </g>
              </g>
            </motion.svg>
          </div>
          ideas
        </span>{" "}
        by bridging <b>concept</b> and <b>&lt;code&gt;</b>.
      </motion.div>
    </motion.div>
  );
}

export default About;
