"use client";
import { useLayoutEffect, useMemo, useState } from "react";

export function useResizeDimensions() {
  const [width, setWidth] = useState<number | null>(null);

  const isMobile = useMemo(() => width && width < 1064, [width]);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;
        setWidth(width);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return useMemo(() => ({ width, isMobile }), [width, isMobile]);
}
