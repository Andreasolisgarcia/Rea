import gitIcon from "/GitLogo.svg";
import videoPlayerIcon from "/video-player-logo.svg";
import figmaIcon from "/figma.svg";

const ProjectCard = ({ project }) => {
  return (
    <article className="card-project">
      <div className="logo-container">
        <a href={project.liveDemoLink}>
          <img src={project.logo} alt={project.name} />
        </a>
      </div>

      <div className="card-info">
        <h2>{project.title}</h2>
        <p>{project.responsive ? "Desktop & Mobile" : "Desktop"}</p>
        <ul className="technologies">
          {project.technos.map((techno, index) => (
            <li key={index}> {techno}</li>
          ))}
        </ul>
        <ul className="project-links">
          <li>
            <img src={gitIcon} alt="Github icon" />
            <a href={project.repository}>Code</a>
          </li>
          <li>
            <img src={videoPlayerIcon} alt="Play icon" />
            <a href={project.liveDemoLink}>Demo</a>
          </li>
          <li>
            <span className="icon-container">
              <img src={figmaIcon} alt="figma icon" />
            </span>
            <a href={project.figmaLink}> Maquettes</a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
