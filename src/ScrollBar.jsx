import React, { useEffect, useState } from "react";

const ScrollBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    // Update scroll width on page scroll
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate scroll progress
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      setScrollWidth(scrollPercentage);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-2 bg-gray-200" // Fixed position and z-index to stay above content
    >
      {/* Custom Scroll Bar */}
      <div
        className="absolute top-0 left-0 h-2 transition-all duration-300 bg-blue-600"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollBar;
