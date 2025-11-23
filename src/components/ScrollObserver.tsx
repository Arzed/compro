"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname(); // Detects when the page changes

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            // Handle the delay
            const delay = target.getAttribute("data-reveal-delay");
            if (delay) {
              target.style.transitionDelay = `${delay}ms`;
            }

            target.classList.add("in-view");

            // Optional: Stop observing once revealed so it doesn't flicker when scrolling up/down
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    // Select all elements with .reveal class
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Cleanup function
    return () => observer.disconnect();
  }, [pathname]); // <--- Reruns this script whenever the path changes

  return null; // This component renders nothing visually
}
