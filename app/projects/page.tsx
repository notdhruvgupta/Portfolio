"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";

function page() {
  return (
    <>
      <div className="flex font-nohemi items-center h-[70px] bg-light-main justify-center rounded-xl text-black px-10 mx-7 mt-6">
        <Navbar delayNum={0} />
      </div>
      <Projects />
    </>
  );
}

export default page;
