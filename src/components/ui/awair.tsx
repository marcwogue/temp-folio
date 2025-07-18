import React, { useState, useEffect, useCallback } from 'react';
import { FaStar, FaGlobe, FaShareAlt } from 'react-icons/fa';
import stats from '../Json/stats.json'; 

interface StatItemProps {
  icon: React.ElementType;
  number: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, number, description }) => (
  <div className="flex-none w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/6)] p-4 flex flex-col items-center text-center">
    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#E5E5E5] mb-4">
      <Icon className="text-5xl text-[#1A1A1A]" />
    </div>
    <h1 className="text-4xl font-bold font-orbitron text-primary mb-2">{number}</h1>
    <h1 className="text-xl text-primary-content">{description}</h1>
  </div>
);

const iconMap: Record<string, React.ElementType> = {
  FaStar,
  FaGlobe,
  FaShareAlt,
};

const CarouselComponent: React.FC<{ className?: string }> = (props) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const updateItemsPerPage = useCallback(() => {
    const isMobile = window.innerWidth < 640;
    setItemsPerPage(isMobile ? 1 : 3);
  }, []);

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [updateItemsPerPage]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = stats.length - itemsPerPage;

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const translateXValue = -(currentIndex * (100 / stats.length));

  return (
    <div className={`bg-base-200 py-16 px-4 font-sans ${props.className || ''}`}>
      <div
        className="container mx-auto relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${translateXValue}%)`,
            width: `${(stats.length / itemsPerPage) * 100}%`,
          }}

          
          >
          {stats.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            if (!IconComponent) return null;
            return (
              <StatItem
                key={stat.id}
                icon={IconComponent}
                number={stat.number}
                description={stat.description}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: stats.length - itemsPerPage + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-2 rounded-sm transition-colors duration-300 ${
              index === currentIndex ? 'bg-secondary' : 'bg-secondary-content'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
