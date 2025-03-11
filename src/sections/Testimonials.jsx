import { useState, useEffect } from 'react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      opinion:
        'The eSIM made traveling so much easier! No more hunting for local SIM cards at airports or dealing with language barriers to get connected. I was up and running with data in minutes, which saved me a lot of hassle on my last trip abroad.',
      name: 'Tom Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      opinion:
        'Switching carriers was a breeze with this eSIM. The service is excellent, and the connectivity has been flawless even in remote areas. I appreciate how seamless the process was—no need to visit a store or wait for a physical SIM to arrive.',
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      opinion:
        'I love the flexibility of managing multiple lines on one device with the eSIM. It’s perfect for separating work and personal calls without carrying two phones. The setup was intuitive, and I’ve had no issues juggling both numbers on the go.',
      name: 'John Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      opinion:
        'This eSIM is reliable and affordable—exactly what I need for my international business trips. The coverage is impressive, and the pricing is transparent with no hidden fees. It’s become an essential tool for staying connected across borders.',
      name: 'James Carter',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  return (
    <section className="py-14">
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          TESTIMONIALS
        </p>
        <h2 className="text-[32px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          Our Clients Speak for Us
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-lg tracking-tight">
          Our eSIMs are trusted by over 5,000,000 people worldwide
        </p>
      </div>

      <div className="mt-16 max-w-3xl mx-auto px-4">
        <div className="relative h-64 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.opinion}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
