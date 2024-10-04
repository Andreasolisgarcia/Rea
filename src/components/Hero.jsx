import Portrait from '../assets/images/Portrait.png'
import locationIcon from '/location.svg'
import searchIcon from '/search.svg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <div className="headline">
          Hola, moi c’est Andrea, <br/>
          dev fullstack en recherche 
          de nouvelles expériences
        </div>
        <ul className="lead">
            <li className="location"><img src={locationIcon} alt="Icone de localisation" />Strasbourg</li>
            <li className="date"><img src={searchIcon}  alt="Icone de recherche" /> Stage / Alternance </li>
        </ul>
      </div>
      <div className="portrait-container">
        <img src={Portrait} alt="" />
      </div>
    </div>
  );
};

export default Hero;
