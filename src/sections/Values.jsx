import { useState } from 'react';
import innovationImage from '../assets/innovation-image.jpg';
import trustImage from '../assets/trust-image.jpg';
import empowermentImage from '../assets/empowerment-image.jpg';
import collaborationImage from '../assets/collaboration-image.jpg';

// Values data
const valuesData = [
  {
    name: 'Innovation',
    icon: 'create-outline',
    title: 'Diversity',
    text: 'By valuing and integrating a multitude of diverse perspectives within our team, we actively cultivate an environment where creativity flourishes and excellence becomes the standard',
    image: innovationImage,
  },
  {
    name: 'Trustworthy',
    icon: 'checkmark-done-circle-outline',
    title: 'Trustworthy',
    text: 'Honesty and transparency serve as the pillars of our organization, guiding our actions and communications as we prioritize integrity and openness in every endeavor we undertake',
    image: trustImage,
  },
  {
    name: 'Empowerment',
    icon: 'earth-outline',
    title: 'Empowerment',
    text: 'Our mission is to provide users with the empowerment and autonomy to shape their digital experiences according to their preferences and needs, enabling to take control',
    image: empowermentImage,
  },
  {
    name: 'Collaboration',
    icon: 'people-outline',
    title: 'Stronger Together',
    text: 'We believe in the transformative power of teamwork and cooperation to drive us towards our shared goals, cultivating an environment where mutual support are paramount.',
    image: collaborationImage,
  },
];

export const Values = () => {
  const [selectedValue, setSelectedValue] = useState('Innovation');

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const currentValue = valuesData.find((value) => value.name === selectedValue);

  return (
    <section className="mx-auto px-4 py-8 font-inter">
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto py-8 md:py-14">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          OUR VALUES
        </p>
        <h2 className="text-[28px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          How We Work
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-base md:text-lg tracking-tight">
          Embody the essence of who we are and what we stand for
        </p>
      </div>

      {/* Pagination Buttons */}
      <div className="w-full max-w-[400px] mx-auto py-2 px-2 flex flex-wrap justify-center gap-2 mb-8 bg-[#F6F8FA] text-black text-xs sm:text-sm font-medium leading-5 rounded-lg">
        {valuesData.map((value) => (
          <button
            key={value.name}
            className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-2 sm:px-3 hover:bg-white hover:text-black hover:shadow-md ${
              selectedValue === value.name
                ? 'bg-white text-black shadow-md scale-105'
                : 'bg-transparent'
            }`}
            onClick={() => handleValueChange(value.name)}
          >
            {value.name}
          </button>
        ))}
      </div>

      {/* Value Display Box */}
      <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Icon, Title, Text */}
        <div className=" w-full md:w-1/2 py-8 px-4 sm:px-6 md:px-8 flex flex-col justify-center bg-gray-50">
          <ion-icon
            size="large"
            className="text-[#cb460e] mb-6"
            name={currentValue.icon}
          ></ion-icon>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            {currentValue.title}
          </h3>
          <p className="text-gray-600 leading-6 text-sm sm:text-base md:text-lg">
            {currentValue.text}
          </p>
        </div>

        {/* Right Side: Image (Appears First on Small Screens) */}
        <div className="w-full md:w-1/2 order-first md:order-last">
          <img
            key={currentValue.name}
            src={currentValue.image}
            alt={`${currentValue.name} image`}
            className="w-full h-[250px] sm:h-[300px] md:h-full object-cover rounded-[6px] animate-fadeIn"
          />
        </div>
      </div>
    </section>
  );
};
