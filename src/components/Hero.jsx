import React, { useState, useEffect } from "react";
import gradient from "../assets/gradient.svg";
import { Tiktok, Youtube, Twitter, Figma, Mail } from "./Icons";
import org1 from "../assets/orange1.png";
import org2 from "../assets/orange2.png";
import org3 from "../assets/orange3.png";
import blue1 from "../assets/blue1.png";
import blue2 from "../assets/blue2.png";
import blue3 from "../assets/blue3.png";
import mel from "../assets/mel.svg";
import eric from "../assets/eric.svg";
import kaleb from "../assets/kaleb.svg";
import josh from "../assets/josh.svg";

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

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const newX = (mouseX / screenWidth - 0.5) * 12; 
      const newY = (mouseY / screenHeight - 0.5) * -12; 

      setX(newX);
      setY(newY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="p-5">
      <div className="bg-transparent h-full flex-col justify-center items-center flex relative overflow-hidden shadow-[inset_0_0_16px_#000] rounded-3xl px-10 max-sm:px-6 max-sm:justify-start min-h-[90vh] lg:h-[96vh]">
        <div className="flex mx-auto justify-start items-center flex-col w-full z-10 relative max-w-[50rem] text-center max-sm:pt-32">
          <h1 className="heading uppercase my-0 font-bold leading-[1.2] text-7xl max-md:text-[2.5rem] max-sm:text-[2.3rem]  tracking-[-.01em]">
            where web design meets{" "}
            <span className=" text-[#c5c2be]">esports</span>
          </h1>
          <p className="max-w-[38.5rem] text-xl max-ms:text-[1.125rem] max-sm:text-base text-white/80 font-normal mx-auto leading-[30px] pt-6 pb-8">
            We bring together the best web designers from across the globe to
            compete head-to-head in a live Figma Arena. We call it the Relume
            Rumble, and this is the Relume Design League.
          </p>

          <form className=" w-full max-w-[30rem] mb-4">
            <div className="mb-4 flex justify-center items-center gap-2 text-white/80">
              <Mail className="h-5 w-5 stroke-white/80" />
              <span>Subscribe for match updates</span>
            </div>
            <div className="flex gap-4 justify-center items-center max-md:flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className=" cursor-custom bg-[#222] h-auto min-h-[2.75rem] border border-white/20 rounded-xl mb-0 py-3 px-[1.1rem] leading-[1.6] transition-all duration-[0.2s] w-full focus:shadow-[0_0_0_4px_rgba(255,255,255,0.05)] focus:border-white outline-none "
              />
              <input type="submit" value="Subscribe" className="button" />
            </div>
          </form>
        </div>

        <img
          src={gradient}
          alt="gradient"
          style={{ transformStyle: "preserve-3d" }}
          className="z-[-1] w-[120vw] h-[175vh] max-w-[120vw] min-w-[137.5rem] justify-center absolute inset-x-auto inset-y-[0%] gradient-image animate-slide-in max-sm:h-[100rem] max-md:h-[84rem] max-md:min-w-[74rem] max-lg:h-[165vh] max-lg:min-w-[100rem]"
        />
        <div className="z-0 mix-blend-overlay bg-[url(/noise.webp)] bg-[0_0] bg-[length:250px] absolute inset-[0%]"></div>

        <div className="z-[-2] bg-[#222] absolute rounded-3xl inset-0"></div>
        <div className="z-10 justify-between items-center flex absolute mx-auto px-10 py-8 top-0 bottom-auto inset-x-0">
          <img src="/rdl-logo.svg" alt="relume design league logo" />
          <div className="flex gap-3 ">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                className=" cursor-none p-0 h-11 text-white bg-[#222] border transition-all duration-[0.2s] flex w-11 justify-center items-center rounded-xl border-solid border-[#494949] hover:border-[#fff]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className=" z-0 w-full h-full max-w-screen-xl justify-center items-center flex absolute pb-8">
          <div className="h-[50vh] min-h-[25rem] flex-col justify-between items-start flex absolute mr-auto rounded-[100px] left-0 right-auto inset-y-auto">
            <img
              src={org1}
              alt=""
              className="animate-[up-down_9s_ease-in-out_3s_infinite] w-24 h-24 ml-32 rounded-2xl"
              loading="lazy"
              style={{ transformStyle: "preserve-3d" }}
            />
            <img
              src={org2}
              alt=""
              className="animate-[up-down_9s_ease-in-out_0s_infinite] w-24 h-24 rounded-2xl"
              loading="lazy"
              style={{ transformStyle: "preserve-3d" }}
            />
            <img
              src={org3}
              alt=""
              className="animate-[up-down_9s_ease-in-out_6s_infinite] w-24 h-24 ml-40 rounded-2xl"
              loading="lazy"
              style={{ transformStyle: "preserve-3d" }}
            />
            <img
              src={mel}
              alt="mel cursor"
              className="absolute top-[30%] left-[50%] h-9 ease-in-out"
              style={{
                transform: `translate3d(${x}rem, ${-y}rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            />
            <img
              src={eric}
              alt="eric cursor"
              className="absolute bottom-[30%] right-[-10%] h-9 ease-in-out"
              style={{
                transform: `translate3d(${x}rem, ${y}rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            />
          </div>
          <div className="h-[50vh] min-h-[25rem] flex-col justify-between items-end flex absolute left-auto right-0 inset-y-auto">
            <img
              src={blue1}
              alt=""
              className="animate-[up-down_9s_ease-in-out_0s_infinite] w-24 h-24 mr-32 rounded-2xl"
              loading="lazy"
              style={{ transformStyle: "preserve-3d" }}
            />
            <img
              src={blue2}
              alt=""
              className="animate-[up-down_9s_ease-in-out_5s_infinite] w-24 h-24 rounded-2xl"
              loading="lazy"
              style={{ transformStyle: "preserve-3d" }}
            />
            <img
              src={blue3}
              alt=""
              className="animate-[up-down_9s_ease-in-out_3s_infinite] w-24 h-24 mr-40 rounded-2xl"
              loading="lazy"
              style={{ transformStyle: "preserve-3d" }}
            />
            <img
              src={kaleb}
              alt="kaleb cursor"
              className="absolute top-[30%] right-[60%] h-9 ease-in-out"
              style={{
                transform: `translate3d(${x}rem, ${y}rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            />
            <img
              src={josh}
              alt="josh cursor"
              className="absolute bottom-[15%] right-[10%] h-9 ease-in-out"
              style={{
                transform: `translate3d(${x}rem, ${-y}rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            />
          </div>
        </div>

        <div className="z-10 flex-row justify-center items-center text-lg font-medium flex absolute pl-2 pr-4 py-2 rounded-xl left-6 max-md:left-auto right-auto top-auto bottom-6">
          <Figma className=" h-8 mr-3" />
          <span className=" font-normal">Powered by Figma</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
