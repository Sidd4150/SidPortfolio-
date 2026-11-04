import { Braces, ChartColumn, Database, FlaskConical, Workflow } from 'lucide-react';

const logos = {
  TypeScript: ['typescript'], JavaScript: ['javascript'],
  'TypeScript / JavaScript': ['typescript', 'javascript'],
  Python: ['python'], Go: ['go'], C: ['c'], PHP: ['php'],
  React: ['react'], 'Next.js': ['nextjs'], 'HTML / CSS': ['html5', 'css3'],
  'Tailwind CSS': ['tailwindcss'], 'Node.js': ['nodejs'], 'Express.js': ['express'],
  FastAPI: ['fastapi'], Laravel: ['laravel'], PostgreSQL: ['postgresql'],
  'Neon Postgres': ['postgresql'], Prisma: ['prisma'], SQLAlchemy: ['sqlalchemy'],
  MongoDB: ['mongodb'], 'MongoDB Atlas': ['mongodb'], Docker: ['docker'],
  'AWS': ['amazonwebservices'], 'GitHub Actions': ['githubactions'],
  Supabase: ['supabase'], Vercel: ['vercel'], Git: ['git'], SQLite: ['sqlite'],
  Flask: ['flask'], 'Scikit-Learn': ['scikitlearn'], Pandas: ['pandas'], Jest: ['jest'],
};

export default function TechTag({ name }) {
  const icons = logos[name];
  const Symbol = name === 'SQL' ? Database
    : name.includes('Testing') || name === 'Pydantic' ? FlaskConical
    : name === 'Recharts' ? ChartColumn
    : /Concurrency|Goroutines|CI|n8n/.test(name) ? Workflow : Braces;

  return <span className="tech-tag">
    <span className="tech-symbols" aria-hidden="true">
      {icons ? icons.map(icon => <img key={icon} src={`${import.meta.env.BASE_URL}tool-icons/${icon}.svg`} alt="" width="18" height="18" loading="lazy" />) : <Symbol size={17} />}
    </span>
    {name}
  </span>;
}
