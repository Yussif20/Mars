import { useState } from 'react';

const faqData = [
  {
    question: 'Features',
    answer:
      'An eSIM for United States allows you to connect to the Internet at this destination in minutes. Enjoy unlimited data at 3G/4G/LTE speed. Forget about roaming or searching for SIM cards at airports; you receive the eSIM immediately after purchase. Use your favorite apps to call all your friends and family, such as WhatsApp or iMessage, without restrictions.You can still keep your domestic SIM card on your cellphone if you want to use it for SMS or calls. To activate it, you just need to follow the instructions we send to your email.',
  },
  {
    question: 'Description',
    answer:
      "FutureConnect offers hassle-free mobile connectivity through innovative eSIM technology. Our digital SIM cards provide instant activation, global coverage, and flexible plans without the need for physical SIM cards. Whether you're a frequent traveler, a remote worker, or simply looking for a more convenient mobile experience, FutureConnect delivers reliable, secure, and eco-friendly cellular service. Experience the future of mobile connectivity with our easy-to-use app and compatible devices.",
  },
  {
    question: 'Technical Speech',
    answer:
      'An eSIM for United States allows you to connect to the Internet at this destination in minutes. Enjoy unlimited data at 3G/4G/LTE speed. Forget about roaming or searching for SIM cards at airports; you receive the eSIM immediately after purchase. Use your favorite apps to call all your friends and family, such as WhatsApp or iMessage, without restrictions.You can still keep your domestic SIM card on your cellphone if you want to use it for SMS or calls. To activate it, you just need to follow the instructions we send to your email.',
  },
];

export const CountryFAQ = () => {
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
    <div className="space-y-4 max-w-4xl mx-auto">
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
