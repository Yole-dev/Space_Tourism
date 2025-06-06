// imported hooks
import { useState } from "react";

// imported custom hooks
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";
import { useScreenWidth } from "../hooks/useScreenWidth";

// imported background images
import mobileBackground from "../images/destination/background-destination-mobile.jpg";
import tabletBackground from "../images/destination/background-destination-tablet.jpg";
import desktopBackground from "../images/destination/background-destination-desktop.jpg";

// imported page content images
import moon from "../images/destination/image-moon.webp";
import mars from "../images/destination/image-mars.webp";
import europa from "../images/destination/image-europa.webp";
import titan from "../images/destination/image-titan.webp";

import lineMobile from "../images/destination/line.png";
import lineTablet from "../images/destination/line2.png";
import lineDesktop from "../images/destination/line3.png";

// Destinations data

const destinations = [
  {
    id: "moon",
    position: "1",
    name: "moon",
    image: moon,
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                  regain perspective and come back refreshed. While you’re there, take in some history 
                  by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: "384,400 km",
    travelTime: "3 days",
  },

  {
    id: "mars",
    position: "2",
    name: "mars",
    image: mars,
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                  the tallest planetary mountain in our solar system. It’s two and a half times 
                  the size of Everest!`,
    distance: "225 mil. km",
    travelTime: "9 months",
  },

  {
    id: "europa",
    position: "3",
    name: "europa",
    image: europa,
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                    ice skating, curling, hockey, or simple relaxation in your snug 
                    wintery cabin.`,
    distance: "628 mil. km",
    travelTime: "3 years",
  },

  {
    id: "titan",
    position: "4",
    name: "titan",
    image: titan,
    description: `The only moon known to have a dense atmosphere other than Earth, Titan 
                    is a home away from home (just a few hundred degrees colder!). As a 
                    bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 bil. km",
    travelTime: "7 years",
  },
];

export default function Destination() {
  const backgrounds = {
    mobile: mobileBackground,
    tablet: tabletBackground,
    desktop: desktopBackground,
  };

  const { backgroundStyle } = useResponsiveBackground(backgrounds);

  return (
    <section
      className="w-full min-h-svh bg-cover bg-center bg-no-repeat flex flex-col items-center text-white pt-[7rem] md:pt-[9.5rem]  xl:min-h-[888px] xl:pt-[12rem] "
      style={backgroundStyle}
    >
      <PageContent />
    </section>
  );
}

function PageContent() {
  const [activeTab, setActiveTab] = useState(destinations[0].id);

  const destination = destinations.find(
    (destination) => destination.id === activeTab
  );

  return (
    <section className="w-[327px] flex flex-col items-center gap-[2rem] mb-[1rem] md:w-[688px] md:mb-[0] xl:w-[1110px] xl:flex-row xl:justify-evenly xl:items-end ">
      <HeroSection destination={destination} />

      <DestinationDetails destination={destination}>
        <DestinationNav
          currentDestination={activeTab}
          setDestination={setActiveTab}
        />
      </DestinationDetails>
    </section>
  );
}

function HeroSection({ destination }) {
  return (
    <div className="w-full flex flex-col items-center gap-[3rem] md:gap-[3.5rem] xl:items-start xl:gap-[6rem] ">
      <p className="flex items-center gap-[1rem] font-barlow-condensed font-[300] text-[16px] uppercase tracking-[15%] md:self-start md:text-[20px] xl:text-[28px] ">
        <span className=" text-custom-fade">0 {destination.position} </span>{" "}
        pick your destination
      </p>

      <img
        src={destination.image}
        alt="planetry body image"
        className=" w-[150px] h-[150px] md:w-[300px] md:h-[300px] xl:w-[480px] xl:h-[480px]"
      />
    </div>
  );
}

function DestinationDetails({ children, destination }) {
  const { width } = useScreenWidth();

  return (
    <div className="w-full flex flex-col items-center gap-[2rem] md:w-[514px] xl:w-[539px] ">
      {children}

      <p className=" font-bellefair text-[56px] uppercase md:text-[80px] xl:w-[445px] xl:text-[96px] ">
        {destination.name}
      </p>

      <p className=" font-barlow font-[300] text-center text-custom-fade text-[15px] md:text-[16px] xl:w-[445px] xl:text-left xl:text-[18px] ">
        {destination.description}
      </p>

      <img
        src={width < 768 ? lineMobile : width < 1200 ? lineTablet : lineDesktop}
        alt=""
      />

      <div className="flex flex-col items-center gap-[1.5rem] uppercase md:flex-row md:gap-[7rem] xl:w-[445px] xl:items-start ">
        <p className="flex flex-col items-center gap-[0.7rem] xl:items-start ">
          <span className="font-barlow-condensed font-[400] text-[14px] text-custom-fade tracking-[2px] ">
            avg. distance
          </span>

          <span className=" font-bellefair font-[400] text-[28px] ">
            {destination.distance}
          </span>
        </p>

        <p className="flex flex-col items-center gap-[0.7rem] xl:items-start">
          <span className="font-barlow-condensed font-[400] text-[14px] text-custom-fade tracking-[2px]">
            est. travel time
          </span>

          <span className=" font-bellefair font-[400] text-[28px] ">
            {destination.travelTime}
          </span>
        </p>
      </div>
    </div>
  );
}

function DestinationNav({ currentDestination, setDestination }) {
  return (
    <ul className=" flex gap-[1.5rem] uppercase xl:self-start ">
      {destinations.map((destination) => (
        <li
          className=" flex flex-col items-center gap-[1rem] font-barlow-condensed font-[300] text-[14px] tracking-[2px] md:text-[16px]"
          key={destination.id}
          onClick={() => setDestination(destination.id)}
        >
          {destination.name}

          {currentDestination === destination.id && (
            <span className="w-full h-[4px] bg-white"></span>
          )}
        </li>
      ))}
    </ul>
  );
}
