"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // you can also use any icon from lucide-react

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-[#bc383b]/80 text-white shadow-lg hover:bg-[#72120e] transition-all z-20"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
