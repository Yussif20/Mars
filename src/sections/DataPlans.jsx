import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelector } from '../components';
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

export const DataPlans = ({ hasSearch, isLong }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all country data from translations and assign images
  const countryData = {
    local: t('countrySelector.local.countries', { returnObjects: true }).map(
      (item) => ({
        ...item,
        image: localImage, // Assign localImage to all local countries
      })
    ),
    regional: t('countrySelector.regional.regions', {
      returnObjects: true,
    }).map((item) => ({
      ...item,
      flag: imageMap[item.flag], // Map flag images for regions
      image: regionalImage, // Assign regionalImage to all regions
    })),
    global: t('countrySelector.global.plans', { returnObjects: true }).map(
      (item) => ({
        ...item,
        flag: imageMap[item.flag], // Map flag image for global
        image: global, // Assign global image to global plan
      })
    ),
  };

  const filteredData = {
    local: countryData.local.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    regional: countryData.regional.filter((region) =>
      region.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    global: countryData.global.filter((plan) =>
      plan.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  };

  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto py-14">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          {t('dataPlans.title')}
        </p>
        <h2 className="text-[32px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          {t('dataPlans.popularChoices')}
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-lg tracking-tight">
          {t('dataPlans.description')}
        </p>

        {hasSearch && (
          <div className="mt-4">
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-700"
            />
          </div>
        )}
      </div>
      <CountrySelector isLong={isLong} data={filteredData} />
    </section>
  );
};
