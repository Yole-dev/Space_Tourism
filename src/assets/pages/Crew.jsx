import { useState } from "react";

// imported custom hooks
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";

// imported background images
import mobileBackground from "../images/crew/background-crew-mobile.jpg";
import tabletBackground from "../images/crew/background-crew-tablet.jpg";
import desktopBackground from "../images/crew/background-crew-desktop.jpg";

// imported content images
import douglas from "../images/crew/image-douglas-hurley.webp";
import mark from "../images/crew/image-mark-shuttleworth.webp";
import victor from "../images/crew/image-victor-glover.webp";
import anousheh from "../images/crew/image-anousheh-ansari.webp";

const crew = [
  {
    id: "douglas",
    name: "douglas hurley",
    role: "commander",
    bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
          and former NASA astronaut. He launched into space for the third time as 
          commander of Crew Dragon Demo-2.`,
    image: douglas,
  },

  {
    id: "mark",
    name: "mark shuttleworth",
    role: "commander",
    bio: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
          the Linux-based Ubuntu operating system. Shuttleworth became the first South 
          African to travel to space as a space tourist.`,
    image: mark,
  },

  {
    id: "victor",
    name: "victor glover",
    role: "pilot",
    bio: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
          International Space Station. Glover is a commander in the U.S. Navy where 
          he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
          station systems flight engineer.`,
    image: victor,
  },

  {
    id: "anousheh",
    name: "anousheh ansari",
    role: "flight engineer",
    bio: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
          Ansari was the fourth self-funded space tourist, the first self-funded woman to 
          fly to the ISS, and the first Iranian in space.`,
    image: anousheh,
  },
];

export default function Crew() {
  const backgrounds = {
    mobile: mobileBackground,
    tablet: tabletBackground,
    desktop: desktopBackground,
  };

  const { backgroundStyle } = useResponsiveBackground(backgrounds);

  return (
    <section
      className="w-full min-h-svh bg-cover bg-center bg-no-repeat flex flex-col items-center text-white pt-[8rem] md:pt-[9rem] xl:min-h-[1024px] "
      style={backgroundStyle}
    >
      <PageContent />
    </section>
  );
}

function PageContent() {
  const [activeTab, setActiveTab] = useState(crew[0].id);

  const crewMember = crew.find((member) => member.id === activeTab);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveTab((prevId) => {
  //       const currentIndex = crew.findIndex((member) => member.id === prevId);
  //       const nextIndex = (currentIndex + 1) % crew.length;
  //       return crew[nextIndex].id;
  //     });
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className=" w-[327px] flex flex-col items-center gap-[2.5rem] md:w-[688px] md:gap-[3rem] xl:w-[1110px] xl:flex-row xl:items-end xl:justify-between xl:h-[792px] ">
      <CrewMemberInfo
        member={crewMember}
        currentCrewMember={activeTab}
        setCrewMember={setActiveTab}
      />

      <img
        src={crewMember.image}
        alt={crewMember.name}
        className=" w-[271.27px] md:w-[446.74px] md:h-[560px] xl:w-[539px] xl:h-[676px] "
      />
    </section>
  );
}

function CrewMemberInfo({ member, currentCrewMember, setCrewMember }) {
  return (
    <div className=" w-full flex flex-col items-center gap-[4rem] md:w-[512px] xl:w-[539px] xl:h-full xl:items-start xl:justify-between ">
      <div className=" w-full flex flex-col items-center text-center gap-[2.5rem] xl:items-start xl:text-left ">
        <p className="flex items-center gap-[1rem] font-barlow-condensed font-[300] text-[16px] uppercase tracking-[15%] md:self-start md:text-[20px] xl:text-[28px] xl:tracking-[4px] ">
          <span className="text-custom-fade/30 font-[400] ">02</span>
          meet your crew
        </p>

        <p className=" w-full flex flex-col items-center gap-[0.2rem] font-bellefair uppercase xl:items-start xl:mt-[10rem] ">
          <span className=" text-custom-fade/30 text-[18px] md:text-[24px] xl:text-[32px] ">
            {member.role}
          </span>
          <span className=" text-[24px] md:text-[40px] xl:text-[56px] ">
            {member.name}
          </span>
        </p>

        <p className=" w-full font-barlow font-[400] text-[15px] text-center text-custom-fade/80 leading-[180%] md:text-[16px] xl:text-left xl:text-[18px] ">
          {member.bio}
        </p>
      </div>

      <ul className="flex items-center gap-[1.5rem]">
        {crew.map((member) => (
          <li
            className={`w-[12px] h-[12px]  round rounded-full cursor-pointer ${
              currentCrewMember === member.id ? "bg-white" : "bg-custom-fade/30"
            } md:w-[14px] md:h-[14px] xl:w-[20px] xl:h-[20px] `}
            key={member.id}
            onClick={() => setCrewMember(member.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
