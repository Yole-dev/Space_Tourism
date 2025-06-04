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
      className="w-full min-h-svh bg-cover bg-center bg-no-repeat text-white "
      style={backgroundStyle}
    >
      <PageHeader />
    </section>
  );
}

function PageHeader() {
  return <p></p>;
}
