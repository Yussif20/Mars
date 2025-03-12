import { Button, CountrySelector } from '../components';
import asiaImage from '../assets/asia.jpg';
import globalImage from '../assets/global.webp';
import northAmericaImage from '../assets/north-america.jpg';
import southAmericaImage from '../assets/south-america.jpg';
import europaImage from '../assets/europa.webp';
import africaImage from '../assets/africa.jpg';

import localImage from '../assets/local-image.avif';
import regionalImage from '../assets/regional-image.avif';
import global from '../assets/global-image.jpg';

// Updated country data
export const countryData = {
  local: [
    { name: 'UK', flag: 'https://flagcdn.com/w20/gb.png', description: '6:00', price: 'US $10.00/GB', image: localImage },
    { name: 'Switzerland', flag: 'https://flagcdn.com/w20/ch.png', description: '7:00', price: 'US $12.00/GB', image: localImage },
    { name: 'Portugal', flag: 'https://flagcdn.com/w20/pt.png', description: '5:00', price: 'US $11.50/GB', image: localImage },
    { name: 'Italy', flag: 'https://flagcdn.com/w20/it.png', description: '6:30', price: 'US $10.50/GB', image: localImage },
    { name: 'Greece', flag: 'https://flagcdn.com/w20/gr.png', description: '5:30', price: 'US $9.00/GB', image: localImage },
    { name: 'England', flag: 'https://flagcdn.com/w20/gb-eng.png', description: '6:15', price: 'US $10.75/GB', image: localImage },
    { name: 'Belarus', flag: 'https://flagcdn.com/w20/by.png', description: '8:00', price: 'US $11.25/GB', image: localImage },
    { name: 'Belgium', flag: 'https://flagcdn.com/w20/be.png', description: '7:30', price: 'US $10.50/GB', image: localImage },
    { name: 'Spain', flag: 'https://flagcdn.com/w20/es.png', description: '6:45', price: 'US $9.75/GB', image: localImage },
    { name: 'France', flag: 'https://flagcdn.com/w20/fr.png', description: '6:00', price: 'US $12.25/GB', image: localImage },
    { name: 'Germany', flag: 'https://flagcdn.com/w20/de.png', description: '7:30', price: 'US $11.50/GB', image: localImage },
    { name: 'Netherlands', flag: 'https://flagcdn.com/w20/nl.png', description: '6:15', price: 'US $10.25/GB', image: localImage },
    { name: 'Sweden', flag: 'https://flagcdn.com/w20/se.png', description: '7:45', price: 'US $12.00/GB', image: localImage },
    { name: 'Norway', flag: 'https://flagcdn.com/w20/no.png', description: '8:30', price: 'US $11.75/GB', image: localImage },
    { name: 'Denmark', flag: 'https://flagcdn.com/w20/dk.png', description: '7:00', price: 'US $10.75/GB', image: localImage },
    { name: 'Finland', flag: 'https://flagcdn.com/w20/fi.png', description: '8:00', price: 'US $11.25/GB', image: localImage },
    { name: 'Ireland', flag: 'https://flagcdn.com/w20/ie.png', description: '6:45', price: 'US $10.50/GB', image: localImage },
    { name: 'Austria', flag: 'https://flagcdn.com/w20/at.png', description: '7:15', price: 'US $9.50/GB', image: localImage },
    { name: 'Poland', flag: 'https://flagcdn.com/w20/pl.png', description: '7:30', price: 'US $11.00/GB', image: localImage },
    { name: 'Czech Republic', flag: 'https://flagcdn.com/w20/cz.png', description: '7:00', price: 'US $10.75/GB', image: localImage },
  ],
  regional: [
    { name: 'South America', flag: southAmericaImage, description: '18 countries', price: 'US $14.00/GB', image: regionalImage },
    { name: 'North America', flag: northAmericaImage, description: '23 countries', price: 'US $15.50/GB', image: regionalImage },
    { name: 'Africa', flag: africaImage, description: '54 countries', price: 'US $13.00/GB', image: regionalImage },
    { name: 'Europe', flag: europaImage, description: '44 countries', price: 'US $16.00/GB', image: regionalImage },
    { name: 'Asia', flag: asiaImage, description: '48 countries', price: 'US $14.50/GB', image: regionalImage },
  ],
  global: [
    { name: 'Global', flag: globalImage, description: '136 countries', price: 'US $18.00/GB', image: global },
  ],
};
