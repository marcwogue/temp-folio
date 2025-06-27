import React, { useEffect, useState, useCallback } from "react";
import certifs from "../Json/certificats.json";
import Certif from "./certf";

interface CertifItemData {
  id: number;
  img: string;
  titl: string;
  description: string;
  date: string;
  link: string;
}

const Certificat: React.FC = () => {
  // Si ton JSON n'a pas d'id, on les injecte :
  const slides: CertifItemData[] = certifs.map((item, index) => ({
    id: index,
    ...item,
  }));

  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [paused, setPaused] = useState(false);

  const updateItemsPerPage = useCallback(() => {
    const isMobile = window.innerWidth < 640;
    setItemsPerPage(isMobile ? 1 : 2);
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  const totalItems = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (totalItems - itemsPerPage + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, totalItems, itemsPerPage]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const translateXValue = `-${(currentIndex / totalItems) * 100}%`;

  return (
    <div className="w-full py-6 font-sans">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        `}
      </style>

      <div
        className=" mx-auto overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${translateXValue})`,
            width: `${(totalItems / itemsPerPage) * 100}%`,
          }}
        >
          {slides.map((elm) => (
                    <div
                      key={elm.id}
                      className="w-1/2 flex flex-col items-center text-center rounded-lg shadow-2xl p-4 bg-base-100"
                      style={{
                        width: `calc(${100 / itemsPerPage}% - ${itemsPerPage > 1 ? '0.75rem' : '0px'})`,
                      }}
                    >
                      <img
                        src={elm.img}
                        alt={elm.titl}
                        className="rounded-full w-[25%] border-2 border-base-300"
                      />
                      <h3 className="text-2xl text-secondary font-semibold mt-2">{elm.titl}</h3>
                      <p className="text-sm mt-1">{elm.description}</p>
                      <div className="flex justify-between items-center w-full mt-4 p-4 bg-base-300 rounded-md">
                        <div className="badge">{elm.date}</div>
                        <Certif link={elm.link} />
                      </div>
                    </div>  
            ))}

        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalItems - itemsPerPage + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-2 rounded-sm transition-colors duration-300 ${
              index === currentIndex ? "bg-[#73FF00]" : "bg-neutral-700"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Certificat;
