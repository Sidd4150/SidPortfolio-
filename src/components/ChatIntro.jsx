import { useEffect, useRef, useState } from 'react';
import { ArrowUp, CornerDownLeft } from 'lucide-react';

import { introPrompt as prompt } from '../data/chatData';

export default function ChatIntro({ onEnter }) {
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const edited = useRef(false);
  const submitted = useRef(false);
  const revealTimer = useRef(null);
  const input = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let character = 0;
    const timer = window.setInterval(() => {
      if (edited.current || submitted.current) {
        clearInterval(timer);
        return;
      }
      character = reducedMotion ? prompt.length : character + 1;
      setMessage(prompt.slice(0, character));
      if (character >= prompt.length) clearInterval(timer);
    }, reducedMotion ? 0 : 48);
    input.current?.focus({ preventScroll: true });
    return () => {
      clearInterval(timer);
      clearTimeout(revealTimer.current);
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (submitted.current) return;
    submitted.current = true;
    setMessage(current => current.trim() || prompt);
    setSending(true);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    revealTimer.current = setTimeout(() => onEnter(message.trim() || prompt), reducedMotion ? 0 : 850);
  };

  return <section className={`chat-intro${sending ? ' is-sending' : ''}`} aria-label="Portfolio introduction">
    <div className="intro-topbar"><a className="intro-signature" href="#top" onClick={event => { event.preventDefault(); onEnter(); }}>sid<span>.</span></a><span>A portfolio by Sid Shakya</span><button className="intro-skip" onClick={() => onEnter()} type="button">Skip intro <CornerDownLeft size={13} /></button></div>
    <div className="intro-center">
      {!sending ? <>
        <div className="intro-avatar" aria-hidden="true">s<span>.</span></div>
        <p className="intro-kicker">Software engineer · San Francisco</p>
        <h1>Hey, I’m <span>Sid.</span></h1>
        <p className="intro-description">I write software, collect figures, and build tools for both.</p>
        <form className="intro-composer" onSubmit={sendMessage}>
          <label className="sr-only" htmlFor="intro-message">Message to open Sid’s portfolio</label>
          <input ref={input} id="intro-message" value={message} onPointerDown={() => { edited.current = true; }} onKeyDown={() => { edited.current = true; }} onBeforeInput={() => { edited.current = true; }} onChange={event => { edited.current = true; setMessage(event.target.value); }} autoComplete="off" spellCheck="false" placeholder="Show me Sid Shakya’s portfolio." />
          <div className="intro-composer-bottom"><span>Start with a hello.</span><button type="submit" className="intro-send" aria-label="Send message and open portfolio"><ArrowUp size={20} /></button></div>
        </form>
        <p className="intro-enter-hint">Press <kbd>Enter <CornerDownLeft size={11} /></kbd> to take a look</p>
      </> : <div className="intro-conversation" role="status"><div className="intro-sent-message">{message}</div><div className="intro-response"><div className="intro-avatar" aria-hidden="true">s<span>.</span></div><div><p>Here’s what I’ve been building.</p><span className="intro-loading" aria-hidden="true"><i /><i /><i /></span></div></div></div>}
    </div>
    <div className="intro-footer"><span>Sid Shakya · San Francisco</span><span>Enter to explore <CornerDownLeft size={12} /></span></div>
  </section>;
}
