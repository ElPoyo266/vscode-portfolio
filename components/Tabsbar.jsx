import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/dart_icon.svg" filename="home.dart" path="/" />
      <Tab icon="/csharp_icon.svg" filename="about.cs" path="/about" />
      <Tab icon="/java_icon.svg" filename="contact.java" path="/contact" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
