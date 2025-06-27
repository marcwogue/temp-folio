import React, { useState, useEffect } from 'react';
import { FaStar, FaGlobe, FaShareAlt } from 'react-icons/fa';

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

const CarouselComponent: React.FC = () => {
  const stats = [
    { id: 1, icon: FaStar, number: "80+", description: "Étoiles sur GitHub" },
    { id: 2, icon: FaGlobe, number: "15+", description: "Pays visités" },
    { id: 3, icon: FaShareAlt, number: "25+", description: "Projets open-source" },
    { id: 4, icon: FaStar, number: "50+", description: "Contributeurs uniques" },
    { id: 5, icon: FaGlobe, number: "30+", description: "Villes explorées" },
    { id: 6, icon: FaShareAlt, number: "10+", description: "Conférences données" },
  ];

  const itemsPerPage = 3;
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
    <div className="bg-base-200 py-16 px-4 font-sans">
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
          {stats.map((stat) => (
            <StatItem
              key={stat.id}
              icon={stat.icon}
              number={stat.number}
              description={stat.description}
            />
          ))}
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
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
