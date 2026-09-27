export default function TransmutationCircle({ className = "w-[500px] h-[500px]", bgColor = "#141722" }) {
  const R = 280;
  const cx = 400;
  const cy = 400;
  const angles = [-90, -18, 54, 126, 198];

  const vertices = angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return {
      angle: a,
      x: +(cx + R * Math.cos(rad)).toFixed(1),
      y: +(cy + R * Math.sin(rad)).toFixed(1),
    };
  });

  return (
    <div className={`relative pointer-events-none select-none flex items-center justify-center ${className}`}>
      {/* Subtle Alchemy Ambient Glow Behind the Vector */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-red-600/10 via-amber-500/5 to-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Razor-Sharp Pure Vector Transmutation Circle */}
      <svg
        className="w-full h-full animate-[spin_90s_linear_infinite] text-zinc-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]"
        viewBox="0 0 800 800"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer Main Circle */}
        <circle cx={cx} cy={cy} r={R} strokeWidth="2.5" />

        {/* 5 Authentic Chords */}
        <line x1={vertices[0].x} y1={vertices[0].y} x2="326" y2="500" strokeWidth="2.2" />
        <line x1="330" y1={vertices[1].y} x2={vertices[1].x} y2={vertices[1].y} strokeWidth="2.2" />
        <line x1={vertices[2].x} y1={vertices[2].y} x2="465" y2="260" strokeWidth="2.2" />
        <line x1={vertices[4].x} y1={vertices[4].y} x2="460" y2="560" strokeWidth="2.2" />
        <line x1={vertices[3].x} y1={vertices[3].y} x2="550" y2="410" strokeWidth="2.2" />

        {/* 5 Vertex Double-Ring Seals & Perimeter Trident Satellites */}
        {angles.map((angle, idx) => {
          const v = vertices[idx];
          return (
            <g key={`vertex-${idx}`}>
              {/* Vertex Circle */}
              <g transform={`translate(${v.x}, ${v.y}) rotate(${angle + 90})`}>
                <circle cx="0" cy="0" r="30" strokeWidth="3.5" fill={bgColor} />
                <circle cx="0" cy="0" r="22" strokeWidth="1.6" fill={bgColor} />
                <line x1="-16" y1="16" x2="16" y2="-16" strokeWidth="1.6" />
                <circle cx="-7" cy="-7" r="6" strokeWidth="1.6" fill="none" />
              </g>

              {/* Two Satellite Circles with Trident/Sprout */}
              {[-8.5, 8.5].map((offset, sIdx) => {
                const sRad = ((angle + offset) * Math.PI) / 180;
                const sx = +(cx + R * Math.cos(sRad)).toFixed(1);
                const sy = +(cy + R * Math.sin(sRad)).toFixed(1);
                return (
                  <g key={`sat-${idx}-${sIdx}`} transform={`translate(${sx}, ${sy}) rotate(${angle + offset + 90})`}>
                    <circle cx="0" cy="0" r="12" strokeWidth="1.5" fill={bgColor} />
                    <line x1="0" y1="8" x2="0" y2="-8" strokeWidth="1.5" />
                    <path d="M -6,-2 Q 0,3 0,3" strokeWidth="1.4" fill="none" />
                    <path d="M 6,-2 Q 0,3 0,3" strokeWidth="1.4" fill="none" />
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* 4 Triangle Alchemical Glyphs (Air / Earth) */}
        {[
          { x: 400, y: 160 },
          { x: 326, y: 500 },
          { x: 330, y: vertices[1].y },
          { x: 620, y: vertices[1].y },
        ].map((t, i) => {
          const r = 17;
          const h = r * 0.72;
          const p1 = `${t.x},${t.y - h}`;
          const p2 = `${t.x - h * 0.95},${t.y + h * 0.55}`;
          const p3 = `${t.x + h * 0.95},${t.y + h * 0.55}`;
          const barY = t.y + h * 0.1;
          const barW = h * 0.65;
          return (
            <g key={`tri-${i}`}>
              <circle cx={t.x} cy={t.y} r={r} strokeWidth="1.6" fill={bgColor} />
              <polygon points={`${p1} ${p2} ${p3}`} strokeWidth="1.5" fill="none" />
              <line x1={t.x - barW} y1={barY} x2={t.x + barW} y2={barY} strokeWidth="1.3" />
            </g>
          );
        })}

        {/* 2 Chevron / Arrow Glyphs */}
        {[
          { x: 548, y: 600, rot: 25 },
          { x: 465, y: 260, rot: 25 },
        ].map((c, i) => (
          <g key={`chev-${i}`} transform={`translate(${c.x}, ${c.y}) rotate(${c.rot})`}>
            <circle cx="0" cy="0" r="16" strokeWidth="1.6" fill={bgColor} />
            <path d="M -8,-5 L 2,-5 L 8,0 L 2,5 L -8,5 Z" strokeWidth="1.4" fill="none" />
            <line x1="-8" y1="0" x2="8" y2="0" strokeWidth="1.2" />
          </g>
        ))}

        {/* 2 Alchemical Flask / Vessel Glyphs */}
        {[
          { x: 210, y: 350, rot: -20 },
          { x: 460, y: 560, rot: -20 },
        ].map((f, i) => (
          <g key={`flask-${i}`} transform={`translate(${f.x}, ${f.y}) rotate(${f.rot})`}>
            <circle cx="0" cy="0" r="16" strokeWidth="1.6" fill={bgColor} />
            <path d="M -5,-7 L 5,-7" strokeWidth="1.3" />
            <path d="M -5,-7 C -8,-10 -9,-5 -5,-2" strokeWidth="1.3" fill="none" />
            <path d="M 5,-7 C 8,-10 9,-5 5,-2" strokeWidth="1.3" fill="none" />
            <path d="M -5,-2 C -8,2 -7,7 0,8 C 7,7 8,2 5,-2 Z" strokeWidth="1.3" fill="none" />
            <circle cx="0" cy="2" r="2.2" strokeWidth="1" fill="none" />
          </g>
        ))}

        {/* 2 Sun Gear / Star Wheels */}
        {[
          { x: 300, y: 580 },
          { x: 550, y: 410 },
        ].map((sg, i) => (
          <g key={`gear-${i}`} transform={`translate(${sg.x}, ${sg.y})`}>
            <circle cx="0" cy="0" r="16" strokeWidth="1.6" fill={bgColor} />
            <circle cx="0" cy="0" r="4.5" strokeWidth="1.2" fill="none" />
            {Array.from({ length: 12 }).map((_, s) => {
              const sRad = (s * 30 * Math.PI) / 180;
              const x1 = +(4.5 * Math.cos(sRad)).toFixed(1);
              const y1 = +(4.5 * Math.sin(sRad)).toFixed(1);
              const x2 = +(13 * Math.cos(sRad)).toFixed(1);
              const y2 = +(13 * Math.sin(sRad)).toFixed(1);
              return <line key={`spoke-${s}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.2" />;
            })}
          </g>
        ))}

        {/* Central Sol & Luna Alchemical Seal */}
        <g transform={`translate(${cx}, ${cy})`}>
          {/* Double Concentric Rings */}
          <circle cx="0" cy="0" r="42" strokeWidth="3.8" fill={bgColor} />
          <circle cx="0" cy="0" r="33" strokeWidth="1.6" fill="none" />

          {/* 5 Leftward Radiating Sun Rays */}
          {[-120, -150, 180, 150, 120].map((deg, rIdx) => {
            const rad = (deg * Math.PI) / 180;
            const x1 = +(42 * Math.cos(rad)).toFixed(1);
            const y1 = +(42 * Math.sin(rad)).toFixed(1);
            const x2 = +(62 * Math.cos(rad)).toFixed(1);
            const y2 = +(62 * Math.sin(rad)).toFixed(1);
            return <line key={`sunray-${rIdx}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2.8" />;
          })}

          {/* Vertical Axis with T-Caps */}
          <line x1="0" y1="-58" x2="0" y2="58" strokeWidth="2.6" />
          <line x1="-5" y1="-58" x2="5" y2="-58" strokeWidth="2.2" />
          <line x1="-5" y1="58" x2="5" y2="58" strokeWidth="2.2" />

          {/* Horizontal Divider */}
          <line x1="-33" y1="0" x2="33" y2="0" strokeWidth="1.6" />

          {/* Upward Crescent Moon */}
          <path d="M -13,-3 C -7,-15 7,-15 13,-3 C 7,-10 -7,-10 -13,-3 Z" strokeWidth="1.8" fill="none" />
        </g>
      </svg>
    </div>
  );
}
