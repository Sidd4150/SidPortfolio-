const projects = [
    {
        title: "One Piece TCG log ",
        description: "A card list and deck builder for the popular card game based on the one piece anime show",
        tech: ["Express.js", "React", "MongoDB Atlas"],
        link: "https://github.com/Sidd4150/OptcgLogNewVersion",
        demo_link: "https://optcglognewversion.onrender.com/",
    },

    {
        title: "Search Engine",
        description: "A mini search engine built with GoLang and SQLite, featuring a simple HTML frontend for queries.",
        tech: ["GoLang", "SQLite", "HTML"],
        link: "https://github.com/yourusername/search-engine",
        demo_link: " ",
    },

    {
        title: "SpotDrop",
        description: "An app that gives last minute deals on events around SF, find in the app store now.",
        tech: ["Flutter", "Laravel", "FastAPI", "Postgres"],
        link: "https://github.com/Sidd4150/OptcgLogNewVersion",
        demo_link: "https://optcglognewversion.onrender.com/",
    },
];

export default function ProjectsSection() {
    return (
        <section className="bg-gray-100 py-16 px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects 🚀</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-500 hover:text-indigo-700 font-medium text-sm"
                            >
                                View GitHub →
                            </a>
                            <br></br>
                            <a
                                href={project.demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-500 hover:text-indigo-700 font-medium text-sm"
                            >
                                Live demo →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
