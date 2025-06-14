import Image from "next/image";
import React from "react";

function MainPhoto() {
  return (
    <div className="absolute w-[500px] -top-12">
      <Image
        className="relative z-10"
        src="/avatar.png"
        alt="avatar"
        width={1000}
        height={500}
      />
      <div
        className=" absolute inset-0"
        style={{
          width: "auto",
          height: "auto",
          filter: "contrast(210%) brightness(100%)",
          background: `
          radial-gradient(circle at 50% -20%, rgba(160,143,233,1), rgba(45,47,234,0.48)),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 331 331' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export default MainPhoto;
