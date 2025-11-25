"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    // 1. SundarbanShop
    {
      title: "SundarbanShop",
      description:
        "A full-featured Laravel eCommerce website with product catalog, checkout, payment integration, admin panel, and secure user management.",
      image: "/images/sundarbanshop1.png",
      technologies: [
        "Laravel", "PHP", "Vue.js", "Bootstrap", "Tailwind CSS", 
        "MySQL", "Git", "HTML", "CSS", "JavaScript", "REST API", "Stripe Payment"
      ],
      liveUrl: "https://www.sundarbanshopbd.com/",
      githubUrl: "https://github.com/rahim08717/sundarbanshop",
      accent: "emerald",
    },

    // 2. FashionWave
    {
      title: "FashionWave",
      description:
        "Laravel-based online fashion store with shopping cart, AJAX-based product filters, order management, and digital marketing features.",
      image: "/images/fashionwave.png",
      technologies: [
        "Laravel", "PHP", "JavaScript", "jQuery", "AJAX", 
        "MySQL", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Git", " Razorpay"
      ],
      liveUrl: "www.fashionwave.sundorbanshopbd.com",
      githubUrl: "https://github.com/rahim08717/FashionWave--Ecommerce",
      accent: "blue",
    },

    // 3. NGO Website
    {
      title: "NGO Website",
      description:
        "Responsive NGO website with events management, donation system, volunteer signup, and blog section built with Laravel.",
      image: "/images/ngo.png",
      technologies: [
        "Laravel", "PHP", "Bootstrap", "MySQL", 
        "HTML", "CSS", "JavaScript", "Git", "REST API", "SEO Optimization", "Donation Integration"
      ],
      liveUrl: "https://www.sundarbanshopbd.com/",
      githubUrl: "https://github.com/rahim08717/FashionWave--Ecommerce",
      accent: "orange",
    },

    // 4. Blog Website
    {
      title: "Blog Website",
      description:
        "A personal blog platform built with Laravel. Users can create posts, comment, and subscribe. Fully responsive with SEO-friendly structure.",
      image: "/images/blog.png",
      technologies: [
        "Laravel", "PHP", "MySQL", "Bootstrap", "Tailwind CSS", 
        "HTML", "CSS", "JavaScript", "Git", "SEO Optimization", "Content Management", "Newsletter Subscription"
      ],
      liveUrl: "https://www.sundarbanshopbd.com/",
      githubUrl: "https://github.com/rahim08717/FashionWave--Ecommerce",
      accent: "purple",
    },

    // 5. Social Media Management
    {
      title: "Social Media Management",
      description:
        "Managed Facebook, Instagram, and LinkedIn pages for clients. Ran campaigns, content creation, and audience growth strategies.",
      image: "/images/facebook-page.png",
      technologies: [
        "Facebook", "Instagram", "LinkedIn", "Content Creation", "SEO", 
        "Google Analytics", "Canva", "Video Editing", "Scheduling Tools", "Advertising", "Engagement Tracking"
      ],
      liveUrl: "https://www.facebook.com/sundarbanshop/",
      githubUrl: "https://github.com/rahim08717/FashionWave--Ecommerce",
      accent: "teal",
    },

    // 6. Online Brand Promotion
    {
      title: "Online Brand Promotion",
      description:
        "Promoted businesses online using social media campaigns, website SEO, Google Ads, and email marketing to improve reach and sales.",
      image: "/images/page-ad.png",
      technologies: [
        "Digital Marketing", "SEO", "Google Ads", "Email Marketing", "Content Creation", 
        "Facebook Ads", "Instagram Ads", "Analytics", "Copywriting", "Landing Pages", "A/B Testing"
      ],
      liveUrl: "https://www.facebook.com/sundarbanshop/",
      githubUrl: "https://github.com/rahim08717/FashionWave--Ecommerce",
      accent: "pink",
    },
  ];

  const getAccentClasses = (accent: string) => {
    const classes = {
      emerald: "hover:border-emerald-300 group-hover:shadow-emerald-100",
      blue: "hover:border-blue-300 group-hover:shadow-blue-100",
      orange: "hover:border-orange-300 group-hover:shadow-orange-100",
      purple: "hover:border-purple-300 group-hover:shadow-purple-100",
      teal: "hover:border-teal-300 group-hover:shadow-teal-100",
      pink: "hover:border-pink-300 group-hover:shadow-pink-100",
    };
    return classes[accent as keyof typeof classes] || classes.emerald;
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Laravel & Full-Stack projects including eCommerce, Blogs, NGO Websites, and Digital Marketing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className={`project-card overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg ${getAccentClasses(
                  project.accent
                )}`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 border-white/50 text-gray-900 hover:bg-white"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
