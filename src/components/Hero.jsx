import React, { useEffect } from "react";
import gradient from "../assets/gradient.svg";
import { Tiktok, Youtube, Twitter, Figma } from "./Icons";

const socials = [
  {
    name: "tiktok",
    url: "https://tiktok.com/@relime.io",
    icon: <Tiktok />,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UC36lpnNYIg_c81NOLGhoxLA?sub_confirmation=1",
    icon: <Youtube />,
  },
  {
    name: "twitter",
    url: "https://twitter.com/TheOfficialRDL",
    icon: <Twitter />,
  },
];

function Hero() {
  useEffect(() => {
    const image = document.querySelector(".gradient-image");
    if (image) {
      image.classList.add("animate-slide-in");
    }
  }, []);

  return (
    <div className="p-5">
      <div className="bg-transparent h-full flex-col justify-center items-center flex relative overflow-hidden shadow-[inset_0_0_16px_#000] rounded-3xl px-10 min-h-[90vh] lg:h-[96vh]">
        <img
          src={gradient}
          alt="gradient"
          style={{ transformStyle: "preserve-3d" }}
          className="z-[-1] w-[120vw] h-[175vh] max-w-[120vw] min-w-[137.5rem] justify-center absolute inset-x-auto inset-y-[0%] gradient-image animate-slide-in"
        />
        <div className="z-0 mix-blend-overlay bg-[url(/noise.webp)] bg-[0_0] bg-[length:250px] absolute inset-[0%]"></div>

        <div className="z-[-2] bg-[#222] absolute rounded-3xl inset-0"></div>
        <h1 className="text-3xl font-medium">Hello world</h1>
        <div className="z-3 justify-between items-center flex absolute mx-auto px-10 py-8 top-0 bottom-auto inset-x-0">
          <img src="/rdl-logo.svg" alt="relume design league logo" />
          <div className="flex gap-3 ">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                className="p-0 h-11 text-white bg-[#222] border transition-all duration-[0.2s] flex w-11 justify-center items-center rounded-xl border-solid border-[#494949] hover:border-[#fff]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="z-3 flex-row justify-center items-center text-lg font-medium flex absolute pl-2 pr-4 py-2 rounded-xl left-6 right-auto top-auto bottom-6">
          <Figma className=" h-8 mr-3" />
          <span className=" font-normal">Powered by Figma</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
