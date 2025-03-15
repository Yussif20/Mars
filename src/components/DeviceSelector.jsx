import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const DeviceSelector = () => {
  const { t, i18n } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('apple');
  const tabRefs = useRef([]);
  const [underlinePosition, setUnderlinePosition] = useState('0px');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const getLeftPosition = () => {
    const index =
      selectedTab === 'apple'
        ? 0
        : selectedTab === 'samsung'
        ? 1
        : selectedTab === 'googlePixel'
        ? 2
        : 3;
    const tab = tabRefs.current[index];
    if (tab) {
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;
      return `${tabLeft + (tabWidth - 60) / 2}px`;
    }
    return '0px';
  };

  // Update underline position when selectedTab or language changes
  useEffect(() => {
    const updatePosition = () => {
      setUnderlinePosition(getLeftPosition());
    };

    // Initial update
    updatePosition();

    // Add resize observer to handle DOM changes after language switch
    const resizeObserver = new ResizeObserver(() => {
      updatePosition();
    });

    tabRefs.current.forEach((tab) => {
      if (tab) resizeObserver.observe(tab);
    });

    // Cleanup observer on unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [selectedTab, i18n.language]); // Add i18n.language as dependency

  // Fetch the device list dynamically from translations
  const deviceList = t(`devices.${selectedTab}.list`, { returnObjects: true });

  return (
    <section className="mx-auto px-4 py-8 font-inter" dir={i18n.dir()}>
      {/* Tab Buttons */}
      <div className="max-w-[400px] w-full mx-auto py-1 px-2 sm:px-4 flex items-center justify-around mb-8 bg-[#F6F8FA] text-black text-xs sm:text-sm font-medium leading-5 rounded-lg relative">
        {['apple', 'samsung', 'googlePixel', 'other'].map((tab, index) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-2 sm:px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
              selectedTab === tab
                ? 'bg-white text-black shadow-2xl scale-105'
                : 'bg-transparent'
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {t(`devices.${tab}.name`)}
          </button>
        ))}
        <span
          className="absolute bottom-0 h-1 bg-[#cb460e] transition-all duration-300 hidden sm:block"
          style={{
            width: '60px',
            left: underlinePosition,
          }}
        />
      </div>
      {/* Device List */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-disc pl-5 text-gray-700">
          {deviceList.map((device, index) => (
            <li className="leading-6 font-medium" key={index}>
              {device}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
