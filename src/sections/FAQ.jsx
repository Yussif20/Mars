import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
  const { t } = useTranslation();
  const [openIndices, setOpenIndices] = useState(new Set());

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
    <section className="py-12 max-w-3xl mx-auto px-4">
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto py-14">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          {t('faq.title')}
        </p>
        <h2 className="text-[32px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          {t('faq.subtitle')}
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-lg tracking-tight">
          {t('faq.notFound')}
        </p>
      </div>
      <div className="space-y-4">
        {t('faq.questions', { returnObjects: true }).map((item, index) => (
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
    </section>
  );
};
