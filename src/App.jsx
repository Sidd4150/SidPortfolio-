import { useState } from "react";
import { ArrowUpRight, Mail, Check, Terminal, Layers, Database, Cpu, ExternalLink, GraduationCap, ChevronDown } from "lucide-react";
import GithubIcon from "./components/GithubIcon";
import LinkedinIcon from "./components/LinkedinIcon";
import TransmutationCircle from "./components/TransmutationCircle";
import { personalInfo, education, experience, projects, technicalSkills } from "./data/portfolioData";

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const getCustomProjectGraphic = (id) => {
    if (id === "alfv-collections") {
      return (
        <div className="w-full h-52 bg-[#141722]/80 flex flex-col items-center justify-center p-6 relative overflow-hidden border-b border-zinc-800/80">
          <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 mb-2 relative z-10 group-hover:scale-110 transition-transform">
            <Layers className="w-6 h-6" />
          </div>
          <span className="font-mono text-sm text-zinc-100 font-semibold tracking-wider relative z-10">
            ACTION LEGENDS FIGURE VAULT
          </span>
          <span className="text-xs text-zinc-400 font-mono relative z-10 mt-1">
            500+ Collectibles · 10,000+ Sales Evaluated · Live Platform
          </span>
        </div>
      );
    }
    if (id === "opensupplyhub") {
      return (
        <div className="w-full h-52 bg-[#141722]/80 flex flex-col items-center justify-center p-6 relative overflow-hidden border-b border-zinc-800/80">
          <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 mb-2 relative z-10 group-hover:scale-110 transition-transform">
            <Cpu className="w-6 h-6" />
          </div>
          <span className="font-mono text-sm text-zinc-100 font-semibold tracking-wider relative z-10">
            OPEN SUPPLY HUB
          </span>
          <span className="text-xs text-zinc-400 font-mono relative z-10 mt-1">
            Global Supply Chain Transparency · Open Source
          </span>
        </div>
      );
    }
    return (
      <div className="w-full h-52 bg-[#141722]/80 flex flex-col items-center justify-center p-6 relative overflow-hidden border-b border-zinc-800/80">
        <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 mb-2 relative z-10 group-hover:scale-110 transition-transform">
          <Terminal className="w-6 h-6" />
        </div>
        <span className="font-mono text-sm text-zinc-100 font-semibold tracking-wider relative z-10">
          CONCURRENT INVERTED INDEX
        </span>
        <span className="text-xs text-zinc-400 font-mono relative z-10 mt-1">
          Go Search Engine · SQLite Persistence
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#141722] text-zinc-200 antialiased selection:bg-red-600/30 selection:text-red-200 relative overflow-x-hidden">
      <div className="relative z-10">
        {/* =========================================
            HERO / INTRO SECTION (Circle Stays Here at Top)
           ========================================= */}
        <section className="min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
          {/* Subtle Ambient Alchemical Light Glows in Hero */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-red-950/25 blur-[160px] rounded-full pointer-events-none z-0" />
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-950/15 blur-[160px] rounded-full pointer-events-none z-0" />

          {/* Transmutation Circle rotating independently in the background of the intro */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-45 sm:opacity-60 animate-alchemy-pulse">
            <TransmutationCircle
              bgColor="#141722"
              className="w-[540px] h-[540px] sm:w-[760px] sm:h-[760px] lg:w-[920px] lg:h-[920px]"
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10 my-auto">
            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base sm:text-lg font-mono text-zinc-400">
                {personalInfo.title} · {personalInfo.location}
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
              {personalInfo.bio}
            </p>

            {/* Social Actions / Links */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-600 text-sm font-medium transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-zinc-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-600 text-sm font-medium transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-400" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-600 text-sm font-medium transition-all shadow-sm cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Scroll Down Prompt */}
          <div className="pb-8 pt-4 flex flex-col items-center gap-1.5 text-xs font-mono text-zinc-500 animate-bounce">
            <span>Scroll to explore projects & experience</span>
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          </div>
        </section>

        {/* =========================================
            FEATURED PROJECTS (Detailed Cards Grid)
           ========================================= */}
        <section className="py-24 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-800/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest mb-2">
                <span>// PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Featured Projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
              Full-stack production platforms, predictive ML engines, and open-source contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project) => {
              const imageSrc = project.image
                ? `${import.meta.env.BASE_URL}${project.image}`
                : null;

              return (
                <div
                  key={project.id}
                  className="bg-[#1a1e2e] border border-zinc-800/90 hover:border-zinc-700 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50"
                >
                  <div>
                    {/* Visual Banner or Screenshot */}
                    {imageSrc ? (
                      <div className="w-full h-52 bg-zinc-950 overflow-hidden relative border-b border-zinc-800/80">
                        <img
                          src={imageSrc}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      getCustomProjectGraphic(project.id)
                    )}

                    {/* Detailed Content */}
                    <div className="p-7 sm:p-8 space-y-4">
                      {/* Header Badge & Category */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-medium text-zinc-300 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">
                          {project.tag}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <div className="text-xs font-mono text-zinc-400 mt-0.5">
                            {project.subtitle}
                          </div>
                        )}
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                        <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                          Key Technical Highlights:
                        </div>
                        <ul className="space-y-1.5 text-xs text-zinc-400">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/70 text-zinc-300 border border-zinc-700/60 group-hover:border-zinc-600/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="px-7 pb-7 sm:px-8 sm:pb-8 pt-0 flex flex-wrap items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold tracking-wide transition-all shadow-md shadow-white/5"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-750 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-600 text-xs font-medium transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================
            EXPERIENCE SECTION (From Resume)
           ========================================= */}
        <section className="py-24 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-800/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest mb-2">
                <span>// WORK HISTORY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Experience
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
              Software engineering roles spanning full-stack marketplace systems, geospatial pipelines, and AI services.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#1a1e2e] border border-zinc-800/90 hover:border-zinc-700 rounded-3xl p-7 sm:p-8 space-y-4 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/60">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {exp.company}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-300 mt-0.5">
                      {exp.role} · <span className="text-zinc-500 font-normal">{exp.type}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 sm:text-right">
                    <div className="text-zinc-300 font-medium">{exp.period}</div>
                    <div className="text-zinc-500">{exp.location}</div>
                  </div>
                </div>

                {/* Bullets directly from Resume */}
                <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed pt-1">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="text-zinc-500 font-bold shrink-0 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/50">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/60 text-zinc-400 border border-zinc-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            EDUCATION SECTION (From Resume)
           ========================================= */}
        <section className="py-24 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-800/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest mb-2">
                <span>// ACADEMICS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Education
              </h2>
            </div>
          </div>

          <div className="bg-[#1a1e2e] border border-zinc-800/90 rounded-3xl p-7 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-800/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700/80 text-zinc-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {education.institution}
                  </h3>
                  <div className="text-sm text-zinc-400 font-medium">
                    {education.degree} · <span className="text-emerald-400 font-mono font-semibold">GPA: {education.gpa}</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-400 sm:text-right">
                <div className="text-zinc-300">{education.graduation}</div>
                <div className="text-zinc-500">{education.location}</div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                Relevant Coursework:
              </span>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-800/70 text-zinc-300 border border-zinc-700/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            TECHNICAL SKILLS (From Resume)
           ========================================= */}
        <section className="py-24 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-800/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest mb-2">
                <span>// TOOLKIT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Technical Skills
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
              Technologies, programming languages, and infrastructure utilized in production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((group, idx) => (
              <div
                key={idx}
                className="bg-[#1a1e2e] border border-zinc-800/90 hover:border-zinc-700 rounded-2xl p-6 space-y-4 transition-all"
              >
                <h3 className="font-mono text-sm font-bold text-zinc-100 uppercase tracking-wider pb-2 border-b border-zinc-800/60">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-800/70 text-zinc-300 border border-zinc-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            CONTACT / GET IN TOUCH SECTION
           ========================================= */}
        <section className="py-24 max-w-6xl mx-auto px-6 sm:px-8 border-t border-zinc-800/60">
          <div className="bg-[#1a1e2e] border border-zinc-800/90 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto">
                Open to software engineering opportunities, collaborations, and discussions. Feel free to reach out directly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-white/5"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-600 font-medium text-sm transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-zinc-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="pt-8 border-t border-zinc-800/60 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>© {new Date().getFullYear()} {personalInfo.name}</span>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
