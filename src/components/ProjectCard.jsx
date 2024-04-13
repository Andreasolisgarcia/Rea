import gitLogo from "/GitLogo.svg";
import videoPlayerLogo from "/video-player-logo.svg";

const ProjectCard = ({project}) => {

  return (
    <article className="card-project">
      <div className="logo-container">
        <img src={project.logo} alt={project.name}  />
      </div>

      <div className="card-info">
        <h2>{project.title}</h2>
        <p>{(project.responsive)? "Desktop & Mobile": "Desktop"}</p>
        <ul className="technologies">
          {project.technos.map((techno , index)=> (
            <li key={index}> {techno}</li>
          ))}
        </ul>
        <ul className="project-links">
          <li>
            <img src={gitLogo} alt="Github Logo" />
            <a href={project.repository}>Code</a>
          </li>
          <li>
            <img src={videoPlayerLogo} alt="" />
            <a href={project.liveDemoLink}>Live-Demo</a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
