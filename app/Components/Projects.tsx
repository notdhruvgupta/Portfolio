import { AnimatePresence, delay, motion } from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <motion.div className="px-5 h-full overflow-hidden flex flex-col justify-between">
      {["MetroGate", "Gaming Marketplace", "SkillSynth", "Course Builder"].map(
        (item, index) => (
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3 + 0.1 * index, ease: [0.85, 0, 0.15, 1] }}
            className=""
          >
            <ProjectDivs
              title={item}
              index={index}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
            />
            <hr className=" border-[0.8px] rounded-full opacity-50 border-side-color" />
          </motion.div>
        )
      )}
      <motion.a
        href="/projects"
        whileHover="hovered"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.75 }}
        className="inline-flex gap-2 underline cursor-pointer"
      >
        Explore More Projects
        <motion.div variants={{ hovered: { x: 10 } }}>
          <MoveRight />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}

interface ProjDivProps {
  title: string;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
}

function ProjectDivs({ title, index, isHovered, onMouseEnter }: ProjDivProps) {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      className="py-2 text-2xl flex flex-col gap-1"
    >
      <div className="flex justify-between items-center">
        <p className="font-[600]">{title}</p>
        <motion.div animate={{ x: isHovered ? 10 : 0, y: isHovered ? -10 : 0 }}>
          <ArrowUpRight size={30} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.85, 0, 0.15, 1],
            }}
            className="overflow-hidden"
          >
            <Image src="/demo.png" alt="demo" width={500} height={500} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Projects;
