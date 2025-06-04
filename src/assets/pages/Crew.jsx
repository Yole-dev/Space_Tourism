// imported custom hooks
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";

// imported images
import mobileBackground from "../images/crew/background-crew-mobile.jpg";
import tabletBackground from "../images/crew/background-crew-tablet.jpg";
import desktopBackground from "../images/crew/background-crew-desktop.jpg";

export default function Crew() {
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
