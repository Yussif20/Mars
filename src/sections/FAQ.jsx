import { useState } from 'react';

export const FAQ = () => {
  const [openIndices, setOpenIndices] = useState(new Set());

  const faqData = [
    {
      question: "What's an eSIM?",
      answer:
        'An eSIM (embedded Subscriber Identity Module) is a digital SIM card embedded in devices. It provides mobile services without needing a physical card. It offers multi-line capability and easy carrier switching.',
    },
    {
      question: 'How do I activate my eSIM?',
      answer:
        'eSIM activation usually involves scanning a QR code or using your carrier\'s app. You\'ll need to go to "Mobile Data" or "Cellular" in your device settings and follow the instructions. The process may vary by device and carrier.',
    },
    {
      question: 'Which devices support eSIM technology?',
      answer:
        "Most new-generation smartphones support eSIM. Apple's iPhone XS and later models, Google Pixel 2 and above, and some Samsung Galaxy models are eSIM compatible. Some tablets and smartwatches also use eSIM technology.",
    },
    {
      question: 'Can I use my eSIM while traveling internationally?',
      answer:
        'Yes, eSIM can be used for international travel. You can purchase a plan from a local carrier to avoid roaming charges. Some eSIM providers offer multi-country plans as well.',
    },
    {
      question: 'How do I switch between mobile plans on my eSIM',
      answer:
        'Switching plans on an eSIM is done through your device\'s settings menu. Go to "Mobile Data" or "Cellular" settings, access eSIM options, and add a new plan or switch between existing ones. In some cases, you may need to use your carrier\'s app.',
    },
    {
      question: 'Is eSIM technology secure?',
      answer:
        "eSIM technology is generally considered more secure than traditional SIM cards. It's harder to physically steal or clone. It also offers remote management and update capabilities, allowing for quick responses to security vulnerabilities.",
    },
    {
      question: 'Why is there a waitlist?',
      answer:
        'Possible reasons for an eSIM waitlist include: limited network capacity, gradual rollout of new technology, or high demand. Carriers may use waitlists to prepare their infrastructure and systems.',
    },
  ];

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
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">FAQ</p>
        <h2 className="text-[32px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          Anything you need to know
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-lg tracking-tight">
          Havent fount what you’re looking for?
        </p>
      </div>
      <div className="space-y-4">
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
    </section>
  );
};
