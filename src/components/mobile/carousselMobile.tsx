import React, { useState, useEffect } from 'react';
import { FaStar, FaGlobe, FaShareAlt } from 'react-icons/fa';
import stats from '../Json/stats.json';

interface StatItemProps {
  icon: React.ElementType;
  number: string;
  description: string;
}

const iconMap: Record<string, React.ElementType> = {
  FaStar,
  FaGlobe,
  FaShareAlt,
};

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, number, description }) => (
  <div className="w-full flex flex-col items-center text-center p-4">
    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#E5E5E5] mb-4">
      <Icon className="text-5xl text-[#1A1A1A]" />
    </div>
    <h1 className="text-4xl font-bold font-orbitron text-primary mb-2">{number}</h1>
    <h1 className="text-xl text-primary-content">{description}</h1>
  </div>
);

const CarouselMob: React.FC<{ className?: string }> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = stats.length - 1;

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
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {stats.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            if (!IconComponent) return null;
            return (
              <div
                key={stat.id}
                className="w-full flex-shrink-0"
                style={{ flexBasis: '100%' }}
              >
                <StatItem
                  icon={IconComponent}
                  number={stat.number}
                  description={stat.description}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {stats.map((_, index) => (
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

export default CarouselMob;
