import { useTranslation } from 'react-i18next';
import { Button, DeviceSelector } from '../components';
import AnimatedSection from '../utils/AnimatedSection';
import compatibleDevicesImage from '../assets/compatible-devices.avif';

export const CompatibleDevices = () => {
  const { t } = useTranslation();

  return (
    <>
      <AnimatedSection>
        <section className="py-12">
          <div className="text-center flex flex-col items-center gap-5 max-w-2xl mx-auto">
            <p className="text-[#cb460e] font-medium text-sm leading-5 uppercase tracking-wider">
              {t('CompatibleDevices.sectionTitle')}
            </p>
            <h2 className="text-4xl leading-10 font-semibold tracking-tight text-gray-800">
              {t('CompatibleDevices.heading')}
            </h2>
            <p className="leading-6 text-[#4f4f4f] text-lg">
              {t('CompatibleDevices.description')}
            </p>
            <Button animated size="md">
              <p className="flex items-center justify-center gap-2">
                {t('buttons.checkNow')}
                <span className="text-black inline-flex items-center justify-center w-6 h-6 bg-white border border-black rounded-full">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
              </p>
            </Button>
            <div className="w-screen min-w-[300px] flex items-center justify-center">
              <img
                className="w-4/6 min-w-[500px] border-b border-gray-200"
                src={compatibleDevicesImage}
                alt={t('CompatibleDevices.imageAlt')}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <DeviceSelector />
      </AnimatedSection>
    </>
  );
};
