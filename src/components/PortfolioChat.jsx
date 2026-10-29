import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react';
import { personalInfo, projects, experience, education, technicalSkills } from '../data/portfolioData';
import ConversationTurn from './ConversationTurn';

function getReply(question) {
  const text = question.toLowerCase();
  if (/contact|email|reach|hire|opportunit/.test(text)) return {
    text: `You can reach me at ${personalInfo.email}. I’m open to software engineering opportunities and collaborations.`,
    links: [{ label: 'Email Sid', href: `mailto:${personalInfo.email}` }, { label: 'LinkedIn', href: personalInfo.linkedin }],
  };
  if (/educat|univers|degree|school|gpa/.test(text)) return {
    text: `${education.degree} at ${education.institution}, ${education.graduation}. GPA: ${education.gpa}.`,
    links: [{ label: 'More about me', href: '#about' }],
  };
  const project = projects.find(item => text.includes(item.id.split('-')[0]) || text.includes(item.title.toLowerCase()) || (text.includes('rent') && item.id === 'sf-rent-predictor') || (text.includes('one piece') && item.id === 'optcg-log') || (text.includes('search engine') && item.id === 'go-search-engine'));
  if (project) return { text: project.summary, links: [{ label: 'Project details', href: '#work' }, ...(project.demo ? [{ label: 'Visit site', href: project.demo }] : []), { label: 'Source', href: project.github }] };
  if (/experien|work(?:ed|ing)?|career|himal|spotdrop|dreamable|job/.test(text) && !/project/.test(text)) return {
    text: `I’m a ${experience[0].role} at ${experience[0].company}, building marketplace operations tools. Previously, I worked at SpotDrop on geospatial event pipelines and at Dreamable on FastAPI services and AI workflows.`,
    links: [{ label: 'Read my experience', href: '#experience' }],
  };
  if (/skill|stack|tech|language|python|react|typescript|backend/.test(text)) return {
    text: `My toolkit includes ${technicalSkills[0].skills.join(', ')}, React and Next.js on the frontend, and FastAPI, Node.js, and PostgreSQL on the backend.`,
    links: [{ label: 'Full toolkit', href: '#about' }, { label: 'See it in practice', href: '#work' }],
  };
  if (/project|built|build|portfolio/.test(text)) return {
    text: 'A few things I’ve built: ALFV Collections for action figure collectors, an SF rent and ROI predictor, a One Piece TCG deck builder, and a search engine in Go. I’ve also contributed to OpenSupplyHub.',
    links: [{ label: 'Explore the projects', href: '#work' }, { label: 'GitHub', href: personalInfo.github }],
  };
  if (/about|yourself|who|sid|interest/.test(text)) return {
    text: 'I’m Sid, a software engineer in San Francisco. I work on backend systems and full-stack apps. Outside of work, I’m into action figures and trading card games, which have inspired a few of my projects.',
    links: [{ label: 'More about me', href: '#about' }],
  };
  return { text: 'I can point you to my projects, experience, skills, education, or contact details. For anything else, send me an email and we can talk.', links: [{ label: 'Projects', href: '#work' }, { label: 'Experience', href: '#experience' }, { label: 'Email Sid', href: `mailto:${personalInfo.email}` }] };
}

const sectionIds = ['top', 'work', 'experience', 'about', 'contact'];
const nextQuestions = ['', 'What have you built?', 'Where have you worked?', 'Tell me more about yourself.', 'How can I get in touch?'];

export default function PortfolioChat({ active, sections }) {
  const [message, setMessage] = useState('');
  const [thread, setThread] = useState(() => {
    const initialIndex = Math.max(0, sectionIds.indexOf(window.location.hash.slice(1)));
    return Array.from({ length: initialIndex + 1 }, (_, sectionIndex) => ({ id: `section-${sectionIndex}`, sectionIndex }));
  });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(null);
  const timer = useRef(null);
  const copyTimer = useRef(null);
  const nextId = useRef(0);
  const pendingScroll = useRef(null);
  const responseEnd = useRef(null);
  const scrollGesture = useRef({ lastWheel: 0, revealedAt: 0, waiting: false });
  const nextSection = thread.filter(item => item.sectionIndex !== undefined).length;
  const hasNext = nextSection < sections.length;
  useEffect(() => () => { clearTimeout(timer.current); clearTimeout(copyTimer.current); }, []);
  useEffect(() => {
    if (!active || !pendingScroll.current) return;
    const target = pendingScroll.current;
    pendingScroll.current = null;
    const frame = requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [thread, active]);
  const advance = useCallback(() => {
    if (!hasNext || sending) return;
    pendingScroll.current = sectionIds[nextSection];
    setThread(current => current.some(item => item.sectionIndex === nextSection) ? current : [...current, { id: `section-${nextSection}`, sectionIndex: nextSection }]);
  }, [hasNext, nextSection, sending]);
  useEffect(() => {
    if (!active || !hasNext || sending) return;
    let touchY = null;
    const atResponseEnd = () => {
      const dock = document.querySelector('.chat-dock');
      const visibleBottom = dock?.getBoundingClientRect().top ?? window.innerHeight;
      return responseEnd.current?.getBoundingClientRect().bottom <= visibleBottom + 24;
    };
    const revealOnScroll = () => {
      const gesture = scrollGesture.current;
      if (gesture.waiting || performance.now() - gesture.revealedAt < 900 || !atResponseEnd()) return;
      gesture.waiting = true;
      gesture.revealedAt = performance.now();
      advance();
    };
    const handleWheel = event => {
      if (event.ctrlKey || event.deltaY <= 0 || Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.target.closest?.('.chat-dock, input, textarea, select')) return;
      const now = performance.now();
      // Require a fresh gesture after a reveal so trackpad momentum cannot skip sections.
      if (now - scrollGesture.current.lastWheel > 180) scrollGesture.current.waiting = false;
      scrollGesture.current.lastWheel = now;
      revealOnScroll();
    };
    const handleTouchStart = event => {
      touchY = event.touches.length === 1 ? event.touches[0].clientY : null;
      scrollGesture.current.waiting = false;
    };
    const handleTouchMove = event => {
      if (touchY === null || event.touches.length !== 1 || event.target.closest?.('.chat-dock, input, textarea, select')) return;
      if (touchY - event.touches[0].clientY > 45) revealOnScroll();
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [active, advance, hasNext, sending]);
  useEffect(() => {
    if (!active) return;
    const handleEnter = (event) => {
      const target = event.target;
      if (event.key !== 'Enter' || event.isComposing || event.repeat || target.closest('input, textarea, select, button, a, summary, [contenteditable="true"]')) return;
      if (hasNext) { event.preventDefault(); advance(); }
    };
    window.addEventListener('keydown', handleEnter);
    return () => window.removeEventListener('keydown', handleEnter);
  }, [active, advance, hasNext]);
  useEffect(() => {
    const revealDestination = () => {
      const index = sectionIds.indexOf(window.location.hash.slice(1));
      if (index < 0) return;
      pendingScroll.current = sectionIds[index];
      setThread(current => {
        const missing = sectionIds.slice(0, index + 1).flatMap((_, sectionIndex) => current.some(item => item.sectionIndex === sectionIndex) ? [] : [{ id: `section-${sectionIndex}`, sectionIndex }]);
        return missing.length ? [...current, ...missing] : current;
      });
    };
    window.addEventListener('hashchange', revealDestination);
    return () => window.removeEventListener('hashchange', revealDestination);
  }, []);
  const send = (question) => {
    const value = question.trim();
    if (sending) return;
    if (!value) { advance(); return; }
    const id = `message-${nextId.current++}`;
    setMessage('');
    setSending(true);
    pendingScroll.current = id;
    setThread(current => [...current, { id, question: value, reply: null }]);
    timer.current = setTimeout(() => {
      setThread(current => current.map(item => item.id === id ? { ...item, reply: getReply(value) } : item));
      setSending(false);
    }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 450);
  };
  const copyReply = async (item) => {
    try {
      await navigator.clipboard.writeText(item.reply.text);
      setCopied(item.id);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(null), 2000);
    } catch { setCopied(null); }
  };
  return <>
    {thread.map(item => item.sectionIndex !== undefined ? <Fragment key={item.id}>{sections[item.sectionIndex]}</Fragment> : <article className="live-chat-message container" id={item.id} key={item.id}>
      <ConversationTurn question={item.question} label="" />
      <div className="live-chat-answer" role="status">{item.reply ? <>
        <p>{item.reply.text}</p><div className="reply-links">{item.reply.links.map(link => <a key={link.label} href={link.href} {...(link.href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{link.label}<ArrowUpRight size={14} /></a>)}</div>
        <button className="copy-reply" onClick={() => copyReply(item)} aria-label={copied === item.id ? 'Reply copied' : 'Copy reply'}>{copied === item.id ? <Check size={14} /> : <Copy size={14} />}</button>
      </> : <><span className="sr-only">Finding that in my portfolio…</span><span className="intro-loading" aria-hidden="true"><i /><i /><i /></span></>}</div>
    </article>)}
    <div ref={responseEnd} aria-hidden="true" />
    <div className="chat-dock">
      <div className="chat-dock-inner">
        <div className="chat-suggestions" aria-label="Suggested questions">{hasNext ? <button className="next-message-button" disabled={sending} onClick={advance}>{nextQuestions[nextSection]} <span>Enter ↵</span></button> : ['What have you built?', 'Where have you worked?', 'How can I contact you?'].map(question => <button key={question} disabled={sending} onClick={() => send(question)}>{question}</button>)}</div>
        <form className="chat-dock-form" onSubmit={event => { event.preventDefault(); send(message); }}>
          <label className="sr-only" htmlFor="followup-message">Ask about Sid’s portfolio or press Enter to continue</label>
          <input id="followup-message" value={message} onChange={event => setMessage(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && (event.nativeEvent.isComposing || event.repeat)) event.preventDefault(); }} placeholder={hasNext ? 'Press Enter for the next message, or ask a question…' : 'Ask about my projects, experience, or skills…'} autoComplete="off" maxLength={500} />
          <button type="submit" aria-label={message.trim() || !hasNext ? 'Send follow-up message' : 'Show next message'} disabled={(!message.trim() && !hasNext) || sending}><ArrowUp size={20} /></button>
        </form>
        <p role="status">{hasNext ? `Scroll down or press Enter to continue · ${nextSection} of ${sections.length} responses` : <>You’ve reached the end. Ask a question or <a href={`mailto:${personalInfo.email}`}>email me</a>.</>}</p>
      </div>
    </div>
  </>;
}
