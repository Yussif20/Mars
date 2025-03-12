import { useState } from 'react';
import { CountrySelector } from '../components';
import { countryData } from '../data/countryData';

export const Plans = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocalCountries = countryData.local.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredData = {
    ...countryData,
    local: filteredLocalCountries,
  };

  return (
    <section>
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto py-14">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          DATA PLANS
        </p>
        <h2 className="text-[32px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          Popular eSIM Choices
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-lg tracking-tight">
          Choose the best ones and get connected throughout your trip
        </p>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Search countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb460e] text-gray-700"
          />
        </div>
      </div>
      <CountrySelector data={filteredData} />
    </section>
  );
};
