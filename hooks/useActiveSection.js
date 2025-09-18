"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(sections) {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    // Check hash on page load
    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (sections.includes(hash)) {
        setActive(hash);
      }
    }

    const handleScroll = () => {
      let closestSection = sections[0];
      let minDistance = Infinity;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top); // distance from top of viewport

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }

      setActive(closestSection);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (sections.includes(hash)) {
        setActive(hash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    // Run once
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [sections]);

  return active;
}
