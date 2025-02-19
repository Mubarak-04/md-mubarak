import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="BI & Reporting" />
        <SkillList src={checkMarkIcon} skill="Cloud Platforms" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Data Analysis" />
        <SkillList src={checkMarkIcon} skill="Power BI" />
        <SkillList src={checkMarkIcon} skill="Tableau" />
        <SkillList src={checkMarkIcon} skill="Problem Solving" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ETL" />
        <SkillList src={checkMarkIcon} skill="Excel" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Statistics" />
        <SkillList src={checkMarkIcon} skill="Data Communication" />
      </div>
    </section>
  );
}

export default Skills;