import { useScreenWidth } from "./useScreenWidth";

export function useResponsiveBackground(backgrounds) {
  const { width } = useScreenWidth();

  const backgroundStyle = {
    backgroundImage:
      width < 768
        ? `url(${backgrounds.mobile})`
        : width < 1200
        ? `url(${backgrounds.tablet})`
        : `url(${backgrounds.desktop})`,
  };
  return { backgroundStyle };
}
