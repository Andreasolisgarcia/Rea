import gitLogo from '/GitLogo.svg'
import videoPlayerLogo from '/video-player-logo.svg'
import bookiLogo from '../assets/images/project-logos/booki.png'

const ProjectCard = () => {
  return (
    <article>
      <img src={bookiLogo} alt="" />
      <div className="card-content">
        <h2>Intégration d’une plateforme de réservation de vacances</h2>
        <p>Desktop & mobile</p>
        <ul className="technologies">
            <li>Html</li>
            <li>CSS</li>
        </ul>
        <ul className="project-links">
            <li><img src={gitLogo} alt="Github Logo" />Code</li>
            <li><img src={videoPlayerLogo} alt="" />Live-Demo</li>
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
