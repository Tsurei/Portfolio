import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const projects = [
    {
        title: "Ironrise",
        role: "Gameplay Programmer",
        engine: "Unreal Engine 5",
        rarity: "Legendary",
        image: "/ironrise.jpg",
        tags: ["Camera Systems", "Hazards", "Blueprints"],
        description:
            "Built gameplay systems for a team-developed action platformer vertical slice, including third-person camera behavior, modular hazards, and playtest-driven debugging.",
        bullets: [
            "Implemented responsive third-person camera systems",
            "Built reusable hazard mechanics using Blueprint logic",
            "Debugged and refined gameplay through playtesting feedback",
        ],
    },
    {
        title: "Shipwreck",
        role: "VR Gameplay Programmer",
        engine: "Unreal Engine 5",
        rarity: "Epic",
        image: "/shipwreck.jpg",
        tags: ["VR", "Target Systems", "Math Movement"],
        description:
            "Created VR target systems, spawning rules, and score-driven gameplay using math-based movement patterns.",
        bullets: [
            "Built modular target behavior systems",
            "Used math and interpolation for readable movement",
            "Created spawning rules to support pacing and scoring",
        ],
    },
    {
        title: "Trash Out!",
        role: "VR Developer",
        engine: "Unreal Engine 5",
        rarity: "Rare",
        image: "/trashout.jpg",
        tags: ["VR Interaction", "Gameplay", "Testing"],
        description:
            "Developed VR gameplay interactions focused on player feedback, usability, and immersive design.",
        bullets: [
            "Worked on VR interaction and gameplay flow",
            "Tested and refined player experience",
            "Improved usability through iteration",
        ],
    },
];

function App() {
    const [selected, setSelected] = useState(projects[0]);

    return (
        <main className="page">
            <header className="hud">
                <div>
                    <p className="eyebrow">Portfolio Interface</p>
                    <h1>Russell Angelo Paredes</h1>
                    <p>Gameplay Programmer • Unreal Engine • VR/XR • QA</p>
                </div>

                <nav>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    <a href="/resume.pdf" target="_blank">Resume</a>
                </nav>
            </header>

            <section className="showcase">
                <div className="selected-card">
                    <p className="eyebrow">Selected Project</p>
                    <h2>{selected.title}</h2>
                    <p className="subtitle">{selected.role} • {selected.engine}</p>

                    <img src={selected.image} alt={selected.title} />

                    <p className="description">{selected.description}</p>

                    <ul>
                        {selected.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                </div>

                <div className="about-panel">
                    <p className="eyebrow">Player Profile</p>
                    <h2>Gameplay Programmer</h2>
                    <p>
                        I build gameplay systems with a focus on responsiveness, readability,
                        debugging, and player experience. My background includes Unreal Engine,
                        VR/XR projects, QA testing, and team-based game development.
                    </p>

                    <div className="stats">
                        <div><strong>3</strong><span>Projects</span></div>
                        <div><strong>UE5</strong><span>Engine</span></div>
                        <div><strong>QA</strong><span>Experience</span></div>
                    </div>
                </div>
            </section>

            <section id="projects" className="hand-section">
                <p className="eyebrow center">Project Hand</p>

                <div className="card-hand">
                    {projects.map((project, index) => (
                        <motion.button
                            key={project.title}
                            className={`project-card ${selected.title === project.title ? "active" : ""}`}
                            onClick={() => setSelected(project)}
                            whileHover={{ y: -28, scale: 1.05 }}
                            style={{ rotate: `${(index - 1) * 7}deg` }}
                        >
                            <img src={project.image} alt={project.title} />

                            <div className="card-content">
                                <div className="card-top">
                                    <span>{project.rarity}</span>
                                </div>

                                <h3>{project.title}</h3>
                                <p>{project.role}</p>

                                <div className="tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </section>

            <section id="skills" className="skills">
                <p className="eyebrow">Skill Tree</p>
                <h2>Technical Loadout</h2>

                <div className="skill-grid">
                    <span>Unreal Engine 5</span>
                    <span>Blueprints</span>
                    <span>C++</span>
                    <span>C#</span>
                    <span>JavaScript</span>
                    <span>QA Testing</span>
                    <span>VR/XR Development</span>
                    <span>Systems Prototyping</span>
                </div>
            </section>

            <section id="contact" className="contact">
                <p className="eyebrow">Start Match</p>
                <h2>Let’s connect</h2>
                <p>Open to junior gameplay programming, QA, VR/XR, and technical design opportunities.</p>

                <div className="contact-links">
                    <a href="mailto:russpared@gmail.com">russpared@gmail.com</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                </div>
            </section>
        </main>
    );
}

export default App;