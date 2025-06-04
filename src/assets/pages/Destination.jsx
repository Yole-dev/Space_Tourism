// imported custom hooks
import { useResponsiveBackground } from "../hooks/useResponsiveBackground";

// imported images
import mobileBackground from "../images/destination/background-destination-mobile.jpg";
import tabletBackground from "../images/destination/background-destination-tablet.jpg";
import desktopBackground from "../images/destination/background-destination-desktop.jpg";

export default function Destination() {
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
