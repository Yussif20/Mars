import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import innovationImage from '../assets/innovation-image.jpg';
import trustImage from '../assets/trust-image.jpg';
import empowermentImage from '../assets/empowerment-image.jpg';
import collaborationImage from '../assets/collaboration-image.jpg';

// Values data with translation keys
const valuesData = [
  {
    key: 'innovation', // Translation key
    icon: 'create-outline',
    image: innovationImage,
  },
  {
    key: 'trustworthy',
    icon: 'checkmark-done-circle-outline',
    image: trustImage,
  },
  {
    key: 'empowerment',
    icon: 'earth-outline',
    image: empowermentImage,
  },
  {
    key: 'collaboration',
    icon: 'people-outline',
    image: collaborationImage,
  },
];

export const Values = () => {
  const [selectedValue, setSelectedValue] = useState('innovation');
  const { t, i18n } = useTranslation(); // Hook for translations

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const currentValue = valuesData.find((value) => value.key === selectedValue);

  return (
    <section className="mx-auto px-4 py-8 font-inter" dir={i18n.dir()}>
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto py-8 md:py-14">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          {t('values.title')}
        </p>
        <h2 className="text-[28px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          {t('values.heading')}
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-base md:text-lg tracking-tight">
          {t('values.subheading')}
        </p>
      </div>

      {/* Pagination Buttons */}
      <div className="w-full max-w-[400px] mx-auto py-2 px-2 flex flex-wrap justify-center gap-2 mb-8 bg-[#F6F8FA] text-black text-xs sm:text-sm font-medium leading-5 rounded-lg">
        {valuesData.map((value) => (
          <button
            key={value.key}
            className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-2 sm:px-3 hover:bg-white hover:text-black hover:shadow-md ${
              selectedValue === value.key
                ? 'bg-white text-black shadow-md scale-105'
                : 'bg-transparent'
            }`}
            onClick={() => handleValueChange(value.key)}
          >
            {t(`values.${value.key}.name`)}
          </button>
        ))}
      </div>

      {/* Value Display Box */}
      <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Icon, Title, Text */}
        <div className="w-full md:w-1/2 py-8 px-4 sm:px-6 md:px-8 flex flex-col justify-center bg-gray-50">
          <ion-icon
            size="large"
            className="text-[#cb460e] mb-6"
            name={currentValue.icon}
          ></ion-icon>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            {t(`values.${currentValue.key}.title`)}
          </h3>
          <p className="text-gray-600 leading-6 text-sm sm:text-base md:text-lg">
            {t(`values.${currentValue.key}.text`)}
          </p>
        </div>

        {/* Right Side: Image (Appears First on Small Screens) */}
        <div className="w-full md:w-1/2 order-first md:order-last">
          <img
            key={currentValue.key}
            src={currentValue.image}
            alt={t(`values.${currentValue.key}.alt`)}
            className="w-full h-[250px] sm:h-[300px] md:h-full object-cover rounded-[6px] animate-fadeIn"
          />
        </div>
      </div>
    </section>
  );
};
