"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState("home"); // default to home

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const handleScroll = () => {
      let maxVisible = 0;
      let currentSection = active;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // skip sections that are fully above or below viewport
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const visibleHeight =
          Math.min(window.innerHeight, rect.bottom) -
          Math.max(0, rect.top);

        if (visibleHeight > maxVisible) {
          maxVisible = visibleHeight;
          currentSection = el.id;
        }
      });

      if (currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, active]);

  return active;
}
