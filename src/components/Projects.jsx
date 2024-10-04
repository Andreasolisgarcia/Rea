import ProjectCard from "./ProjectCard";

const Projects = ({ data }) => {
  return (
    <section className="projects-section" id="projects">
      <h1>Projets</h1>
      <div className="projects-container" >
        <div className="projects">
          {data.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
