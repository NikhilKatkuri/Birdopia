"use client"; 

import { useEffect, useState } from "react";

// Define type for star (asteroid)
interface Star {
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function StarEffect() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = [...Array(80)].map(() => ({
      left: Math.random() * 100, // Random horizontal position
      size: Math.random() * 4 + 2, // Random size (2px to 6px)
      duration: 2 + Math.random() * 3, // Random fall speed (2s to 5s)
      delay: Math.random() * 2, // Random animation delay
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed w-screen h-screen overflow-hidden ">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute top-0 bg-white rounded-full shadow-lg"
          style={{
            left: `${star.left}vw`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `fall-diagonal ${star.duration}s linear infinite`,
            animationDelay: `-${star.delay}s`,
          }}
        ></div>
      ))}

      <style>
        {`
          @keyframes fall-diagonal {
            0% {
              transform: translateY(-10vh) translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) translateX(20vw);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
