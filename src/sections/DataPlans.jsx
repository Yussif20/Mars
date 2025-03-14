import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelector } from '../components';

export const DataPlans = ({ data, hasSearch, isLong }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocalCountries = data.local.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredData = {
    ...data,
    local: filteredLocalCountries,
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
