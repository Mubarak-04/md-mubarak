import Brewlytics from '../../assets/Brewlytics.jpg';
import EVinsights from '../../assets/EVinsights.jpg';
import HRVision from '../../assets/HRVision.jpg';
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={Brewlytics} 
          link="https://github.com/Mubarak-04/Coffee-Day-Project.git"
          h3="Brewlytics"
          p="Coffee Sales Intelligence"
        />
        <ProjectCard 
          src={EVinsights} 
          link="https://github.com/Mubarak-04/Electric-Vehicle-Data-Analysis.git"
          h3="EV Insights"
          p="Electric Vehicle Data Analysis"
        />
        <ProjectCard 
          src={HRVision} 
          link="https://www.linkedin.com/posts/md-mubarak_dataanalytics-hranalytics-dashboarddesign"
          h3="HR Vision"
          p="Workforce Data Insights"
        />
      </div>
    </section>
  );
}

export default Projects;
