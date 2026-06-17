import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SKILL_GROUPS = [
  { category: "languages", items: ["Python", "JavaScript"] },
  { category: "ml_dl", items: ["TensorFlow", "Scikit-learn", "NLP", "Computer Vision"] },
  { category: "llm_rag", items: ["LangChain", "LangGraph", "ChromaDB", "FAISS"] },
  { category: "web", items: ["Flask", "Streamlit", "React"] },
];

const PROJECTS = [
  {
    file: "rag_agent.py",
    title: "RAG-Agent",
    description:
      "Retrieval-Augmented Generation chatbot that answers questions over custom documents — vector search plus an LLM for generation.",
    tags: ["LangChain", "LangGraph", "ChromaDB", "Streamlit"],
    github: "https://github.com/ashu75628-alt/RAG-Agent",
  },
  {
    file: "plant_disease.py",
    title: "Plant Disease Detection AI",
    description:
      "CNN-based image classifier that detects plant leaf diseases, served through a Flask web app for real-time predictions.",
    tags: ["TensorFlow", "Flask", "Computer Vision"],
    github: "https://github.com/ashu75628-alt/plant-disease-detection-ai",
  },
  {
    file: "portfolio.jsx",
    title: "AI Portfolio",
    description:
      "This very site — a fast, responsive portfolio built from scratch to showcase my projects and skills.",
    tags: ["React", "Vite", "Tailwind"],
    github: "https://github.com/ashu75628-alt/ai-portfolio",
  },
];

const TERMINAL_QUERY = 'ask("What does Ashutosh build?")';
const TERMINAL_RESPONSE =
  "Retrieval-Augmented chatbots, computer vision models,\nand full-stack AI products — shipped end-to-end,\nfrom training to a working app.";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);
  return reduced;
}

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent2 mb-3">
      {children}
    </p>
  );
}

function TerminalPanel() {
  const reducedMotion = useReducedMotion();
  const [typedQuery, setTypedQuery] = useState(reducedMotion ? TERMINAL_QUERY : "");
  const [typedResponse, setTypedResponse] = useState(reducedMotion ? TERMINAL_RESPONSE : "");
  const started = useRef(false);

  useEffect(() => {
    if (reducedMotion || started.current) return;
    started.current = true;

    let i = 0;
    const queryInterval = setInterval(() => {
      i += 1;
      setTypedQuery(TERMINAL_QUERY.slice(0, i));
      if (i >= TERMINAL_QUERY.length) {
        clearInterval(queryInterval);
        let j = 0;
        const responseInterval = setInterval(() => {
          j += 1;
          setTypedResponse(TERMINAL_RESPONSE.slice(0, j));
          if (j >= TERMINAL_RESPONSE.length) clearInterval(responseInterval);
        }, 18);
      }
    }, 45);

    return () => clearInterval(queryInterval);
  }, [reducedMotion]);

  return (
    <div className="w-full max-w-md rounded-xl bg-surface border border-surface2 shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-surface2/60 border-b border-surface2">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-xs text-muted">rag_agent — zsh</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[160px]">
        <p className="text-accent2">
          <span className="text-muted">&gt;&gt;&gt; </span>
          {typedQuery}
          {!reducedMotion && typedQuery.length < TERMINAL_QUERY.length && (
            <span className="animate-pulse">|</span>
          )}
        </p>
        <p className="text-ash whitespace-pre-line mt-2">
          {typedResponse}
          {!reducedMotion && typedQuery.length >= TERMINAL_QUERY.length && typedResponse.length < TERMINAL_RESPONSE.length && (
            <span className="animate-pulse">|</span>
          )}
        </p>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-ink text-ash font-body">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full bg-ink/80 backdrop-blur-md z-50 border-b border-surface2">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-display text-xl font-semibold text-ash">Ashutosh<span className="text-accent">.</span></h1>

          <div className="space-x-8 hidden md:block font-mono text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-accent2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H20" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-ink overflow-hidden border-b border-surface2"
            >
              <div className="flex flex-col px-6 py-4 gap-4 font-mono text-sm">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-muted hover:text-accent2">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/profile.jpg"
                alt="Ashutosh Kumar"
                className="w-16 h-16 rounded-full object-cover border-2 border-accent"
              />
              <Eyebrow>AI / ML Engineer · Fresher</Eyebrow>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-semibold text-ash mb-6 leading-tight">
              Ashutosh Kumar
            </h1>

            <p className="text-muted text-lg mb-8 max-w-md">
              I build retrieval-augmented agents, computer vision models, and the
              full-stack apps that put them in front of real users.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <button className="px-6 py-3 bg-accent text-ink font-medium rounded-lg hover:bg-accent2 transition-colors">
                  View Projects
                </button>
              </a>
              <a
                href="https://github.com/ashu75628-alt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-surface2 rounded-lg hover:border-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-kumar-66b92436a"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-surface2 rounded-lg hover:border-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <TerminalPanel />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 px-6 border-t border-surface2">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>// about</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ash mb-6">
            What I'm building
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            I'm an aspiring AI &amp; Machine Learning engineer focused on shipping intelligent
            systems with Python, TensorFlow, and modern LLM tooling. Recently I've been exploring
            Retrieval-Augmented Generation, building agents with LangChain and LangGraph, and
            taking deep learning models from training to a working web app.
          </p>

          <div className="flex flex-wrap gap-8 mt-10 font-mono text-sm">
            <div>
              <p className="text-2xl font-display text-accent2">3</p>
              <p className="text-muted">Projects shipped</p>
            </div>
            <div>
              <p className="text-2xl font-display text-accent2">RAG</p>
              <p className="text-muted">Current focus area</p>
            </div>
            <div>
              <p className="text-2xl font-display text-accent2">Open</p>
              <p className="text-muted">To ML / AI Engineer roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-24 px-6 border-t border-surface2 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>// skills --list</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ash mb-10">
            Technical Stack
          </h2>

          <div className="space-y-6">
            {SKILL_GROUPS.map((group) => (
              <div key={group.category} className="flex flex-col md:flex-row md:items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-muted w-32 shrink-0">
                  {group.category.replace("_", " / ")}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm px-3 py-1 rounded-md bg-surface border border-surface2 text-ash hover:border-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-6 border-t border-surface2">
        <div className="max-w-6xl mx-auto">
          <Eyebrow>// projects</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ash mb-10">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -4 }}
                className="rounded-xl bg-surface border border-surface2 overflow-hidden flex flex-col"
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-surface2/60 border-b border-surface2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-mono text-xs text-muted">{project.file}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold text-ash mb-2">{project.title}</h3>
                  <p className="text-muted text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-2 py-1 rounded bg-surface2 text-accent2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-accent hover:text-accent2 transition-colors"
                  >
                    View on GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 px-6 border-t border-surface2 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <Eyebrow>// contact --reach</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ash mb-8">
            Let's build something
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:ashu75628@gmail.com"
              className="px-6 py-3 bg-accent text-ink font-medium rounded-lg hover:bg-accent2 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/ashu75628-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-surface2 rounded-lg hover:border-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashutosh-kumar-66b92436a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-surface2 rounded-lg hover:border-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center font-mono text-xs text-muted border-t border-surface2">
        © {new Date().getFullYear()} Ashutosh Kumar — built with React, Vite &amp; Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
