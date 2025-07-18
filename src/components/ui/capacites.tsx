import { icons } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { capacite } from "../Json/content.json";

interface SlideData {
  icon: string;
  title: string;
  description: string;
}

const slides: SlideData[] = capacite[0].carousel;

const Capacites = () => {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (totalItems - itemsPerPage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, totalItems, itemsPerPage]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const translateXValue = `-${(currentIndex / totalItems) * 100}%`;

  return (
    <div className="w-full py-6 font-sans">
      <div
        className="relative  mx-auto overflow-hidden"
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
          {slides.map((elm, index) => {
            const Icon = icons[elm.icon as keyof typeof icons];
            if (!Icon) return null;

            return (
              <div
                key={index}
                className="w-1/2 items-center text-center rounded-lg shadow-2xl p-4 bg-base-100"
                style={{
                  width: `calc(${100 / itemsPerPage}% - ${itemsPerPage > 1 ? "0.75rem" : "0px"})`,
                }}
              >
                <Icon className="w-10 h-10 mx-auto text-primary mb-2" />
                <h3 className="text-lg font-semibold">{elm.title}</h3>
                <p className="text-sm">{elm.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalItems - itemsPerPage + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-2 rounded-sm transition-colors duration-300 ${
              index === currentIndex ? "bg-primary" : "bg-neutral-500"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Capacites;
