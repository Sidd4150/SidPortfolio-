import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, Copy, Mail } from 'lucide-react';
import GithubIcon from './components/GithubIcon';
import TechTag from './components/TechTag';
import LinkedinIcon from './components/LinkedinIcon';
import { personalInfo, education, experience, projects, technicalSkills } from './data/portfolioData';

const navigation = [['top', 'Overview'], ['work', 'Projects'], ['experience', 'Experience'], ['about', 'About & skills'], ['contact', 'Contact']];
const getSection = () => navigation.some(([id]) => id === window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'top';

function ProjectLinks({ project }) {
  return <div className="project-links">
    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Visit site <ArrowUpRight size={16} /></a>}
    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="icon" /> {project.id === 'opensupplyhub' ? 'Organization' : 'Source code'} <ArrowUpRight size={14} /></a>}
  </div>;
}

function SectionHeading({ title, children }) {
  return <div className="section-heading"><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}

export default function App() {
  const [activeSection, setActiveSection] = useState(getSection);
  const contentRef = useRef(null);
  useEffect(() => {
    const syncSection = () => setActiveSection(getSection());
    window.addEventListener('hashchange', syncSection);
    return () => window.removeEventListener('hashchange', syncSection);
  }, []);
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [activeSection]);
  const [copyStatus, setCopyStatus] = useState('');
  const copyTimer = useRef(null);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  const copyEmail = async () => {
    clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyStatus('Email copied');
    } catch {
      setCopyStatus('Copy unavailable. Use the email link to get in touch.');
    }
    copyTimer.current = setTimeout(() => setCopyStatus(''), 3500);
  };
  const featured = projects[0];

  return <>
    <div className="portfolio-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <aside className="workspace-sidebar">
      <a className="sidebar-identity" href="#top"><span><strong>Sid Shakya</strong><small>Software engineer</small></span></a>
      <nav className="sidebar-navigation" aria-label="Portfolio sections">
        {navigation.map(([id, label]) => <a href={`#${id}`} key={id} aria-current={activeSection === id ? 'page' : undefined}>{label}</a>)}
      </nav>
      <div className="sidebar-bottom"><p>{personalInfo.location}</p><div className="sidebar-socials"><a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon className="icon" /></a><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon className="icon" /></a><a href={`mailto:${personalInfo.email}`} aria-label="Email Sid"><Mail size={17} /></a></div></div>
    </aside>
    <main id="main" className="workspace-content" ref={contentRef} tabIndex={-1}>

      <section id="top" className="hero container" hidden={activeSection !== 'top'} aria-labelledby="hero-title">
        <p className="eyebrow">Software engineer · San Francisco</p>
        <h1 id="hero-title" className="hero-title">Siddhartha<br /><em>(Sid) Shakya.</em></h1>
        <p className="hero-lead">Software engineer.</p>
        <p className="overview-description">I build full-stack applications, backend services, and integrations. A computer science graduate from the University of San Francisco, with experience turning complex workflows into useful software.</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">Explore projects <ArrowRight size={16} /></a><a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div>
        <div className="overview-tools"><span>Tools I work with</span><div className="tags">{['TypeScript', 'React', 'Python', 'PostgreSQL', 'AWS'].map(name => <TechTag key={name} name={name} />)}</div></div>
      </section>

      <section id="work" hidden={activeSection !== 'work'} className="section container">
        <SectionHeading title="Selected projects.">Applications, backend systems, and contributions to open-source software.</SectionHeading>
        <article className="featured-project"><span className="project-stamp">01 / Featured project</span>
          <div className="featured-visual" aria-label="ALFV Collections project metrics">
            <img className="featured-background" src={`${import.meta.env.BASE_URL}${featured.image}`} alt="" loading="lazy" />
            <div className="visual-top"><span className="mini-brand">A<span>/</span>V</span><span className="live-badge"><span className="status-dot" /> In production</span></div>
            <div className="vault-title"><span>Production web application</span><h3>Data into<br />a clearer picture.</h3><p>Tracking, search & market valuation</p></div>
            <div className="metrics"><div><strong>50+</strong><span>registered users</span></div><div><strong>500+</strong><span>collectibles tracked</span></div><div><strong>10k+</strong><span>sales evaluated</span></div></div>
          </div>
          <div className="featured-copy"><p className="eyebrow">Full-stack application</p><h3>{featured.title}</h3><p>A production application combining account management, search, saved items, and a market valuation engine.</p><p className="project-detail">The pricing uses 10,000+ scraped sales, with more weight on recent sales and less on unusually high or low prices.</p><div className="tags">{featured.tech.map(t => <TechTag key={t} name={t} />)}</div><ProjectLinks project={featured} /></div>
        </article>
        <div className="project-grid">{projects.slice(1).map((project, index) => <article className={`project-card project-${project.id}`} key={project.id}>
          {project.image ? <div className="project-image"><img src={`${import.meta.env.BASE_URL}${project.image}`} alt={`${project.title} application interface`} loading="lazy" /></div> : <div className="project-type-visual" aria-hidden="true"><span>{project.id === 'opensupplyhub' ? '{ open source }' : '> search_index.go'}</span><span>{project.id === 'opensupplyhub' ? 'React · error handling · tests' : 'Go · SQLite · goroutines'}</span></div>}
          <div className="project-body"><div className="project-meta"><span>{project.tag}</span><span>No. {String(index + 2).padStart(2, '0')}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.tech.slice(0, 4).map(t => <TechTag key={t} name={t} />)}</div><details><summary>Engineering details</summary><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></details><ProjectLinks project={project} /></div>
        </article>)}</div>
        <a className="text-link all-work" href={personalInfo.github} target="_blank" rel="noopener noreferrer">Other projects on GitHub <ArrowUpRight size={17} /></a>
      </section>

      <section id="experience" hidden={activeSection !== 'experience'} className="section container">
        <SectionHeading title="Experience.">Most of my work has been on APIs, data, and the tools people use around them.</SectionHeading>
        <div className="timeline">{experience.map((job, index) => <article className="experience-row" key={job.company}><div className="experience-date"><span className={index === 0 ? 'timeline-dot current' : 'timeline-dot'} />{job.period}<span>{job.location}</span></div><div className={`experience-content${job.presentation ? ' has-presentation' : ''}`}><div className="job-heading"><div><h3>{job.company}</h3><p>{job.role}</p></div><span className="job-type">{job.type}</span></div><ul>{job.highlights.map(item => <li key={item}>{item}</li>)}</ul><div className="tags">{job.tech.map(t => <TechTag key={t} name={t} />)}</div>{job.presentation && <a className="experience-presentation" href={`${import.meta.env.BASE_URL}${job.presentation}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${job.company} final presentation (PDF, opens in a new tab)`}>
          <img className="presentation-preview" src={`${import.meta.env.BASE_URL}${job.presentationPreview}`} alt={`${job.company} final presentation title slide`} loading="lazy" />
          <div className="presentation-heading"><span>Final presentation</span><span className="presentation-action">View PDF <ArrowUpRight size={14} /></span></div>
        </a>}</div></article>)}</div>
      </section>

      <section id="about" hidden={activeSection !== 'about'} className="section container">
        <SectionHeading title="About & skills.">I studied computer science at the University of San Francisco. Here’s a bit more about me.</SectionHeading>
        <div className="about-grid"><div className="about-copy"><h3>Building useful software.</h3><p>{personalInfo.bio}</p><p>My experience includes Python services, TypeScript applications, PostgreSQL data models, and integrations between external platforms.</p><div className="education"><span className="eyebrow">Education</span><h4>{education.institution}</h4><p>{education.degree}</p><span>{education.graduation} · GPA {education.gpa}</span></div></div><div className="skills-list">{technicalSkills.map(group => <div className="skill-group" key={group.category}><h3>{group.category}</h3><div className="skill-tools">{group.skills.map(skill => <TechTag key={skill} name={skill} />)}</div></div>)}</div></div>
      </section>

      <section id="contact" hidden={activeSection !== 'contact'} className="contact-section container"><p className="eyebrow"><span className="status-dot" /> Let’s connect</p><h2>Get in touch.</h2><div className="contact-bottom"><p>Looking for a software engineer?<br />I’d be happy to talk.</p><div className="email-actions"><a href={`mailto:${personalInfo.email}`}>{personalInfo.email} <ArrowUpRight size={23} /></a><button type="button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied' ? <Check size={18} /> : <Copy size={18} />}</button></div></div><p className="copy-status" role="status">{copyStatus}</p></section>
    <footer className="container footer"><span>© {new Date().getFullYear()} {personalInfo.name}</span><span>San Francisco, CA</span><a href="#top">Back to top <ArrowRight size={14} className="back-arrow" /></a></footer>
    </main>
    </div>
  </>;
}
