import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: '"pfournel@orange.fr"',
    href: 'mailto:pfournel@orange.fr',
  },
  {
    social: 'github',
    link: '"ElPoyo266"',
    href: 'https://github.com/ElPoyo266',
  },
  {
    social: 'linkedin',
    link: '"Paul Fournel"',
    href: 'https://www.linkedin.com/in/paul-fournel-21a60a2a2/',
  },
  {
    social: 'discord',
    link: '"elpoyo"',
    href: 'https://discord.com/users/elpoyo',
  },
  {
    social: 'telegram',
    link: '"paulfournel"',
    href: 'https://t.me/paulfournel',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.keywordBlue}>public</span>{' '}
        <span className={styles.keywordBlue}>static</span>{' '}
        <span className={styles.keywordGreen}>void</span>{' '}
        <span className={styles.keywordYellow}>contact</span> () &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;<span className={styles.keywordBlue}>string</span> <span className={styles.keywordYellow}>{item.social}</span> ={' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
