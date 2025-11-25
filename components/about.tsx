"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, BookOpen } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Graduate",
      description:
        "Completed BSc in Computer Science and Engineering with a strong focus on software development and web technologies.",
      color: "bg-blue-500",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building projects with modern technologies like Laravel, Vue.js, and exploring full-stack development.",
      color: "bg-emerald-500",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Always eager to learn new technologies and improve my skills through hands-on projects and courses.",
      color: "bg-purple-500",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50/50 to-gray-100/50 dark:from-slate-900/50 dark:to-gray-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I am a Laravel developer building clean, scalable web applications. I’ve developed multiple eCommerce projects with REST APIs, MySQL, and full website management. I also support digital marketing to help businesses grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-emerald-600 dark:text-emerald-400">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate web developer focused on Laravel and Vue.js, with hands-on experience building scalable web applications.
              </p>
              <p>
                I enjoy creating projects that solve real-world problems and working with modern technologies for both backend and frontend development.
              </p>
              <p>
               My goal is to become a skilled full-stack developer and contribute to impactful projects, while continuously learning and exploring new technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${highlight.color} text-white`}>
                        <highlight.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
