import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import './language-switcher.scss';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languageNames = {
    ru: 'Русский',
    uz: 'O\'zbekcha',
    en: 'English'
  };

  const languageFlags = {
    ru: '🇷🇺',
    uz: '🇺🇿',
    en: '🇺🇸'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Tilni almashtirish"
      >
        <FaGlobe className="language-switcher__icon" />
        <span className="language-switcher__current">
          {languageFlags[currentLanguage]} {languageNames[currentLanguage]}
        </span>
        <FaChevronDown className={`language-switcher__arrow ${isOpen ? 'rotated' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="language-switcher__dropdown">
          {availableLanguages.map((language) => (
            <button
              key={language}
              className={`language-switcher__option ${
                currentLanguage === language ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              <span className="language-switcher__flag">{languageFlags[language]}</span>
              <span className="language-switcher__name">{languageNames[language]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 