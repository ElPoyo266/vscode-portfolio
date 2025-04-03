import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/dart_icon.svg" filename="home.dart" path="/" />
      <Tab icon="/md_icon.svg" filename="about.md" path="/about" />
      <Tab icon="/java_icon.svg" filename="contact.java" path="/contact" />
      <Tab icon="/csharp_icon.svg" filename="projects.cs" path="/projects" />
    </div>
  );
};

export default Tabsbar;
