import { useParams } from 'react-router-dom';
import { countryData } from '../data/countryData'; // Shared data source

export const CountryPage = () => {
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
    'Unlimited Data',
    'High-Speed 4G/5G',
    'No Roaming Fees',
    'Instant Activation',
  ];

  // Dynamic price plan (example data, adjust as needed)
  const pricePlan = {
    name: selectedCountry.name,
    price: selectedCountry.description.includes('countries')
      ? '$10/day' // Regional/Global example
      : '$5/GB', // Local example
  };

  return (
    <section className="py-8 font-inter">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Destination: {selectedCountry.name}
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg flex flex-col md:flex-row">
        {/* Left: Country Picture */}
        <div className="md:w-1/2 p-4">
          <img
            src={selectedCountry.image}
            alt={`${selectedCountry.name} image`}
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>

        {/* Right: Features and Price Plan */}
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
          {/* Features Menu */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Bundle Features
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Plan */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Price Plan
            </h2>
            <div className="bg-[#F6F8FA] p-4 rounded-lg">
              <p className="text-lg font-medium text-black">{pricePlan.name}</p>
              <p className="text-2xl font-bold text-[#cb460e] mt-2">
                {selectedCountry.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
