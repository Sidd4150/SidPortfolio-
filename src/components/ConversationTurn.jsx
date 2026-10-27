export default function ConversationTurn({ question, label }) {
  return <div className="conversation-turn">
    <div className="conversation-question"><span>You</span><p>{question}</p></div>
    <div className="conversation-author">
      <div className="response-avatar" aria-hidden="true">s<span>.</span></div>
      <div><span className="response-name">Sid Shakya</span>{label && <span className="response-label">{label}</span>}</div>
    </div>
  </div>;
}
