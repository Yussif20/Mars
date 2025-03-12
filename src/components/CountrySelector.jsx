import { useState } from 'react';
import RegionCard from './RegionCard';
import CountryCard from './CountryCard';

export const CountrySelector = ({ data, isLong }) => {
  const [selectedTab, setSelectedTab] = useState('local');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <section className="mx-auto px-4 py-8 font-inter">
      {/* Tab Buttons */}
      <div className="w-[300px] mx-auto py-1 px-1 flex items-center justify-between mb-8 bg-[#F6F8FA] text-black text-sm font-medium leading-5 rounded-lg">
        <button
          className={`border-none transition-colors cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'local'
              ? 'bg-white text-black shadow-2xl'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('local')}
        >
          Local
        </button>
        <button
          className={`border-none transition-colors cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'regional'
              ? 'bg-white text-black shadow-2xl'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('regional')}
        >
          Regional
        </button>
        <button
          className={`border-none transition-colors cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'global'
              ? 'bg-white text-black shadow-2xl'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('global')}
        >
          Global
        </button>
      </div>

      {/* Country Cards */}
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-10 place-items-center">
        {data[selectedTab]
          .slice(0, !isLong ? 8 : data[selectedTab].length) // عرض 8 فقط إذا كان isLong = true
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
