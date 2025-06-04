import { useState, useEffect } from "react";

export function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(
    function () {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    },
    [width]
  );

  return { width };
}
