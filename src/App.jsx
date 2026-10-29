import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Check, Copy, Menu, X } from 'lucide-react';
import ChatIntro from './components/ChatIntro';
import ConversationTurn from './components/ConversationTurn';
import PortfolioChat from './components/PortfolioChat';
import { introPrompt } from './data/chatData';
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

function SectionHeading({ title, children }) {
  return <div className="section-heading"><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}

export default function App() {
  const [entered, setEntered] = useState(() => Boolean(window.location.hash));
  const [openingMessage, setOpeningMessage] = useState(introPrompt);
  const shouldFocusPortfolio = useRef(false);
  const enterPortfolio = (message = introPrompt) => {
    setOpeningMessage(message);
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
      <PortfolioChat active={entered} sections={[
<section id="top" className="hero container" aria-labelledby="hero-title">
        <ConversationTurn question={openingMessage} label="A quick introduction" />
        <h1 id="hero-title" className="hero-title" tabIndex={-1}>Hey, I’m Sid<span>.</span></h1>
        <div className="hero-chat-introduction">
          <p>I’m a software engineer in San Francisco. I build backend systems, full-stack apps, and tools for the things I’m into.</p>
          <p>Right now, I’m building marketplace software at <a href="#experience">Himal Design</a> and <a href={featured.demo} target="_blank" rel="noopener noreferrer">ALFV Collections</a>, a collection tracker for fellow action figure collectors.</p>
          <p>Here’s a look at my projects, experience, and a little about me.</p>
        </div>
        <div className="hero-footer">
          <div className="hero-socials"><a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="icon" /> GitHub <ArrowUpRight size={13} /></a><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="icon" /> LinkedIn <ArrowUpRight size={13} /></a></div>
          <a className="hero-scroll" href="#work"><span>Scroll for the work</span><ArrowDown size={15} /></a>
        </div>
      </section>,

      <section id="work" className="section container">
        <ConversationTurn question="What have you built?" label="Projects & open source" />
        <SectionHeading number="01" label="Selected work" title="Selected projects.">I collect figures and play One Piece TCG, so a couple of these started as tools I wanted to use myself.</SectionHeading>
        <article className="featured-project">
          <div className="featured-visual" aria-label="ALFV Collections project metrics">
            <img className="featured-background" src={`${import.meta.env.BASE_URL}${featured.image}`} alt="" loading="lazy" />
            <div className="visual-top"><span className="mini-brand">A<span>/</span>V</span><span className="live-badge"><span className="status-dot" /> In production</span></div>
            <div className="vault-title"><span>Action Legends Figure Vault</span><h3>My collection.<br />And 50+ others.</h3><p>Collection tracking & recent sale prices</p></div>
            <div className="metrics"><div><strong>50+</strong><span>registered collectors</span></div><div><strong>500+</strong><span>collectibles tracked</span></div><div><strong>10k+</strong><span>sales evaluated</span></div></div>
          </div>
          <div className="featured-copy"><p className="eyebrow">A project I use</p><h3>{featured.title}</h3><p>I built this to keep track of action figures: what’s in the collection, what’s on the wishlist, and what things are selling for.</p><p className="project-detail">The pricing uses 10,000+ scraped sales, with more weight on recent sales and less on unusually high or low prices.</p><div className="tags">{featured.tech.map(t => <span key={t}>{t}</span>)}</div><ProjectLinks project={featured} /></div>
        </article>
        <div className="project-grid">{projects.slice(1).map((project) => <article className={`project-card project-${project.id}`} key={project.id}>
          {project.image ? <div className="project-image"><img src={`${import.meta.env.BASE_URL}${project.image}`} alt={`${project.title} application interface`} loading="lazy" /></div> : <div className="project-type-visual" aria-hidden="true"><span>{project.id === 'opensupplyhub' ? '{ open source }' : '> search_index.go'}</span><span>{project.id === 'opensupplyhub' ? 'React · error handling · tests' : 'Go · SQLite · goroutines'}</span></div>}
          <div className="project-body"><div className="project-meta"><span>{project.tag}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tags">{project.tech.slice(0, 4).map(t => <span key={t}>{t}</span>)}</div><details><summary>Engineering details</summary><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></details><ProjectLinks project={project} /></div>
        </article>)}</div>
        <a className="text-link all-work" href={personalInfo.github} target="_blank" rel="noopener noreferrer">Other projects on GitHub <ArrowUpRight size={17} /></a>
      </section>,

      <section id="experience" className="section container">
        <ConversationTurn question="Where have you worked?" label="Experience" />
        <SectionHeading number="02" label="Experience" title="Where I’ve worked.">Most of my work has been on APIs, data, and the tools people use around them.</SectionHeading>
        <div className="timeline">{experience.map((job, index) => <article className="experience-row" key={job.company}><div className="experience-date"><span className={index === 0 ? 'timeline-dot current' : 'timeline-dot'} />{job.period}<span>{job.location}</span></div><div className={`experience-content${job.presentation ? ' has-presentation' : ''}`}><div className="job-heading"><div><h3>{job.company}</h3><p>{job.role}</p></div><span className="job-type">{job.type}</span></div><ul>{job.highlights.map(item => <li key={item}>{item}</li>)}</ul><div className="tags">{job.tech.map(t => <span key={t}>{t}</span>)}</div>{job.presentation && <a className="experience-presentation" href={`${import.meta.env.BASE_URL}${job.presentation}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${job.company} final presentation (PDF, opens in a new tab)`}>
          <img className="presentation-preview" src={`${import.meta.env.BASE_URL}${job.presentationPreview}`} alt={`${job.company} final presentation title slide`} loading="lazy" />
          <div className="presentation-heading"><span>Final presentation</span><span className="presentation-action">View PDF <ArrowUpRight size={14} /></span></div>
        </a>}</div></article>)}</div>
      </section>,

      <section id="about" className="section container">
        <ConversationTurn question="Tell me a little more about yourself." label="About me & my toolkit" />
        <SectionHeading number="03" label="A little about me" title="A bit about me.">I studied computer science at the University of San Francisco. Here’s a bit more about me.</SectionHeading>
        <div className="about-grid"><div className="about-copy"><h3>A collector who writes code.</h3><p>{personalInfo.bio}</p><p>Outside of coding, I’m usually interested in action figures or trading card games. ALFV and the One Piece deck builder came out of those interests.</p><div className="education"><span className="eyebrow">Education</span><h4>{education.institution}</h4><p>{education.degree}</p><span>{education.graduation} · GPA {education.gpa}</span></div></div><div className="skills-list">{technicalSkills.map(group => <div className="skill-group" key={group.category}><h3>{group.category}</h3><p>{group.skills.join(' · ')}</p></div>)}</div></div>
      </section>,

      <section id="contact" className="contact-section container"><ConversationTurn question="How can I get in touch?" label="Let’s talk" /><p className="eyebrow"><span className="status-dot" /> Let’s connect</p><h2>Say hello<span>.</span></h2><div className="contact-bottom"><p>Looking for a software engineer?<br />I’d be happy to talk.</p><div className="email-actions"><a href={`mailto:${personalInfo.email}`}>{personalInfo.email} <ArrowUpRight size={23} /></a><button type="button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied' ? <Check size={18} /> : <Copy size={18} />}</button></div></div><p className="copy-status" role="status">{copyStatus}</p></section>,
      ]} />
    </main>
    <footer className="container footer"><span>© {new Date().getFullYear()} {personalInfo.name}</span><span>San Francisco, CA</span><a href="#top">Back to top <ArrowRight size={14} className="back-arrow" /></a></footer>
    </div>
  </>;
}
