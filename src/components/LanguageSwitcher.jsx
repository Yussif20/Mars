import { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [refreshKey, setRefreshKey] = useState(0);

  const languageOptions = t('languageOptions', { returnObjects: true });

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value).then(() => {
      setRefreshKey((prevKey) => prevKey + 1);
    });
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#F6F8FA',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '2px 8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      cursor: 'pointer',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        borderColor: '#cb460e',
        boxShadow: '0 4px 8px rgba(203, 70, 14, 0.2)',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#4f4f4f',
      fontWeight: '500',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#cb460e' : '#fff',
      color: state.isSelected ? '#fff' : '#4f4f4f',
      padding: '10px 12px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease, color 0.2s ease',
      '&:hover': {
        backgroundColor: state.isSelected ? '#cb460e' : '#f6e9e5',
        color: state.isSelected ? '#fff' : '#cb460e',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginTop: '4px',
      animation: 'dropdownFadeIn 0.3s ease-in-out',
      zIndex: 50,
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#cb460e',
      transition: 'transform 0.3s ease',
      '&:hover': {
        color: '#a33a0b',
      },
    }),
  };

  // Custom DropdownIndicator component
  const DropdownIndicator = ({ selectProps }) => (
    <div
      className="transition-transform duration-300"
      style={{
        transform: selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <ion-icon name="chevron-down-outline" size="small" />
    </div>
  );

  return (
    <div className="relative w-40">
      <Select
        key={refreshKey}
        defaultValue={
          languageOptions.find((option) => option.value === i18n.language) ||
          languageOptions[0]
        }
        onChange={handleChange}
        options={languageOptions}
        styles={customStyles}
        components={{ DropdownIndicator }} // Pass the custom component
      />
    </div>
  );
};

export default LanguageSwitcher;
