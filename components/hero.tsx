"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse floating-animation"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Hi, I'm{" "}
              <span className="text-emerald-600 dark:text-emerald-400 relative">
                Abdur Rahim Sana
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-200 dark:bg-emerald-800 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Full Stack Laravel Developer | Digital Marketing Specialist
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I build modern and scalable web applications using Laravel, PHP,
              MySQL, and REST APIs. I have developed multiple eCommerce projects
              and also work in social media marketing, website management, and
              online brand promotion. I enjoy creating digital solutions that
              help businesses grow.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Projects
              </Button>

              {/* Resume Download Button */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-900/20 bg-transparent"
              >
                <a
                  href="/images/Abdur-Rahim.pdf"
                  download
                  className="inline-flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/rahim08717",
                  label: "GitHub",
                  color: "hover:bg-gray-100 dark:hover:bg-gray-800",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/abdur-rahim-sana-89b020249",
                  label: "LinkedIn",
                  color: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
                },
                {
                  icon: Mail,
                  href: "mailto:abdurrahim17@cse.pstu.ac.bd",
                  label: "Email",
                  color: "hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className={`p-3 rounded-lg bg-muted ${social.color} transition-all duration-200`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-400 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <Image
                  src="/images/profile.png"
                  alt="Abdur Rahim Sana"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className="w-5 h-5 text-emerald-600" />
        </motion.button>
      </div>
    </section>
  );
}
