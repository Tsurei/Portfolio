import "./App.css";

const projects = [
    {
        title: "Ironrise",
        role: "Gameplay Programmer",
        type: "Action Platformer Vertical Slice",
        engine: "Unreal Engine 5",
        duration: "4 Months",
        icon: "⚔️",
        tags: ["Camera Systems", "Hazards", "Blueprint Logic"],
        description:
            "Built gameplay systems for a team-developed action platformer, including third-person camera behavior, modular hazards, and playtest-driven debugging.",
    },
    {
        title: "Shipwreck",
        role: "VR Gameplay Programmer",
        type: "VR Arcade Target Shooter",
        engine: "Unreal Engine 5",
        duration: "2 Months",
        icon: "🎯",
        tags: ["Target Systems", "Spawning", "Math Movement"],
        description:
            "Created target behaviors, spawning rules, and score-driven interactions using mathematical equations and interpolation for readable VR movement patterns.",
    },
    {
        title: "Trash Out!",
        role: "VR Developer",
        type: "VR Project",
        engine: "Unreal Engine 5",
        duration: "Student Project",
        icon: "🗑️",
        tags: ["VR Interaction", "Gameplay", "Testing"],
        description:
            "VR project focused on immersive interaction, gameplay flow, and hands-on development within virtual environments.",
    },
];

const skills = [
    "Unreal Engine 5",
    "Blueprints",
    "C++",
    "C#",
    "JavaScript",
    "QA Testing",
    "Systems Prototyping",
    "VR/XR Development",
];

function App() {
    return (
        <main className="page">
            <nav className="navbar">
                <div>
                    <p className="eyebrow">Portfolio Deck</p>
                    <h1>Russell Angelo Paredes</h1>
                </div>

                <div className="nav-links">
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section className="hero">
                <div className="hero-text">
                    <p className="eyebrow">Gameplay Programmer</p>
                    <h2>Building gameplay systems with a card-player’s eye for strategy.</h2>
                    <p>
                        Unreal Engine developer focused on gameplay systems, VR/XR, QA testing,
                        and polished player experiences.
                    </p>

                    <div className="buttons">
                        <a href="#projects" className="button primary">View Projects</a>
                        <a href="#contact" className="button secondary">Contact Me</a>
                    </div>
                </div>

                <div className="player-card">
                    <div className="avatar">RP</div>
                    <p className="card-label">Candidate Card</p>
                    <h3>Russell Paredes</h3>
                    <p>Unreal Engine • VR/XR • QA</p>

                    <div className="stats">
                        <div><strong>3</strong><span>Projects</span></div>
                        <div><strong>UE5</strong><span>Engine</span></div>
                        <div><strong>QA</strong><span>Focus</span></div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section">
                <p className="eyebrow">Quest Cards</p>
                <h2>Featured Projects</h2>

                <div className="project-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.title}>
                            <div className="project-top">
                                <div>
                                    <p className="project-role">{project.role}</p>
                                    <h3>{project.title}</h3>
                                </div>
                                <div className="project-icon">{project.icon}</div>
                            </div>

                            <div className="project-meta">
                                <span>{project.engine}</span>
                                <span>{project.duration}</span>
                            </div>

                            <p className="project-type">{project.type}</p>
                            <p className="project-description">{project.description}</p>

                            <div className="tags">
                                {project.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="skills" className="section">
                <p className="eyebrow">Skill Tree</p>
                <h2>Technical Loadout</h2>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill}>
                            ✦ {skill}
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="contact-card">
                <p className="eyebrow">Start Match</p>
                <h2>Let’s connect</h2>
                <p>
                    Open to junior gameplay programming, QA, VR/XR, and technical design opportunities.
                </p>

                <div className="contact-links">
                    <a href="mailto:russpared@gmail.com">✉️ russpared@gmail.com</a>
                    <span>📍 Winnipeg, MB</span>
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                </div>
            </section>
        </main>
    );
}

export default App;