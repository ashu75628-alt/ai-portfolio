import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <div className="bg-[#0f172a] text-white scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full bg-[#0b1220]/80 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-400">Ashutosh</h1>
          <div className="space-x-6 hidden md:block">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            Ashutosh Kumar
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6">
            <Typewriter
              words={[
                "AI Engineer in Progress",
                "Machine Learning Enthusiast",
                "Building Intelligent Systems",
                "Exploring LLMs & TensorFlow"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <a href="#projects">
            <button className="px-6 py-3 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/50 hover:bg-blue-600 transition">
              View Projects
            </button>
          </a>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 px-6 bg-[#0b1220] text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          I am an aspiring AI & Machine Learning developer focused on building intelligent systems 
          using Python, TensorFlow, and NLP. Currently exploring Large Language Models and 
          developing real-world AI projects like emotion-based music chatbots.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Python", "Machine Learning", "TensorFlow", "NLP", "Flask", "SQL"].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] p-6 rounded-2xl shadow-lg shadow-blue-500/20"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 px-6 bg-[#0b1220]">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#111827] p-6 rounded-2xl shadow-lg shadow-blue-500/20">
            <h3 className="text-xl font-semibold mb-3">AI Emotion-Based Music Chatbot</h3>
            <p className="text-gray-400 mb-4">
              Recommends music based on user emotions using NLP & ML.
            </p>
            <p className="text-blue-400 text-sm mb-3">
              Python • Flask • NLP • TensorFlow
            </p>
            <button className="text-sm bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
              GitHub
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#111827] p-6 rounded-2xl shadow-lg shadow-purple-500/20">
            <h3 className="text-xl font-semibold mb-3">TensorFlow ML System</h3>
            <p className="text-gray-400 mb-4">
              Built ML models with proper training and evaluation workflows.
            </p>
            <p className="text-blue-400 text-sm mb-3">
              Python • TensorFlow • Scikit-learn
            </p>
            <button className="text-sm bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
              GitHub
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#111827] p-6 rounded-2xl shadow-lg shadow-pink-500/20">
            <h3 className="text-xl font-semibold mb-3">LLM Exploration Project</h3>
            <p className="text-gray-400 mb-4">
              Studied LLM architecture and prompt engineering techniques.
            </p>
            <p className="text-blue-400 text-sm mb-3">
              LLM • NLP • Generative AI
            </p>
            <button className="text-sm bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
              GitHub
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Contact</h2>
        <p className="text-gray-300 mb-6">
          Let's connect and collaborate on AI & ML projects.
        </p>

        <div className="space-x-6">
          <a href="mailto:your-email@example.com" className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600">
            Email Me
          </a>
          <a href="#" className="bg-gray-700 px-6 py-3 rounded-xl hover:bg-gray-600">
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;
