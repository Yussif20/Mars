import { useTranslation } from 'react-i18next';
import supportImage from '../assets/support.svg';
import privacyImage from '../assets/privacy.svg';
import paymentImage from '../assets/payment.avif';
import coverageImage from '../assets/global-coverage.avif';
import install1Image from '../assets/sim-install.svg';
import install2Image from '../assets/sim-install.avif';
import { Button } from '../components';

export const Features = () => {
  const { t, i18n } = useTranslation(); // Include i18n for direction

  return (
    <section className="py-12 max-w-5xl mx-auto" dir={i18n.dir()}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center flex flex-col gap-x-8 max-w-2xl mx-auto">
          <p className="text-[#cb460e] font-bold uppercase tracking-wider">
            {t('features.title')}
          </p>
          <h2 className="text-[32px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
            {t('features.heading')}
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 place-items-center">
          {/* Column 1 (2 items) */}
          <div className="space-y-4">
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={supportImage}
                alt={t('features.support.alt')}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>{t('features.support.title')}</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  {t('features.support.description')}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={install1Image}
                alt={t('features.install1.alt')}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>{t('features.install1.title')}</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  {t('features.install1.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 (3 items) */}
          <div className="space-y-4">
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={privacyImage}
                alt={t('features.privacy.alt')}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>{t('features.privacy.title')}</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  {t('features.privacy.description')}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex flex-col gap-2">
                <h3>{t('features.getApp.title')}</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  {t('features.getApp.description')}
                </p>
                <div className="flex mt-4 items-center justify-between flex-col md:flex-row gap-4">
                  <Button className="group" animated size="sm">
                    <p className="flex items-center justify-center gap-2">
                      <ion-icon
                        className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                        name="logo-apple"
                      ></ion-icon>
                      <span>{t('features.getApp.appStore')}</span>
                    </p>
                  </Button>
                  <Button className="group" animated size="sm">
                    <p className="flex items-center justify-center gap-2">
                      <ion-icon
                        className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                        name="logo-google-playstore"
                      ></ion-icon>
                      <span>{t('features.getApp.playStore')}</span>
                    </p>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={paymentImage}
                alt={t('features.payment.alt')}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>{t('features.payment.title')}</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  {t('features.payment.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 (2 items) */}
          <div className="space-y-4">
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={coverageImage}
                alt={t('features.coverage.alt')}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>{t('features.coverage.title')}</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  {t('features.coverage.description')}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={install2Image}
                alt={t('features.install2.alt')}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>{t('features.install2.title')}</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  {t('features.install2.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
