import React, { useEffect } from "react";
import gradient from "../assets/gradient.svg";

function Hero() {
  useEffect(() => {
    const image = document.querySelector(".gradient-image");
    if (image) {
      image.classList.add("animate-slide-in");
    }
  }, []);

  return (
    <div className="p-6">
      <div className="h-full flex-col justify-center items-center flex relative overflow-hidden shadow-[inset_0_0_16px_#000] px-10 rounded-3xl min-h-[90vh] lg:h-[96vh] bg-[#222]">
        <img
          src={gradient}
          alt="gradient"
          style={{ transformStyle: "preserve-3d" }}
          className="z-0 w-[120vw] h-[175vh] max-w-[120vw] min-w-[137.5rem] justify-center absolute inset-x-auto inset-y-[0%] gradient-image animate-slide-in"
        />
        <div className="z-1 mix-blend-overlay bg-[url(/noise.webp)] bg-[0_0]  absolute inset-[0%]"></div>
        <h1 className="text-3xl font-bold">Hello world</h1>
      </div>
    </div>
  );
}

export default Hero;
