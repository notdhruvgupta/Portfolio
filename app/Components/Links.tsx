import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Github",
    icon: faGithub,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    link: "",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "",
  },
];

function Links() {
  return (
    <div className="px-8 h-full flex items-center overflow-hidden justify-between">
      {links.map((item, index) => (
        <motion.div key={index} initial={{y: -100}} animate={{y: 0}} transition={{ delay: 1.8 + 0.2 * index}}>
          <Link href={item.link} className="flex gap-2 items-center">
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <p className=" leading-0">{item.name}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default Links;
