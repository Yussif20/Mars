import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const CountryFAQ = () => {
  const { t, i18n } = useTranslation();
  const [openIndices, setOpenIndices] = useState(new Set());

  const faqData = t('countryFAQ.items', { returnObjects: true });

  const toggleFAQ = (index) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto" dir={i18n.dir()}>
      {faqData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-4 text-left bg-white rounded-lg focus:outline-none cursor-pointer transition-colors"
          >
            <span className="text-lg font-medium text-gray-800">
              {item.question}
            </span>
            <span
              className={`text-2xl transition-transform duration-300 ${
                openIndices.has(index) ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndices.has(index)
                ? 'max-h-40 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <p className="p-4 text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
