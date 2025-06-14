"use client";
import {
  DOMKeyframesDefinition,
  DynamicAnimationOptions,
  ElementOrSelector,
  motion,
  useAnimate,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import MainPhoto from "./Components/MainPhoto";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Description from "./Components/Description";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Links from "./Components/Links";

type AnimateParams = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  (DynamicAnimationOptions | undefined)?
];

type Animation = Animation[] | AnimateParams;

const useAnimationTimeline = (keyframes: Animation[], count: number = 1) => {
  const mounted = useRef(true);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // window.scrollTo(0,0);
    mounted.current = true;

    handleAnimation();

    return () => {
      mounted.current = false;
    };
  }, []);

  const processAnimation = async (animation: Animation) => {
    if (Array.isArray(animation[0])) {
      await Promise.all(
        animation.map(async (a) => {
          await processAnimation(a as Animation);
        })
      );
    } else {
      await animate(...(animation as AnimateParams));
    }
  };

  const handleAnimation = async () => {
    for (let i = 0; i < count; i++) {
      for (const animation of keyframes) {
        if (!mounted.current) return;

        await processAnimation(animation);
      }
    }
  };

  return scope;
};

function BentoGrid() {
  const scope = useAnimationTimeline(
    [
      [
        [
          ".photo",
          { x: 0, y: 0, scale: 1 },
          { duration: 1, ease: [0.85, 0, 0.15, 1] , delay: 0 },
        ],
        [
          ".nav",
          { x: 0, y: 0, scale: 1 },
          { duration: 1.75, ease: [0.85, 0, 0.15, 1], delay: 0.1 },
        ],
        [
          ".ol",
          { x: 0, y: 0, scale: 1 },
          { duration: 1.75, ease: [0.85, 0, 0.15, 1], delay: 0.2 },
        ],
        [
          ".proj",
          { x: 0, y: 0, scale: 1 },
          { duration: 1.75, ease: [0.85, 0, 0.15, 1], delay: 0.3 },
        ],
        [
          ".desc",
          { x: 0, y: 0, scale: 1 },
          { duration: 1.75, ease: [0.85, 0, 0.15, 1], delay: 0.4 },
        ],
        [
          ".con",
          { x: 0, y: 0, scale: 1 },
          { duration: 1.75, ease: [0.85, 0, 0.15, 1], delay: 0.5 },
        ],
        [
          ".link",
          { x: 0, y: 0, scale: 1 },
          { duration: 1.75, ease: [0.85, 0, 0.15, 1], delay: 0.6 },
        ],
      ],
    ],
    1
  );

  return (
    <div
      ref={scope}
      className="h-[110vh] relative grid grid-rows-8 grid-cols-12 gap-[20px] p-[20px]"
    >
      <div className=" absolute inset-0"></div>
      <motion.div
        initial={{ y: 200, scale: 0 }}
        className="nav row-start-1 col-span-12 bg-light-main rounded-xl text-black px-10 flex items-center"
      >
        <Navbar delayNum={1.4} />
      </motion.div>
      <motion.div
        initial={{ x: 500, scale: 0 }}
        className="ol z-20 row-start-2 row-end-6 col-span-5 bg-light-main rounded-xl text-black p-2"
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ x: -50, y: 50, scale: 1.5 }}
        className="photo z-50 relative overflow-hidden row-start-2 row-end-6 col-span-3 bg-white rounded-xl text-black p-2 flex items-center justify-center"
      >
        <MainPhoto />
      </motion.div>
      <motion.div
        initial={{ x: -500, scale: 0 }}
        className="proj row-start-2 row-end-8 col-span-4 bg-light-main rounded-xl text-black p-2"
      >
        <Projects />
      </motion.div>
      <motion.div
        initial={{ x: 500, y: -500, scale: 0 }}
        className="desc row-start-6 row-end-9 col-span-4 bg-light-main rounded-xl text-black p-2"
      >
        <Description />
      </motion.div>
      <motion.div
        initial={{ y: -500, scale: 0 }}
        className="con row-start-6 row-end-9 col-span-4 bg-dull-main rounded-xl text-black p-2"
      >
        <Contact />
      </motion.div>
      <motion.div
        initial={{ x: -500, y: -500, scale: 0 }}
        className="link row-start-8 row-end-9 col-span-4 bg-light-main rounded-xl text-black p-2"
      >
        <Links />
      </motion.div>
    </div>
  );
}

export default BentoGrid;
