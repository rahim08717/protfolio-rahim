"use client"

import { motion } from "framer-motion"
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaPhp, FaLaravel, FaDocker } from "react-icons/fa"
import { Database, Cloud, Monitor, Mail, Zap } from "lucide-react"

export function Skills() {
  const skills = [
    // Core / First Priority Skills
    { name: "PHP", icon: <FaPhp />, color: "text-purple-700" },
    { name: "Laravel", icon: <FaLaravel />, color: "text-red-500" },
    { name: "Vue.js", icon: <Zap className="w-6 h-6" />, color: "text-green-500" },
    { name: "Tailwind CSS", icon: <Zap className="w-6 h-6" />, color: "text-teal-500" },
    { name: "Bootstrap", icon: <Zap className="w-6 h-6" />, color: "text-purple-600" },
    { name: "MySQL", icon: <Database className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
    { name: "React.js", icon: <FaReact />, color: "text-blue-500" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <Zap className="w-6 h-6" />, color: "text-yellow-500" },

    // Supporting / Tools & Management
    { name: "Docker", icon: <FaDocker />, color: "text-blue-600" },
    { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
    { name: "Postman", icon: <Mail className="w-6 h-6" />, color: "text-orange-500" },
    { name: "Website Management", icon: <Monitor className="w-6 h-6" />, color: "text-emerald-500" },
    { name: "Digital Marketing", icon: <Zap className="w-6 h-6" />, color: "text-pink-600" },
    { name: "AI Tools", icon: <Zap className="w-6 h-6" />, color: "text-red-400" },
    { name: "Canva", icon: <Zap className="w-6 h-6" />, color: "text-purple-500" },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-emerald-50/30 to-teal-50/30 dark:from-emerald-950/10 dark:to-teal-950/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">Core technologies and tools I work with as a Laravel Full-Stack Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="skill-card p-4 rounded-xl text-center group cursor-pointer flex items-center justify-center gap-2"
            >
              <div className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                {skill.icon}
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
