import { useState } from 'react';
import { Link } from 'react-router';

export const CountrySelector = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState('local');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <section className=" mx-auto px-4 py-8 font-inter">
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
        {data[selectedTab].map((country, index) => (
          <Link
            to="/"
            key={index}
            className="bg-white h-[164px] w-[210px] py-5 px-6 shadow-md p-4 flex flex-col items-center text-center rounded-[6px]"
          >
            {selectedTab === 'local' ? (
              <>
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-8 h-8 mb-2 object-cover rounded-full"
                />
                <h3 className="text-lg font-medium text-black">
                  {country.name}
                </h3>
                <p className="text-sm text-[#4f4f4f] mt-1">
                  From{' '}
                  <span className="bg-[#F6F8FA] ml-2 p-1 rounded-[6px]">
                    {country.description}
                  </span>
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-medium text-black">
                  {country.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {country.description}
                </p>
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-20 h-20 mt-2 object-cover rounded-full"
                />
              </>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};
