import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.markdown}>
          <p>
            I am a <strong>graduate student from IUT Lyon 1</strong>, where I earned my <em>Bachelor's degree in Computer Science</em>.  
            I have always been passionate about <strong>application development</strong>, whether for <strong>PC</strong> or <strong>mobile platforms</strong>.
          </p>

          <h2>🛠 Technical Skills</h2>
          <ul>
            <li>💻 <strong>Mobile Development</strong>: Flutter, Android Native</li>
            <li>🖥 <strong>Desktop Applications</strong>: .NET (Razor, Blazor, WinForms), C#, Qt Creator</li>
            <li>🌍 <strong>Web Development</strong>: Blazor, Flutter Web</li>
            <li>🤖 <strong>Robotics & Automation</strong>: Python, Arduino</li>
          </ul>

          <h2>📌 Experience</h2>
          <p>
            Throughout my studies, I’ve worked on <strong>personal projects, academic projects</strong>, and <strong>real-world projects</strong>  
            for clients in industries such as <strong>automotive</strong> and <strong>aerospace</strong>. These experiences allowed me to apply my  
            skills to <strong>develop innovative solutions</strong> addressing specific business needs.
          </p>

          <h2>🚀 My Passion</h2>
          <p>
            I’m always eager to <strong>learn, tackle new challenges</strong>, and grow as a developer.  
            My passion lies in creating <strong>efficient, scalable, and user-friendly applications</strong> that  
            make a difference both professionally and personally.
          </p>
          <p>
            Beyond software development, I have a strong interest in <strong>scenography, lighting design, and event technologies</strong>.  
            I enjoy working with <strong>new technologies</strong> and exploring their applications in various fields.  
            Additionally, I have a deep love for <strong>traveling</strong>, discovering new cultures, and gaining inspiration  
            from different environments around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
