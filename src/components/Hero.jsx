import Portrait from '../assets/images/Portrait.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <div className="headline">
          Hola, moi c’est Andrea, dev fullstack en recherche de nouvelles
          expériences
        </div>
        <ul className="lead">
            <li className="location">Strasbourg</li>
            <li className="date">alternance à partir d’août 2024</li>
        </ul>
      </div>
      <div className="portrait-container">
        <img src={Portrait} alt="" />
      </div>
    </div>
  );
};

export default Hero;
