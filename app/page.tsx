"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  )
}
