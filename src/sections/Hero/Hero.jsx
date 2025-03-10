import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile_1.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf'
import { useTheme } from '../../common/ThemeContext'; 

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
  <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero}
          src={heroImg} 
          alt="Profile picture of Mohamed Mubarak" 
        />
        <img 
          className={styles.colorModeContainer}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>Mohamed
            <br />
            Mubarak
        </h1>
        <h2>Aspiring Data Analyst</h2>
        <span>
            <a href="https://x.com/mubarakbaw?t=F82_-YazR9RJQKnXZQiLvw&s=09" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/md-mubarak" target="_blank">
            <img src={linkedinIcon} alt="Linedin icon" />
            </a>
        </span>
        <p className={styles.description}>
            With a passion for analyzing 
            data and extracting insights
            to drive businesss decisions.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
    </div>
  </section>
  );
}

export default Hero;
