import { Button, CountrySelector } from '../components';
import asiaImage from '../assets/asia.jpg';
import globalImage from '../assets/global.webp';
import northAmericaImage from '../assets/north-america.jpg';
import southAmericaImage from '../assets/south-america.jpg';
import europaImage from '../assets/europa.webp';
import africaImage from '../assets/africa.jpg';

// Updated country data
export const countryData = {
  local: [
    {
      name: 'UK',
      flag: 'https://flagcdn.com/w20/gb.png',
      description: '6:00',
    },
    {
      name: 'Switzerland',
      flag: 'https://flagcdn.com/w20/ch.png',
      description: '7:00',
    },
    {
      name: 'Portugal',
      flag: 'https://flagcdn.com/w20/pt.png',
      description: '5:00',
    },
    {
      name: 'Italy',
      flag: 'https://flagcdn.com/w20/it.png',
      description: '6:30',
    },
    {
      name: 'Greece',
      flag: 'https://flagcdn.com/w20/gr.png',
      description: '5:30',
    },
    {
      name: 'England',
      flag: 'https://flagcdn.com/w20/gb-eng.png',
      description: '6:15',
    },
    {
      name: 'Belarus',
      flag: 'https://flagcdn.com/w20/by.png',
      description: '8:00',
    },
    {
      name: 'Belgium',
      flag: 'https://flagcdn.com/w20/be.png',
      description: '7:30',
    },
  ],
  regional: [
    {
      name: 'South America',
      flag: southAmericaImage,
      description: '18 countries',
    },
    {
      name: 'North America',
      flag: northAmericaImage,
      description: '23 countries',
    },
    {
      name: 'Africa',
      flag: africaImage,
      description: '54 countries',
    },
    {
      name: 'Europe',
      flag: europaImage,
      description: '44 countries',
    },
    {
      name: 'Asia',
      flag: asiaImage,
      description: '48 countries',
    },
  ],
  global: [
    {
      name: 'Global',
      flag: globalImage,
      description: '136 countries',
    },
  ],
};
