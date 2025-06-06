// imported custom hooks
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";

// imported images
import mobileBackground from "../images/home/background-home-mobile.jpg";
import tabletBackground from "../images/home/background-home-tablet.jpg";
import desktopBackground from "../images/home/background-home-desktop.jpg";

export default function Home() {
  const backgrounds = {
    mobile: mobileBackground,
    tablet: tabletBackground,
    desktop: desktopBackground,
  };

  const { backgroundStyle } = useResponsiveBackground(backgrounds);

  return (
    <section
      className="w-full min-h-svh bg-cover bg-no-repeat text-white pt-[8rem] md:pt-[11rem] xl:pt-[15rem] xl:min-h-[888px] "
      style={backgroundStyle}
    >
      <PageContent />
    </section>
  );
}

function PageContent() {
  return (
    <section className="w-full flex flex-col items-center gap-[4.5rem] md:gap-[3.5rem] xl:flex-row xl:justify-evenly xl:gap-[0] ">
      <div className="uppercase w-[80%] flex flex-col gap-[1rem] items-center text-center xl:items-start xl:text-justify xl:w-[auto] xl:gap-[0.7rem] ">
        <p className=" font-barlow-condensed font-[200] text-[16px] tracking-[15%] md:text-[28px] md:tracking-[4px] ">
          so, you want to travel to
        </p>

        <p className=" font-bellefair text-[80px] md:text-[144px]"> space </p>

        <p className="w-[327px] font-barlow font-[400] normal-case text-[15px] text-custom-fade leading-[180%] md:w-[512px] md:text-[16px] xl:w-[540px] xl:text-[18px] ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className=" w-[144px] h-[144px] flex justify-center items-center bg-white round rounded-full md:w-[272px] md:h-[272px]">
        <p className="font-bellefair text-[18px] uppercase text-custom-black md:text-[32px]  ">
          explore
        </p>
      </div>
    </section>
  );
}
