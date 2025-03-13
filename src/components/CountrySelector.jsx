import { useState, useRef } from 'react';
import RegionCard from './RegionCard';
import CountryCard from './CountryCard';

export const CountrySelector = ({ data, isLong }) => {
  const [selectedTab, setSelectedTab] = useState('local');
  const tabRefs = useRef([]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // Calculate the left position to center the underline under the active tab
  const getLeftPosition = () => {
    const index =
      selectedTab === 'local' ? 0 : selectedTab === 'regional' ? 1 : 2;
    const tab = tabRefs.current[index];
    if (tab) {
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;
      // Center the 60px underline under the tab
      return `${tabLeft + (tabWidth - 60) / 2}px`;
    }
    return '0px'; // Fallback
  };

  return (
    <section className="mx-auto px-4 py-8 font-inter">
      {/* Tab Buttons */}
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
          Local
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
          Regional
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
          Global
        </button>
        <span
          className="absolute bottom-0 h-1 bg-[#cb460e] transition-all duration-300"
          style={{
            width: '60px',
            left: getLeftPosition(),
          }}
        />
      </div>

      {/* Country Cards */}
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-10 place-items-center">
        {data[selectedTab]
          .slice(0, isLong ? data[selectedTab].length : 8)
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
