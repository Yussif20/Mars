import { useState } from 'react';
import asiaImage from '../assets/asia.jpg';
import globalImage from '../assets/global.webp';
import northAmericaImage from '../assets/north-america.jpg';
import southAmericaImage from '../assets/south-america.jpg';
import europaImage from '../assets/europa.webp';
import africaImage from '../assets/africa.jpg';
import { CountrySelector } from '../components';

// Updated country data with 24 additional local countries
const countryData = {
  local: [
    { name: 'UK', flag: 'https://flagcdn.com/w20/gb.png', description: '6:00' },
    {
      name: 'Switzerland',
      flag: 'https://flagcdn.com/w20/ch.png',
      description: '7:00',
    },
    {
      name: 'Portugal',
      flag: 'https://flagcdn.com/w20/pt.png',
      description: '5:00',
    },
    {
      name: 'Italy',
      flag: 'https://flagcdn.com/w20/it.png',
      description: '6:30',
    },
    {
      name: 'Greece',
      flag: 'https://flagcdn.com/w20/gr.png',
      description: '5:30',
    },
    {
      name: 'England',
      flag: 'https://flagcdn.com/w20/gb-eng.png',
      description: '6:15',
    },
    {
      name: 'Belarus',
      flag: 'https://flagcdn.com/w20/by.png',
      description: '8:00',
    },
    {
      name: 'Belgium',
      flag: 'https://flagcdn.com/w20/be.png',
      description: '7:30',
    },
    // 24 additional local countries
    {
      name: 'France',
      flag: 'https://flagcdn.com/w20/fr.png',
      description: '6:45',
    },
    {
      name: 'Germany',
      flag: 'https://flagcdn.com/w20/de.png',
      description: '7:15',
    },
    {
      name: 'Spain',
      flag: 'https://flagcdn.com/w20/es.png',
      description: '6:00',
    },
    {
      name: 'Netherlands',
      flag: 'https://flagcdn.com/w20/nl.png',
      description: '7:00',
    },
    {
      name: 'Sweden',
      flag: 'https://flagcdn.com/w20/se.png',
      description: '8:30',
    },
    {
      name: 'Norway',
      flag: 'https://flagcdn.com/w20/no.png',
      description: '8:45',
    },
    {
      name: 'Denmark',
      flag: 'https://flagcdn.com/w20/dk.png',
      description: '7:45',
    },
    {
      name: 'Finland',
      flag: 'https://flagcdn.com/w20/fi.png',
      description: '9:00',
    },
    {
      name: 'Poland',
      flag: 'https://flagcdn.com/w20/pl.png',
      description: '7:30',
    },
    {
      name: 'Austria',
      flag: 'https://flagcdn.com/w20/at.png',
      description: '7:15',
    },
    {
      name: 'Czech Republic',
      flag: 'https://flagcdn.com/w20/cz.png',
      description: '7:00',
    },
    {
      name: 'Hungary',
      flag: 'https://flagcdn.com/w20/hu.png',
      description: '6:45',
    },
    {
      name: 'Ireland',
      flag: 'https://flagcdn.com/w20/ie.png',
      description: '5:45',
    },
    {
      name: 'Romania',
      flag: 'https://flagcdn.com/w20/ro.png',
      description: '8:00',
    },
    {
      name: 'Bulgaria',
      flag: 'https://flagcdn.com/w20/bg.png',
      description: '8:15',
    },
    {
      name: 'Croatia',
      flag: 'https://flagcdn.com/w20/hr.png',
      description: '6:30',
    },
    {
      name: 'Slovenia',
      flag: 'https://flagcdn.com/w20/si.png',
      description: '7:00',
    },
    {
      name: 'Slovakia',
      flag: 'https://flagcdn.com/w20/sk.png',
      description: '7:15',
    },
    {
      name: 'Lithuania',
      flag: 'https://flagcdn.com/w20/lt.png',
      description: '8:30',
    },
    {
      name: 'Latvia',
      flag: 'https://flagcdn.com/w20/lv.png',
      description: '8:45',
    },
    {
      name: 'Estonia',
      flag: 'https://flagcdn.com/w20/ee.png',
      description: '9:00',
    },
    {
      name: 'Luxembourg',
      flag: 'https://flagcdn.com/w20/lu.png',
      description: '7:00',
    },
    {
      name: 'Malta',
      flag: 'https://flagcdn.com/w20/mt.png',
      description: '6:15',
    },
    {
      name: 'Cyprus',
      flag: 'https://flagcdn.com/w20/cy.png',
      description: '8:00',
    },
  ],
  regional: [
    {
      name: 'South America',
      flag: southAmericaImage,
      description: '18 countries',
    },
    {
      name: 'North America',
      flag: northAmericaImage,
      description: '23 countries',
    },
    { name: 'Africa', flag: africaImage, description: '54 countries' },
    { name: 'Europe', flag: europaImage, description: '44 countries' },
    { name: 'Asia', flag: asiaImage, description: '48 countries' },
  ],
  global: [{ name: 'Global', flag: globalImage, description: '136 countries' }],
};

export const DataPlans = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter local countries based on search term
  const filteredLocalCountries = countryData.local.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Create filtered data object to pass to CountrySelector
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

        {/* Search Bar */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-700"
          />
        </div>
      </div>
      <CountrySelector data={filteredData} />
    </section>
  );
};
