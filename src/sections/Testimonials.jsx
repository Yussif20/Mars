import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = t('testimonials.reviews', { returnObjects: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // تغيير الشهادة كل 4 ثوانٍ

    return () => clearInterval(interval); // تنظيف المؤقت عند إلغاء المكون
  }, [testimonials.length]);

  return (
    <section className="py-14">
      <div className="text-center flex flex-col gap-4 max-w-2xl mx-auto">
        <p className="text-[#cb460e] font-bold uppercase tracking-wider">
          {t('testimonials.title')}
        </p>
        <h2 className="text-[28px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
          {t('testimonials.subtitle')}
        </h2>
        <p className="leading-6 text-[#4f4f4f] text-base md:text-lg tracking-tight">
          {t('testimonials.description')}
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto px-4">
        <div className="relative min-h-[200px] sm:min-h-[250px]">
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
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-md mx-auto w-full">
                <p className="text-gray-600 italic mb-4 text-sm sm:text-base leading-6">
                  "{testimonial.opinion}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">
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
