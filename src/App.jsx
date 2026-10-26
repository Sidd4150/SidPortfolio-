import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Check, Copy, MapPin, Menu, X } from 'lucide-react';
import ChatIntro from './components/ChatIntro';
import GithubIcon from './components/GithubIcon';
import LinkedinIcon from './components/LinkedinIcon';
import { personalInfo, education, experience, projects, technicalSkills } from './data/portfolioData';

const navigation = [['work', 'Work'], ['experience', 'Experience'], ['about', 'About'], ['contact', 'Contact']];

function ProjectLinks({ project }) {
  return <div className="project-links">
    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Visit site <ArrowUpRight size={16} /></a>}
    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="icon" /> {project.id === 'opensupplyhub' ? 'Organization' : 'Source code'} <ArrowUpRight size={14} /></a>}
  </div>;
}

function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><div><p className="eyebrow">{number} / {label}</p><h2>{title}</h2></div>{children && <p className="section-intro">{children}</p>}</div>;
}

export default function App() {
  const [entered, setEntered] = useState(() => Boolean(window.location.hash));
  const shouldFocusPortfolio = useRef(false);
  const enterPortfolio = () => {
    shouldFocusPortfolio.current = true;
    setEntered(true);
  };
  useEffect(() => {
    if (entered && shouldFocusPortfolio.current) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('hero-title')?.focus({ preventScroll: true });
      shouldFocusPortfolio.current = false;
    }
  }, [entered]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    const updateHeader = () => {
      const visible = window.scrollY > 120;
      setHeaderVisible(visible);
      if (!visible) setMenuOpen(false);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);
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
    {!entered && <ChatIntro onEnter={enterPortfolio} />}
    <div className="portfolio-page" hidden={!entered}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`site-header${headerVisible ? ' is-visible' : ''}`}>
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="Sid Shakya home">sid<span>.</span></a>
        <nav id="mobile-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          {navigation.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="header-contact" href={`mailto:${personalInfo.email}`}>Let’s talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
    <main id="main">
      <section id="top" className="hero container" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span className="hero-role">Software engineer</span>
          <span className="hero-location"><MapPin size={13} /> San Francisco, CA</span>
          <a href={`mailto:${personalInfo.email}`}>Say hello <ArrowUpRight size={15} /></a>
        </div>
        <h1 id="hero-title" className="hero-title" tabIndex={-1}><span>Sid</span> <span>Shakya<span className="name-period">.</span></span></h1>
        <div className="hero-introduction">
          <div className="hero-statement">
            <p className="hero-lead">I build software for work.<br />And for the things I’m into.</p>
            <p className="hero-description">Backend systems, full-stack apps, and the occasional trading card tool. Currently building marketplace software at Himal Design and a collection tracker for fellow action figure collectors.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Take a look at my work <ArrowDown size={17} /></a><a className="hero-email-link" href={`mailto:${personalInfo.email}`}>Get in touch <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="hero-current">
            <span className="hero-current-label">Currently building</span>
            <a className="hero-current-project" href={featured.demo} target="_blank" rel="noopener noreferrer">
              <div className="hero-project-preview"><img src={`${import.meta.env.BASE_URL}${featured.image}`} alt="ALFV Collections catalog" fetchPriority="high" /><span className="hero-project-arrow"><ArrowUpRight size={21} /></span></div>
              <div className="hero-project-caption"><span>ALFV Collections</span><span>Side project, real collectors.</span></div>
            </a>
          </div>
        </div>
        <div className="hero-footer">
          <div className="hero-socials"><a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="icon" /> GitHub <ArrowUpRight size={13} /></a><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="icon" /> LinkedIn <ArrowUpRight size={13} /></a></div>
          <a className="hero-scroll" href="#work"><span>Scroll for the work</span><ArrowDown size={15} /></a>
        </div>
      </section>

      <section id="work" className="section container">
        <SectionHeading number="01" label="Selected work" title="Selected projects.">From a live collector platform to search systems. A selection of products and engineering problems I’ve worked on.</SectionHeading>
        <article className="featured-project">
          <div className="featured-visual" aria-label="ALFV Collections project metrics">
            <img className="featured-background" src={`${import.meta.env.BASE_URL}${featured.image}`} alt="" loading="lazy" />
            <div className="visual-top"><span className="mini-brand">A<span>/</span>V</span><span className="live-badge"><span className="status-dot" /> In production</span></div>
            <div className="vault-title"><span>THE COLLECTOR’S TOOLKIT</span><h3>Your collection.<br />A clearer picture.</h3><p>Action Legends Figure Vault</p></div>
            <div className="metrics"><div><strong>50+</strong><span>registered collectors</span></div><div><strong>500+</strong><span>collectibles tracked</span></div><div><strong>10k+</strong><span>sales evaluated</span></div></div>
          </div>
          <div className="featured-copy"><p className="eyebrow">Featured project / Full stack</p><h3>{featured.title}</h3><p>A live platform for collectors to manage their vaults, organize wishlists, and understand what their collections are worth.</p><p className="project-detail">Built a market valuation engine that weighs recency and penalizes outliers across 10,000+ scraped sales.</p><div className="tags">{featured.tech.map(t => <span key={t}>{t}</span>)}</div><ProjectLinks project={featured} /></div>
        </article>
        <div className="project-grid">{projects.slice(1).map((project, index) => <article className={`project-card project-${project.id}`} key={project.id}>
          {project.image ? <div className="project-image"><img src={`${import.meta.env.BASE_URL}${project.image}`} alt={`${project.title} application interface`} loading="lazy" /></div> : <div className="project-type-visual" aria-hidden="true"><span>{project.id === 'opensupplyhub' ? '{ open source }' : '> search_index.go'}</span><span>{project.id === 'opensupplyhub' ? 'Better feedback. Fewer dead ends.' : 'Tokenize. Index. Retrieve.'}</span></div>}
          <div className="project-body"><div className="project-meta"><span>{project.tag}</span><span>0{index + 2}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.tech.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div><details><summary>Engineering details</summary><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></details><ProjectLinks project={project} /></div>
        </article>)}</div>
        <a className="text-link all-work" href={personalInfo.github} target="_blank" rel="noopener noreferrer">More experiments on GitHub <ArrowUpRight size={17} /></a>
      </section>

      <section id="experience" className="section container">
        <SectionHeading number="02" label="Experience" title="Where I’ve worked.">Building with teams, shipping for real users, and making the systems behind the product work better.</SectionHeading>
        <div className="timeline">{experience.map((job, index) => <article className="experience-row" key={job.company}><div className="experience-date"><span className={index === 0 ? 'timeline-dot current' : 'timeline-dot'} />{job.period}<span>{job.location}</span></div><div className="experience-content"><div className="job-heading"><div><h3>{job.company}</h3><p>{job.role}</p></div><span className="job-type">{job.type}</span></div><ul>{job.highlights.map(item => <li key={item}>{item}</li>)}</ul><div className="tags">{job.tech.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div>
      </section>

      <section id="about" className="section container">
        <SectionHeading number="03" label="A little about me" title="A bit about me.">I’m drawn to the work behind the interface: how data moves, how services scale, and how a good tool makes someone’s day easier.</SectionHeading>
        <div className="about-grid"><div className="about-copy"><h3>Software, systems,<br />and a few side projects.</h3><p>{personalInfo.bio}</p><p>My projects also reflect what I enjoy outside of work, from collectible figures to trading card games. Building tools for those communities keeps the work personal.</p><div className="education"><span className="eyebrow">Education</span><h4>{education.institution}</h4><p>{education.degree}</p><span>{education.graduation} · GPA {education.gpa}</span></div></div><div className="skills-list">{technicalSkills.map(group => <div className="skill-group" key={group.category}><h3>{group.category}</h3><p>{group.skills.join(' · ')}</p></div>)}</div></div>
      </section>

      <section id="contact" className="contact-section container"><p className="eyebrow"><span className="status-dot" /> Let’s connect</p><h2>Say hello<span>.</span></h2><div className="contact-bottom"><p>Open to software engineering opportunities<br />and interesting things to build together.</p><div className="email-actions"><a href={`mailto:${personalInfo.email}`}>{personalInfo.email} <ArrowUpRight size={23} /></a><button type="button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied' ? <Check size={18} /> : <Copy size={18} />}</button></div></div><p className="copy-status" role="status">{copyStatus}</p></section>
    </main>
    <footer className="container footer"><span>© {new Date().getFullYear()} {personalInfo.name}</span><span>Made with care in San Francisco.</span><a href="#top">Back to top <ArrowRight size={14} className="back-arrow" /></a></footer>
    </div>
  </>;
}
