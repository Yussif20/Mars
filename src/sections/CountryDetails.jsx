import { useParams } from 'react-router-dom';
import { countryData } from '../data/countryData'; // Shared data source
import { Button } from '../components';

export const CountryDetails = () => {
  const { country } = useParams(); // Get the country name from the URL
  const allCountries = [
    ...countryData.local,
    ...countryData.regional,
    ...countryData.global,
  ];
  const selectedCountry = allCountries.find(
    (c) => c.name.toLowerCase() === country.toLowerCase()
  );

  // Fallback if country not found
  if (!selectedCountry) {
    return <div>Country not found</div>;
  }

  // Static features (same for all countries)
  const features = [
    {
      title: 'Digital sim-card',
      text: 'Easy top-up',
    },
    {
      title: 'Data plans',
      text: 'Pay lower costs for our data plans',
    },
    {
      title: 'Expire date',
      text: '12 Months after activate',
    },
  ];

  return (
    <section className="py-8">
      <h2 className="text-sm font-medium leading-5 text-[#cb460e] text-center mb-6 uppercase">
        Destination
      </h2>
      <h2 className="text-5xl font-semibold leading-14 text-center mb-6">
        {selectedCountry.name}
      </h2>
      <div className="w-full mx-auto rounded-lg flex items-center justify-center gap-4 flex-col md:flex-row">
        {/* Left: Country Picture */}
        <div className="md:w-3/5 rounded-lg">
          <img
            src={selectedCountry.image}
            alt={`${selectedCountry.name} image`}
            className="w-full h-[350px] object-cover rounded-lg animate-imageReveal"
          />
        </div>

        {/* Right: Features and Price Plan */}
        <div className="md:w-2/5 bg-white flex flex-col justify-between rounded-lg">
          {/* Features Menu */}
          <div>
            <ul className="mx-4 my-2  flex flex-col gap-3 items-start border-b border-gray-200">
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

          {/* Price Plan */}
          <div className="">
            <div className="p-2 flex flex-col items-center justify-between gap-4 rounded-lg">
              <p className=" leading-6 font-semibold mt-2 animate-pulsePrice">
                {selectedCountry.price}
              </p>
              <div className="flex items-center justify-between flex-col md:flex-row gap-4">
                <Button className="group" animated size="sm">
                  <p className="flex items-center justify-center gap-2">
                    <ion-icon
                      className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                      name="logo-apple"
                    ></ion-icon>
                    <span>App Store</span>
                  </p>
                </Button>{' '}
                <Button className="group" animated size="sm">
                  <p className="flex items-center justify-center gap-2">
                    <ion-icon
                      className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                      name="logo-google-playstore"
                    ></ion-icon>
                    <span>Play Store</span>
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
