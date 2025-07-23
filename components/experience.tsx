"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Experience = {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  responsibilities: string[]
}

export default function Experience() {
  // ...existing code...
  const experiences: Experience[] = [
    {
      company: "Netaş Telekomünikasyon A.Ş.",
      position: "Hardware-Software Development Intern",
      period: "Jul 2025 - Aug 2025",
      description:
        "Developed an automated hardware inventory system that processes Excel kit lists and generates standardized Hardware and IT configuration files, reducing manual workload and eliminating human errors in Netaş format outputs.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Npm",
        "Python",
        "Pandas",
        "OpenPyXL",
        "Node.js",
        "Excel Processing",
        "Automation",
        "Data Analysis",
      ],
      responsibilities: [
        "Built a full-stack web application for automated Excel processing and server configuration management",
        "Implemented Python-based data analysis system using Pandas for processing hardware component lists",
        "Created automated code conversion system mapping hardware codes to different format",
        "Developed intelligent component categorization logic separating hardware and IT components",
        "Designed automated Excel generation system following official Netaş templates with logos and formatting",
        "Built user-friendly interface for seamless kit list file uploads",
      ],
    },
    {
      company: "tercihrehberim.com",
      position: "Artificial Intelligence Intern",
      period: "Jun 2025 - Jul 2025",
      description:
        "Established the core architecture for an educational technology solution that aims to guide students through university selection process using AI, natural language processing, and advanced prompt engineering techniques.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Bun",
        "Prisma ORM",
        "PostgreSQL",
        "OpenAI API",
        "Prompt Engineering",
      ],
      responsibilities: [
        "Designed and optimized AI prompts for natural language understanding and response generation",
        "Implemented advanced prompt engineering techniques to improve chatbot accuracy and user experience",
        "Built the initial framework for an interactive chatbot interface using Next.js, TypeScript, and TailwindCSS",
        "Developed the fundamental text-to-SQL conversion system that translates natural language queries into database operations",
        "Created a prototype recommendation engine with basic criteria matching for university suggestions",
        "Set up database schema and relations using Prisma ORM with PostgreSQL to support the recommendation system",
        "Implemented initial API integration with OpenAI to enable natural language understanding capabilities",
        "Laid the groundwork for a system that could transform educational guidance through conversational AI",
        "The website: https://tercihrehberim.com/chatbot",
      ],
    },
    {
      company: "IEEE Student Branch",
      position: "Social Media Coordinator & CS Team Member",
      period: "2023 - 2024",
      description:
        "Leadership role in university's IEEE chapter, managing social media presence and computer science activities.",
      technologies: ["Social Media Management", "Event Organization", "Technical Presentations"],
      responsibilities: [
        "Coordinated social media campaigns for technical events and workshops",
        "Organized programming competitions and technical seminars",
        "Mentored junior students in computer science fundamentals",
        "Collaborated with faculty on student engagement initiatives",
        "Represented the university in national IEEE competitions",
      ],
    },
    {
      company: "Hüseyin Avni Sözen Anatolian High School",
      position: "Debate Team Member & Mentor",
      period: "2017 - 2021",
      description:
        "Active participant and mentor in school's debate team, developing critical thinking and communication skills.",
      technologies: ["Public Speaking", "Critical Thinking", "Research", "Mentoring"],
      responsibilities: [
        "Participated in regional and national debate competitions",
        "Mentored junior debate team members",
        "Developed research and analytical skills through competitive debating",
        "Enhanced communication and presentation abilities",
        "Led team strategy sessions and practice debates",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-muted/50 to-background scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building real-world applications
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl text-foreground">{exp.position}</CardTitle>
                    <Badge variant="outline" className="md:ml-auto w-fit border-primary/50 text-primary">
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="text-lg font-medium text-primary">{exp.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
