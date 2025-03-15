import { Link } from 'react-router';

const RegionCard = ({ country }) => {
  return (
    <Link
      to={`/country/${country.key}`}
      className="bg-white h-[164px] w-[210px] py-5 px-6 shadow-md p-4 flex flex-col items-center text-center rounded-[6px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1"
    >
      <>
        <h3 className="text-lg font-medium text-black">{country.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{country.description}</p>
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-20 h-20 mt-2 object-cover rounded-full"
        />
      </>
    </Link>
  );
};

export default RegionCard;
