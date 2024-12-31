import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import './HomePage.css';
import marvelBanner from '../../assets/Marvel_Logo 1.png';
import CharactersPage from '../characters/CharactersPage';

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="homepage">
      <Navbar isScrolled={isScrolled} />
      <header className="hero-section">
        <img src={marvelBanner} alt="Marvel" className="hero-image" />
        <div className="hero-title">
          Welcome to Marvel Cinematic Universe (MCU)
        </div>
        <div className="hero-description">
          Marvel Studios is a prominent film and television production company known for creating the Marvel Cinematic Universe (MCU), a series of interconnected superhero films and TV shows based on characters from Marvel Comics. Founded in 1993 and now a subsidiary of Walt Disney Studios, Marvel Studios has produced numerous blockbuster films, starting with "Iron Man" in 2008. The studio is renowned for its intricate storytelling, engaging characters, and pioneering visual effects, solidifying its place as a leader in the entertainment industry.
        </div>
      </header>
      <CharactersPage />
    </div>
  );
}

export default HomePage;
