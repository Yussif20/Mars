import { useState, useRef } from 'react';

export const DeviceSelector = () => {
  const [selectedTab, setSelectedTab] = useState('apple');
  const tabRefs = useRef([]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // Device data
  const deviceData = {
    apple: [
      'iPhone 15, 15 Plus, 15 Pro, 15 Pro Max',
      'iPhone 14, 14 Plus, Pro, 14 Pro Max',
      'iPhone 13, 13 Mini, 13 Pro, 13 Pro Max, SE 3 (2022)',
      'iPhone 12, 12 Mini, 12 Pro, 12 Pro Max',
      'iPhone 11, 11 Pro, 11 Pro Max',
      'Apple watch SE',
      'iPhone XS, XS Max, XR',
      'iPhone SE (2020, 2022)',
      'iPad Pro 11-inch (1st, 2nd and 3rd generation)',
      'iPad Pro 12.9-inch (3rd, 4th and 5th generation)',
      'iPad (7th, 8th and 9th generation)',
      'iPad Mini (5th and 6th generation)',
      'Apple watch series 3, 4, 5 and 6',
      'iPad Pro 12.9-inch (3rd, 4th and 5th generation)',
    ],
    samsung: [
      'Galaxy S23, S23, S23 Ultra',
      'Galaxy S22, S22+ 5G, S22 Ultra 5G',
      'Galaxy S21, S21+ 5G, S21 Ultra 5G',
      'Galaxy S20, S20+, S20 Ultra',
      'Galaxy Z Flip, Flip 3,4,5',
      'Galaxy Note 20, 20+, 20 Ultra',
      'Galaxy Fold, Fold 2, Fold 3,4,5',
      'Galaxy Watch',
    ],
    googlePixel: [
      'Google Pixel 7, 7 Pro',
      'Google Pixel 6, 6a, 6 Pro',
      'Google Pixel 5',
      'Google Pixel 3, 3 XL',
      'Google Pixel 3, 3a XL',
      'Google Pixel 4, 4a, 4 XL',
    ],
    other: [
      'Huawei P40, P40 Pro',
      'Honor Magic 4 Pro',
      'Motorola Razr (2019), Razr 5G',
      'Oppo Find X5, X5 Pro, X3 Pro',
      'Fairphone',
      'Nuu Mobile X5',
      'Sony Xperia 10 III Lite',
      'Huawei Mate 40 pro',
      'Sony Xperia 10 IV',
      'Microsoft Surface Duo',
      'Oppo Reno 5A, Reno 6 Pro 5G',
    ],
  };

  // Calculate the left position to center the underline under the active tab
  const getLeftPosition = () => {
    const index =
      selectedTab === 'apple'
        ? 0
        : selectedTab === 'samsung'
        ? 1
        : selectedTab === 'googlePixel'
        ? 2
        : 3;
    const tab = tabRefs.current[index];
    if (tab) {
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;
      return `${tabLeft + (tabWidth - 60) / 2}px`; // Center the 60px underline
    }
    return '0px'; // Fallback
  };

  return (
    <section className="mx-auto px-4 py-8 font-inter">
      {/* Tab Buttons */}
      <div className="max-w-[400px] w-full mx-auto py-1 px-2 sm:px-4 flex items-center justify-around mb-8 bg-[#F6F8FA] text-black text-xs sm:text-sm font-medium leading-5 rounded-lg relative">
        <button
          ref={(el) => (tabRefs.current[0] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-2 sm:px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'apple'
              ? 'bg-white text-black shadow-2xl scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('apple')}
        >
          Apple
        </button>
        <button
          ref={(el) => (tabRefs.current[1] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-2 sm:px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'samsung'
              ? 'bg-white text-black shadow-2xl scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('samsung')}
        >
          Samsung
        </button>
        <button
          ref={(el) => (tabRefs.current[2] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-2 sm:px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'googlePixel'
              ? 'bg-white text-black shadow-2xl scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('googlePixel')}
        >
          Google Pixel
        </button>
        <button
          ref={(el) => (tabRefs.current[3] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-[#4e4e4e] rounded-[6px] py-1 px-2 sm:px-4 hover:bg-white hover:text-black hover:shadow-2xl ${
            selectedTab === 'other'
              ? 'bg-white text-black shadow-2xl scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('other')}
        >
          Other
        </button>
        <span
          className="absolute bottom-0 h-1 bg-[#cb460e] transition-all duration-300 hidden sm:block"
          style={{
            width: '60px',
            left: getLeftPosition(),
          }}
        />
      </div>
      {/* Device List */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-disc pl-5 text-gray-700">
          {deviceData[selectedTab].map((device, index) => (
            <li className="leading-6 font-medium" key={index}>
              {device}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
