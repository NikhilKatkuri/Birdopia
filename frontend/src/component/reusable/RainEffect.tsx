"use client";  

import { useEffect, useState } from "react";

// Define the type for a raindrop
interface Raindrop {
  left: number;
  duration: number;
  delay: number;
}

export default function RainEffect() {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]); // Define type for useState

  useEffect(() => {
    const drops: Raindrop[] = [...Array(50)].map(() => ({
      left: Math.random() * 100, // Random horizontal position
      duration: 1.5 + Math.random(), // Varying speed
      delay: Math.random() * 2, // Random delay
    }));

    setRaindrops(drops);
  }, []);

  return (
    <div className="fixed w-screen h-screen  ">
      {raindrops.map((drop, index) => (
        <div
          key={index}
          className="absolute top-0 h-16 w-[2px] bg-gradient-to-t from-blue-400 to-transparent opacity-70"
          style={{
            left: `${drop.left}vw`,
            animation: `fall linear ${drop.duration}s infinite`,
            animationDelay: `-${drop.delay}s`,
          }}
        ></div>
      ))}

      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-10vh);
              opacity: 0.8;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
