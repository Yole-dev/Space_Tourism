import { useState, useEffect } from "react";

export function useScreenHeight() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(
    function () {
      function handleResize() {
        setHeight(window.innerHeight);
      }

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    },
    [height]
  );

  return { height };
}
