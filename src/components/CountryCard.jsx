import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link
      to={`/country/${country.name.toLowerCase()}`} // Updated to /country/
      className="bg-white h-[164px] w-[210px] py-5 px-6 shadow-md p-4 flex flex-col items-center text-center rounded-[6px]"
    >
      <img
        src={country.flag}
        alt={`${country.name} flag`}
        className="w-8 h-8 mb-2 object-cover rounded-full"
      />
      <h3 className="text-lg font-medium text-black">{country.name}</h3>
      <p className="text-sm text-[#4f4f4f] mt-1">
        From{' '}
        <span className="bg-[#F6F8FA] ml-2 p-1 rounded-[6px]">
          {country.description}
        </span>
      </p>
    </Link>
  );
};

export default CountryCard;
