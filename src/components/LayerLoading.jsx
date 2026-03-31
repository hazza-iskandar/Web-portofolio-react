import { useEffect, useState } from "react";
import Colorblur from "../components/Colorblur";

const LayerLoading = ({onFinish}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = null;
    const duration = 1500;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const easeOut = 1 - Math.pow(1 - elapsed / duration, 3);
      const value = Math.min(100, easeOut * 100);

      setProgress(Math.floor(value));

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          onFinish(); // 🔥 trigger selesai
        }, 300); // delay dikit biar halus
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div id="loading" className="fixed inset-0 bg-primary-dark z-9999999">
      <div className="container relative">
        <div className="absolute bottom-[30%] w-1/2">
          <h1 className="text-3xl md:text-7xl font-bold text-white/90">
            {" "}
            I'm An Fullstack Developer
          </h1>
          <p className="text-gray-300/60 mt-4 text-xs md:text-lg">
            I’m a Full-Stack Developer with expertise in front-end and back-end
            development, focused on building scalable, responsive web
            applications that are visually engaging and user-friendly.
          </p>
        </div>

        <div className="absolute bottom-10 flex justify-between items-end left-0 right-0 px-5 md:px-20">
          <p className="text-lg font-bold text-slate-100/60">Loading...</p>
          <h1 className="text-3xl md:text-8xl font-bold">{progress}%</h1>
        </div>

        <Colorblur className="opacity-70 left-0 bottom-[30%] w-full md:w-100 md:bottom-0"></Colorblur>
        <Colorblur className="opacity-70 right-0 bottom-[30%] w-full md:w-100 md:bottom-0"></Colorblur>
        <Colorblur className="opacity-60 left-[30%] top-[50%] w-100 h-80 hidden md:block md:-translate-[50%] rotate-180 rounded-full"></Colorblur>
      </div>
    </div>
  );
};

export default LayerLoading;
