import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RegionCard from './RegionCard';
import CountryCard from './CountryCard';
import asiaImage from '../assets/asia.jpg';
import globalImage from '../assets/global.webp';
import northAmericaImage from '../assets/north-america.jpg';
import southAmericaImage from '../assets/south-america.jpg';
import europaImage from '../assets/europa.webp';
import africaImage from '../assets/africa.jpg';
import localImage from '../assets/local-image.avif';
import regionalImage from '../assets/regional-image.avif';
import global from '../assets/global-image.jpg';

const imageMap = {
  southAmericaImage,
  northAmericaImage,
  africaImage,
  europaImage,
  asiaImage,
  globalImage,
};

export const CountrySelector = ({ isLong, data: providedData }) => {
  const { t, i18n } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('local');
  const tabRefs = useRef([]);
  const [underlinePosition, setUnderlinePosition] = useState('0px');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const getLeftPosition = () => {
    const index =
      selectedTab === 'local' ? 0 : selectedTab === 'regional' ? 1 : 2;
    const tab = tabRefs.current[index];
    if (tab) {
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;
      return `${tabLeft + (tabWidth - 60) / 2}px`;
    }
    return '0px';
  };

  useEffect(() => {
    const updatePosition = () => {
      setUnderlinePosition(getLeftPosition());
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(() => {
      updatePosition();
    });

    tabRefs.current.forEach((tab) => {
      if (tab) resizeObserver.observe(tab);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [selectedTab, i18n.language]);

  // Use provided data if available, otherwise fetch default from translations with images
  const countryData = providedData || {
    local: t('countrySelector.local.countries', { returnObjects: true }).map(
      (item) => ({
        ...item,
        image: localImage,
      })
    ),
    regional: t('countrySelector.regional.regions', {
      returnObjects: true,
    }).map((item) => ({
      ...item,
      flag: imageMap[item.flag],
      image: regionalImage,
    })),
    global: t('countrySelector.global.plans', { returnObjects: true }).map(
      (item) => ({
        ...item,
        flag: imageMap[item.flag],
        image: global,
      })
    ),
  };

  return (
    <section className="mx-auto px-4 py-8 font-inter" dir={i18n.dir()}>
      <div className="w-[300px] flex-wrap mx-auto py-1 px-1 flex items-center justify-between mb-8 bg-[#F6F8FA] text-black text-sm font-medium leading-5 rounded-lg relative">
        <button
          ref={(el) => (tabRefs.current[0] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'local'
              ? 'bg-white text-black shadow-2xl scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('local')}
        >
          {t('countrySelector.local.tab')}
        </button>
        <button
          ref={(el) => (tabRefs.current[1] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'regional'
              ? 'bg-white text-black shadow-2xl scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('regional')}
        >
          {t('countrySelector.regional.tab')}
        </button>
        <button
          ref={(el) => (tabRefs.current[2] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'global'
              ? 'bg-white text-black shadow-2xl scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('global')}
        >
          {t('countrySelector.global.tab')}
        </button>
        <span
          className="absolute bottom-0 h-1 bg-[#cb460e] transition-all duration-300"
          style={{
            width: '60px',
            left: underlinePosition,
          }}
        />
      </div>

      <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-10 place-items-center">
        {countryData[selectedTab]
          .slice(0, isLong ? countryData[selectedTab].length : 8)
          .map((country, index) =>
            selectedTab === 'local' ? (
              <CountryCard key={index} country={country} />
            ) : (
              <RegionCard key={index} country={country} />
            )
          )}
      </div>
    </section>
  );
};
