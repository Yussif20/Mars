import { Button, PhoneSlideshow } from '../components';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="flex flex-col text-center items-center justify-center gap-6">
        <h1 className="text-3xl md:text-5xl font-semibold leading-10 md:leading-14">
          {t('hero.title')}
        </h1>
        <p className="text-sm md:text-base text-[#4f4f4f] leading-6">
          {t('hero.subtitle')}
        </p>
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <Button className="group" animated size="sm">
            <p className="flex items-center justify-center gap-2">
              <ion-icon
                className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                name="logo-apple"
              ></ion-icon>
              <span>{t('hero.appStore')}</span>
            </p>
          </Button>
          <Button className="group" animated size="sm">
            <p className="flex items-center justify-center gap-2">
              <ion-icon
                className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                name="logo-google-playstore"
              ></ion-icon>
              <span>{t('hero.playStore')}</span>
            </p>
          </Button>
        </div>
      </div>
      <PhoneSlideshow />
    </section>
  );
};
