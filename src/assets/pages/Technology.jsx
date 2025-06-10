import { useState } from "react";

// imported custom hooks
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";
import { useScreenWidth } from "../hooks/useScreenWidth";

// imported background images
import mobileBackground from "../images/technology/background-technology-mobile.jpg";
import tabletBackground from "../images/technology/background-technology-tablet.jpg";
import desktopBackground from "../images/technology/background-technology-desktop.jpg";

//pre importing all tags using the import.meta.glob() method in vite
const images = import.meta.glob("../images/technology/*.jpg", { eager: true });

const techData = [
  {
    id: "launch",
    imageBase: "image-launch-vehicle",
    title: "launch vehicle",
    details: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
              payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
              WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
              it's quite an awe-inspiring sight on the launch pad!`,
  },
  {
    id: "spaceport",
    imageBase: "image-spaceport",
    title: "spaceport",
    details: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
              by analogy to the seaport for ships or airport for aircraft. Based in the 
              famous Cape Canaveral, our spaceport is ideally situated to take advantage 
              of the Earth’s rotation for launch.`,
  },
  {
    id: "capsule",
    imageBase: "image-space-capsule",
    title: "space capsule",
    details: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
              capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
              you'll spend your time during the flight. It includes a space gym, cinema, 
              and plenty of other activities to keep you entertained.`,
  },
];

export default function Technology() {
  const { width } = useScreenWidth();
  const scope = width < 768 || width > 1200 ? "portrait" : "landscape";

  const backgrounds = {
    mobile: mobileBackground,
    tablet: tabletBackground,
    desktop: desktopBackground,
  };

  const { backgroundStyle } = useResponsiveBackground(backgrounds);

  return (
    <section
      className="w-full min-h-svh bg-cover bg-center bg-no-repeat flex flex-col items-center text-white pt-[8rem] md:pt-[9rem] xl:min-h-[1024px]"
      style={backgroundStyle}
    >
      <PageContent imgScope={scope} />
    </section>
  );
}

function PageContent({ imgScope }) {
  const [activeTab, setActiveTab] = useState(techData[0].id);
  const currentTech = techData.find((item) => item.id === activeTab);

  //getting dynamic image
  const imagePath = `../images/technology/${currentTech.imageBase}-${imgScope}.jpg`;
  const image = images[imagePath]?.default ?? "";
  const capsuleImg =
    "/src/assets/images/technology/image-space-capsule-portrait.jpg";

  return (
    <section className=" w-full flex flex-col gap-[5rem] xl:w-[1275px] xl:self-end ">
      <p className="self-center flex items-center font-barlow-condensed font-[300] text-white text-[16px] tracking-[15%] uppercase gap-[1rem] md:self-start md:ps-[2rem] md:text-[20px] xl:text-[28px] ">
        <span className=" font-[400] text-custom-fade">03</span>
        <span>space launch 101</span>
      </p>

      <div className=" w-full flex flex-col items-center gap-[2rem] xl:flex-row-reverse ">
        <div className=" w-full h-[258px] overflow-hidden md:h-[357px] xl:w-[608px] xl:h-[734px] xl:flex xl:justify-end xl:items-center ">
          <img
            src={image}
            alt={currentTech.title}
            className={`w-full h-full object-cover ${
              image === capsuleImg ? "object-center" : "object-bottom"
            } md:object-center xl:h-[600px] xl:w-[608px] `}
          />
        </div>

        <TechnologyDetails tech={currentTech}>
          <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
        </TechnologyDetails>
      </div>
    </section>
  );
}

function TechnologyDetails({ children, tech }) {
  return (
    <section className=" w-full flex flex-col items-center gap-[3rem] xl:w-[635px] xl:h-[304px] xl:flex-row xl:items-start xl:gap-[2rem] ">
      {children}

      <div className=" w-[327px] flex flex-col items-center gap-[0.5rem] text-center md:w-[512px] xl:w-full xl:items-start xl:text-left ">
        <p className="font-bellefair font-[300] text-[18px] text-custom-fade uppercase md:text-[24px] xl:text-[32px] ">
          the terminology...
        </p>

        <p className=" font-bellefair text-[24px] uppercase md:text-[40px] xl:text-[56px] ">
          {tech.title}
        </p>

        <p className=" font-barlow font-[400] text-[15px] text-custom-fade leading-[180%] md:text-[16px] xl:font-[300] xl:text-[18px] xl:text-left ">
          {tech.details}
        </p>
      </div>
    </section>
  );
}

function Nav({ activeTab, setActiveTab }) {
  return (
    <ul className=" w-full flex justify-center items-center gap-[1.5rem] xl:flex-col xl:w-[80px] ">
      {techData.map((tech, i) => (
        <li
          className={` w-[40px] h-[40px] flex items-center justify-center font-bellefair text-[18px] ${
            activeTab === tech.id && "text-black"
          } border-2 border-custom-fade rounded-full bg-transparent ${
            activeTab === tech.id && "bg-white"
          } cursor-pointer md:w-[56px] md:h-[56px] md:text-[24px] xl:w-[80px] xl:h-[80px] xl:text-[32px] xl:border-[1px] `}
          key={tech.id}
          onClick={() => setActiveTab(tech.id)}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
}
