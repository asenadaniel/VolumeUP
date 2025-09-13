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
      let currentSection = "home"; // fallback

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const offset = 120; // 👈 adjust this for navbar height

        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
          currentSection = el.id;
        }
      });

      if (currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, active]);

  return active;
}
