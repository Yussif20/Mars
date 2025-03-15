import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../components';
import localImage from '../assets/local-image.avif';
import regionalImage from '../assets/regional-image.avif';
import global from '../assets/global-image.jpg';

export const CountryDetails = () => {
  const { t, i18n } = useTranslation();
  const { country } = useParams();

  // Fetch all country data from translations
  const allCountries = [
    ...t('countrySelector.local.countries', { returnObjects: true }).map(
      (item) => ({
        ...item,
        image: localImage,
        category: 'local',
      })
    ),
    ...t('countrySelector.regional.regions', { returnObjects: true }).map(
      (item) => ({
        ...item,
        image: regionalImage,
        category: 'regional',
      })
    ),
    ...t('countrySelector.global.plans', { returnObjects: true }).map(
      (item) => ({
        ...item,
        image: global,
        category: 'global',
      })
    ),
  ];

  // Find the selected country by key
  const selectedCountry = allCountries.find(
    (c) => c.key.toLowerCase() === country.toLowerCase()
  );

  if (!selectedCountry) {
    return <div>{t('countryDetails.notFound')}</div>;
  }

  const features = t('countryDetails.features', { returnObjects: true });

  return (
    <section className="py-8 max-w-4xl mx-auto" dir={i18n.dir()}>
      <h2 className="text-sm font-medium leading-5 text-[#cb460e] text-center mb-6 uppercase">
        {t('countryDetails.destination')}
      </h2>
      <h2 className="text-5xl font-semibold leading-14 text-center mb-6">
        {selectedCountry.name}
      </h2>
      <div className="w-full mx-auto rounded-lg flex items-center justify-center gap-4 flex-col md:flex-row">
        <div className="md:w-3/5 rounded-lg">
          <img
            src={selectedCountry.image}
            alt={`${selectedCountry.name} image`}
            className="w-full h-[350px] object-cover rounded-lg animate-imageReveal"
          />
        </div>
        <div className="md:w-2/5 bg-white flex flex-col justify-between rounded-lg">
          <div>
            <ul className="mx-4 my-2 flex flex-col gap-3 items-start border-b border-gray-200">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="mb-2 flex items-center justify-center gap-4"
                >
                  <div className="p-[10px] flex items-center justify-center bg-gray-200 rounded-full">
                    <ion-icon
                      className="text-lg"
                      name="calendar-outline"
                    ></ion-icon>
                  </div>
                  <div className="">
                    <p className="text-black font-medium leading-6">
                      {feature.title}
                    </p>
                    <p className="text-[#4f4f4f] text-sm">{feature.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="p-2 flex flex-col items-center justify-between gap-4 rounded-lg">
              <p className="leading-6 font-semibold mt-2 animate-pulsePrice">
                {selectedCountry.price}
              </p>
              <div className="flex items-center justify-between flex-col md:flex-row gap-4">
                <Button className="group" animated size="sm">
                  <p className="flex items-center justify-center gap-2">
                    <ion-icon
                      className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                      name="logo-apple"
                    ></ion-icon>
                    <span>{t('countryDetails.appStore')}</span>
                  </p>
                </Button>
                <Button className="group" animated size="sm">
                  <p className="flex items-center justify-center gap-2">
                    <ion-icon
                      className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                      name="logo-google-playstore"
                    ></ion-icon>
                    <span>{t('countryDetails.playStore')}</span>
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
