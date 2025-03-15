import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import italyImage from '../assets/italy.jpg';
import trImage from '../assets/tr.jpg';
import ukImage from '../assets/uk.jpg';

// Country data with imported images and shadow colors
const slideshowData = [
  {
    key: 'turkey', // Translation key
    flag: 'https://flagcdn.com/w20/tr.png',
    priceKey: 'turkeyPrice', // Translation key for price
    image: trImage,
    shadowColor: '#c4e9cd', // Near green
  },
  {
    key: 'uk',
    flag: 'https://flagcdn.com/w20/gb.png',
    priceKey: 'ukPrice',
    image: ukImage,
    shadowColor: '#bbcfe3', // Blue
  },
  {
    key: 'italy',
    flag: 'https://flagcdn.com/w20/it.png',
    priceKey: 'italyPrice',
    image: italyImage,
    shadowColor: '#f5daba', // Orange
  },
];

export const PhoneSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation(); // Hook for translations

  // Cycle through images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowData.length);
    }, 2000); // 2s total cycle

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Calculate indices for left, center, and right cards
  const totalCards = slideshowData.length;
  const leftIndex = (currentIndex - 1 + totalCards) % totalCards; // Previous card
  const centerIndex = currentIndex; // Current card
  const rightIndex = (currentIndex + 1) % totalCards; // Next card

  const currentShadowColor = slideshowData[currentIndex].shadowColor;

  return (
    <section className="w-[95%] lg:w-[70%] mx-auto px-4 py-20 font-inter relative">
      {/* Phone Frame Container */}
      <div className="relative w-[240px] h-[480px] mx-auto">
        {/* Sleek Black Phone Frame with Circular Shadow */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black rounded-[32px] z-10 border-2 border-black"
          style={{
            boxShadow: `0 0 40px 20px ${currentShadowColor}`,
            transition: 'box-shadow 0.5s ease-in-out',
          }}
        ></div>

        {/* Slideshow Images (inside the phone screen) */}
        <div className="absolute top-[5%] left-[4%] w-[92%] h-[90%] overflow-hidden rounded-[24px] z-20">
          {slideshowData.map((country, index) => (
            <img
              key={index}
              src={country.image}
              alt={t(`slideshow.${country.key}.alt`)} // Translated alt text
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Fixed Position Cards with Animation */}
        {/* Left Card */}
        <div
          className="absolute w-[140px] bg-white shadow-md rounded-lg p-3 flex flex-col items-start text-left z-30 transition-all duration-500 ease-in-out"
          style={{
            top: '50%',
            left: '-160px',
            transform: 'translateY(-50%)',
            opacity: 0.75,
          }}
          key={`left-${leftIndex}`}
        >
          <img
            src={slideshowData[leftIndex].flag}
            alt={t(`slideshow.${slideshowData[leftIndex].key}.flagAlt`)}
            className="w-5 h-5 object-cover rounded-full mb-1"
          />
          <h3 className="text-sm font-medium text-black">
            {t(`slideshow.${slideshowData[leftIndex].key}.name`)}
          </h3>
          <p className="text-xs text-gray-500">
            {t('slideshow.from')}{' '}
            {t(`slideshow.${slideshowData[leftIndex].priceKey}`)}
          </p>
        </div>

        {/* Center Card */}
        <div
          className="absolute w-[140px] bg-white shadow-md rounded-lg p-3 flex flex-col items-start text-left z-30 transition-all duration-500 ease-in-out"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 1,
          }}
          key={`center-${centerIndex}`}
        >
          <img
            src={slideshowData[centerIndex].flag}
            alt={t(`slideshow.${slideshowData[centerIndex].key}.flagAlt`)}
            className="w-5 h-5 object-cover rounded-full mb-1"
          />
          <h3 className="text-sm font-medium text-black">
            {t(`slideshow.${slideshowData[centerIndex].key}.name`)}
          </h3>
          <p className="text-xs text-gray-500">
            {t('slideshow.from')}{' '}
            {t(`slideshow.${slideshowData[centerIndex].priceKey}`)}
          </p>
        </div>

        {/* Right Card */}
        <div
          className="absolute w-[140px] bg-white shadow-md rounded-lg p-3 flex flex-col items-start text-left z-30 transition-all duration-500 ease-in-out"
          style={{
            top: '50%',
            right: '-160px',
            transform: 'translateY(-50%)',
            opacity: 0.75,
          }}
          key={`right-${rightIndex}`}
        >
          <img
            src={slideshowData[rightIndex].flag}
            alt={t(`slideshow.${slideshowData[rightIndex].key}.flagAlt`)}
            className="w-5 h-5 object-cover rounded-full mb-1"
          />
          <h3 className="text-sm font-medium text-black">
            {t(`slideshow.${slideshowData[rightIndex].key}.name`)}
          </h3>
          <p className="text-xs text-gray-500">
            {t('slideshow.from')}{' '}
            {t(`slideshow.${slideshowData[rightIndex].priceKey}`)}
          </p>
        </div>
      </div>
    </section>
  );
};
