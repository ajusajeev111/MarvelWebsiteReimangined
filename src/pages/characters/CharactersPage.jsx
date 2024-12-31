import React, { useState } from 'react';
import './CharactersPage.css'
import IronManBanner from '../../assets/ironman.png'
import IronManTitle from '../../assets/ironman title.png'
import BlackPantherTitle from '../../assets/Blackpanther Title.png'
import BlackPantherBanner from '../../assets/blackpanther.png'
import ThorTitle from '../../assets/thor title.png'
import ThorBanner from '../../assets/ThorBanner.png'
import LokiTitle from '../../assets/LokiTitle.png'
import LokiBanner from '../../assets/LokiBanner.png'

const characters = [
  {
    banner: IronManBanner,
    title: IronManTitle,
    description: [
      '"Iron Man" (2008) is the groundbreaking film that launched the Marvel Cinematic Universe, featuring Robert Downey Jr. as Tony Stark, a genius billionaire who transforms into the armored superhero Iron Man.',
      "Directed by Jon Favreau, the movie follows Stark's journey from a weapons manufacturer to a hero dedicated to protecting the world."
    ],
    primaryColor: '#7C0003'
  },
  {
    banner: BlackPantherBanner,
    title: BlackPantherTitle,
    description: [
      "Black Panther (2018) is a critically acclaimed Marvel film directed by Ryan Coogler, featuring Chadwick Boseman as T'Challa, the newly crowned king of the technologically advanced African nation of Wakanda. The movie follows T'Challa's struggle to defend his throne and country from internal and external threats, exploring themes of heritage, identity, and responsibility."
    ],
    primaryColor: '#7831BF'
  },
  {
    banner: ThorBanner,
    title: ThorTitle,
    description: [
     '"Thor" (2011) is a Marvel superhero film directed by Kenneth Branagh, starring Chris Hemsworth as Thor, the Norse God of Thunder. The movie follows Thors anishment from the mystical realm of Asgard to Earth, where he must learn humility and prove himself worthy to reclaim his power and throne.'
    ],
    primaryColor: '#1955C8'
  },
  {
    banner: LokiBanner,
    title: LokiTitle,
    description: [
     '"Loki" is a Marvel Studios series released in 2021 on Disney+, featuring Tom Hiddleston reprising his role as Loki, the God of Mischief. The series follows a version of Loki who escapes with the Tesseract during the events of "Avengers: Endgame," leading to his capture by the Time Variance Authority (TVA). Loki explores themes of identity, free will, and redemption while encountering new characters and alternate versions of himself.'
    ],
    primaryColor: '#037D00'
  }

];

function CharactersPage() {

      const [activeIndex, setActiveIndex] = useState(0);
      const { banner, title, description, primaryColor } = characters[activeIndex];
      const totalDots = 4;
  
      const handlePrevClick = () => {
          setActiveIndex((prevIndex) => (prevIndex === 0 ? totalDots - 1 : prevIndex - 1));
      };
  
      const handleNextClick = () => {
          setActiveIndex((prevIndex) => (prevIndex === totalDots - 1 ? 0 : prevIndex + 1));
      };

  return (
        <div className="characters" style={{ '--primary-color': primaryColor }}>
        <img src={banner} alt="Character Banner" className="character-image" />
        <div className="charactercontent">
          <div className="character-title-logo">
            <img src={title} alt="Character Title Logo" className="character-title" />
          </div>
          <div className="character-description">
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="character-buttons">
            <button className="watchmovie-button">
              Watch Movie
            </button>
            <button className="watchtrailer-button">
              Watch Trailer
            </button>
          </div>
          <div className="carousel-container">
            <div className="carousel">
                <div className="arrow" onClick={handlePrevClick}>&#10094;</div>
                <div className="dots">
                  {Array.from({ length: totalDots }).map((_, index) => (
                    <span key={index} className={`dot${index === activeIndex ? 'active' : ''}`}></span>
                  ))}
                </div>
                <div className="arrow" onClick={handleNextClick}>&#10095;</div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default CharactersPage;