import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const projects = [
    {
        title: "Ironrise",
        role: "Gameplay Programmer",
        engine: "Unreal Engine 5",
        rarity: "Legendary",
        image: "/images/ironrise.jpg",
        itch: "https://aidendes.itch.io/iron-rise",
        video: "https://www.youtube.com/embed/VIDEO_ID_HERE",
        tags: ["Camera Systems", "Gameplay", "Blueprints"],
        description:
            "Developed a room-based 2.5D camera system for a team-built action platformer, improving visibility, transitions, and player framing.",
        bullets: [
            "Built Camera Manager, Camera Room, and Transition Volume Blueprint actors.",
            "Implemented room clamping and smooth transitions between gameplay spaces.",
            "Solved poor player visibility issues near walls and boundaries.",
        ],
    },
    {
        title: "Shipwreck",
        role: "VR Gameplay Programmer",
        engine: "Unreal Engine 5",
        rarity: "Epic",
        image: "/images/shipwreck.jpg",
        itch: "https://aidendes.itch.io/shipwreck",
        video: "https://www.youtube.com/embed/VIDEO_ID_HERE",
        tags: ["VR", "Target Systems", "OOP"],
        description:
            "Created a modular VR target system with configurable spawning and inheritance-based target classes.",
        bullets: [
            "Built spawner actors with editable spawn points and pacing controls.",
            "Created reusable target base classes with child Blueprint inheritance.",
            "Implemented math-based movement patterns and integrated with gameplay systems.",
        ],
    },
    {
        title: "Trash Out!",
        role: "VR Gameplay Programmer",
        engine: "Unreal Engine 5",
        rarity: "Epic",
        image: "/images/trashout.jpg",
        itch: "https://raikabe.itch.io/trash-out",
        video: "https://www.youtube.com/embed/VIDEO_ID_HERE",
        tags: ["VR Physics", "Interaction", "Gameplay"],
        description:
            "Developed a VR rope magnet mechanic using custom physics and object attraction systems.",
        bullets: [
            "Created rope magnet tool using custom Blender assets.",
            "Built VR hand controls for natural rope movement and interaction.",
            "Designed magnetic pickup systems for underwater retrieval gameplay.",
        ],
    },
    {
        title: "Mutant",
        role: "Gameplay Programmer",
        engine: "Unreal Engine 5",
        rarity: "Epic",
        image: "/images/mutant.jpg",
        itch: "https://densev.itch.io/mutant",
        video: "https://www.youtube.com/embed/VIDEO_ID_HERE",
        tags: ["Controls", "Combat", "Charge Attacks"],
        description:
            "Developed player controls and charge attack behavior for a 3D top-down sci-fi shooter focused on a boss battle encounter.",
        bullets: [
            "Converted twin-stick controller movement to support keyboard and mouse input.",
            "Implemented charge attack behavior that slows player movement while charging.",
            "Created three attack types based on how long the player held the attack input.",
        ],
    },
    {
        title: "Alkaline",
        role: "Gameplay Programmer",
        engine: "Unity",
        rarity: "Rare",
        image: "/images/alkaline.jpg",
        itch: "https://blkysuity-sh.itch.io/alkaline",
        video: "https://www.youtube.com/embed/VIDEO_ID_HERE",
        tags: ["Puzzle Design", "Mechanics", "2D Platformer"],
        description:
            "Worked on gameplay mechanics and puzzle level design for a 2D puzzle-platformer set in a run-down space laboratory.",
        bullets: [
            "Developed pressure plate mechanics used for environmental puzzles and progression.",
            "Designed complex puzzle levels focused on logic, timing, and player experimentation.",
            "Collaborated with programmers and artists to integrate mechanics into narrative-driven gameplay.",
        ],
    },
];

function App() {
    const [selected, setSelected] = useState(projects[0]);
    const [hovered, setHovered] = useState(null);
    const [videoOpen, setVideoOpen] = useState(false);

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
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </nav>
            </header>

            <section className="showcase">
                <div className={`selected-card ${selected.rarity.toLowerCase()}`}>
                    <p className="eyebrow">Selected Project</p>
                    <h2>{selected.title}</h2>
                    <p className="subtitle">
                        {selected.role} • {selected.engine}
                    </p>

                    <img src={selected.image} alt={selected.title} />

                    <p className="description">{selected.description}</p>

                    <ul>
                        {selected.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>

                    <div className="project-links">
                        <a
                            href={selected.itch}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`itch-link ${selected.rarity.toLowerCase()}`}
                        >
                            Play on Itch.io
                        </a>

                        {selected.video && (
                            <button
                                type="button"
                                onClick={() => setVideoOpen(true)}
                                className={`video-link ${selected.rarity.toLowerCase()}`}
                            >
                                Watch Demo
                            </button>
                        )}
                    </div>
                </div>

                <div className="about-panel">
                    <p className="eyebrow">Player Profile</p>
                    <h2>Gameplay Programmer</h2>

                    <p>
                        I build gameplay systems with a focus on responsiveness, readability,
                        debugging, and player experience. My background includes Unreal
                        Engine, VR/XR projects, QA testing, and team-based game development.
                    </p>

                    <div className="stats">
                        <div>
                            <strong>5</strong>
                            <span>Projects</span>
                        </div>
                        <div>
                            <strong>UE5</strong>
                            <span>Engine</span>
                        </div>
                        <div>
                            <strong>Unity</strong>
                            <span>Engine</span>
                        </div>
                        <div>
                            <strong>QA</strong>
                            <span>Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="hand-section">
                <p className="eyebrow center">Project Hand</p>

                <div className="card-hand">
                    {projects.map((project, index) => (
                        <motion.button
                            key={project.title}
                            className={`project-card ${project.rarity.toLowerCase()} ${selected.title === project.title ? "active" : ""
                                }`}
                            onClick={() => setSelected(project)}
                            onMouseEnter={() => setHovered(project.title)}
                            onMouseLeave={() => setHovered(null)}
                            whileHover={{ y: -28, scale: 1.05 }}
                            style={{
                                rotate: `${(index - 2) * 6}deg`,
                                zIndex:
                                    hovered === project.title
                                        ? 10
                                        : selected.title === project.title
                                            ? 5
                                            : index,
                            }}
                        >
                            <img src={project.image} alt={project.title} />

                            <div className="card-content">
                                <div className="card-top">
                                    <span className={`rarity ${project.rarity.toLowerCase()}`}>
                                        {project.rarity}
                                    </span>

                                    {selected.title === project.title && (
                                        <span className="selected-badge">Selected</span>
                                    )}
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

                <p>
                    Open to junior gameplay programming, QA, VR/XR, and technical design
                    opportunities.
                </p>

                <div className="contact-links">
                    <a href="mailto:russpared@gmail.com">Email</a>
                    <a
                        href="https://www.linkedin.com/in/russell-paredes-5b6348232/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Tsurei"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://raikabe.itch.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Itch
                    </a>
                </div>
            </section>

            {videoOpen && (
                <div className="video-modal" onClick={() => setVideoOpen(false)}>
                    <div
                        className="video-modal-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="close-video"
                            onClick={() => setVideoOpen(false)}
                        >
                            ×
                        </button>

                        <iframe
                            src={selected.video}
                            title={`${selected.title} Gameplay Demo`}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </main>
    );
}

export default App;