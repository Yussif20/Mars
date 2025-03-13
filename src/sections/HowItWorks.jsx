import { useState, useEffect } from 'react';

// Placeholder assets (replace with your actual files)
import step1Image from '../assets/download.avif'; // Image: Downloading the app
import step2Video from '../assets/data-plans.mp4'; // Video: Choosing a data plan
import step3Video from '../assets/frame.mp4'; // Video: Activating eSIM
import step4Video from '../assets/start.mp4'; // Video: Using the eSIM

const steps = [
  {
    text: '💎 Download the app',
    media: step1Image,
    type: 'image',
  },
  {
    text: '🙌 Choose data plan',
    media: step2Video,
    type: 'video',
  },
  {
    text: '✅ Activate your eSim card',
    media: step3Video,
    type: 'video',
  },
  {
    text: '🎉 Start using it seamlessly',
    media: step4Video,
    type: 'video',
  },
];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 px-4 mx-auto max-w-4xl">
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto mb-12">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          MARS APP
        </p>
        <h2 className="text-[28px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          How Mars eSIM works?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Steps */}
        <div className="w-full md:w-1/2">
          <p className="text-2xl font-medium leading-7 text-center">
            {steps.map((step, index) => (
              <span
                key={index}
                className={`transition-all duration-300 mx-2 ${
                  activeStep === index
                    ? 'text-gray-800 font-semibold'
                    : 'text-gray-400 font-medium'
                }`}
              >
                {step.text}
              </span>
            ))}
          </p>
        </div>

        {/* Right Side: Phone Frame */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[250px] h-[500px] rounded-[40px] p-3 shadow-lg">
            {/* Phone Bezel */}
            <div className="absolute inset-0 border-8 border-gray-800 rounded-[40px] pointer-events-none"></div>
            {/* Screen */}
            <div className="w-full h-full z-30 rounded-[32px] overflow-hidden">
              {steps[activeStep].type === 'image' ? (
                <img
                  src={steps[activeStep].media}
                  alt={`Step ${activeStep + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />
              ) : (
                <video
                  key={steps[activeStep].media}
                  src={steps[activeStep].media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
