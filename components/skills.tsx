"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Globe, Server, Cpu } from "lucide-react"

type Skill = {
  name: string
  proficiency: number
}

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: Skill[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "Java", proficiency: 90 },
        { name: "C/C++", proficiency: 90 },
        { name: "Python", proficiency: 80 },
        { name: "JavaScript", proficiency: 60 },
        { name: "HTML/CSS", proficiency: 60 },
      ],
    },
    {
      name: "AI & Machine Learning",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "Google Gemini AI", proficiency: 85 },
        { name: "Natural Language Processing", proficiency: 80 },
        { name: "RAG (Retrieval-Augmented Generation)", proficiency: 75 },
        { name: "Text-to-SQL", proficiency: 85 },
        { name: "OpenAI API", proficiency: 75 },
      ],
    },
    {
      name: "Frameworks & Tools",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Spring Framework", proficiency: 85 },
        { name: "Spring Boot", proficiency: 85 },
        { name: "JPA & Spring Data", proficiency: 80 },
        { name: "Next.js", proficiency: 75 },
        { name: "SQLAlchemy", proficiency: 70 },
      ],
    },
    {
      name: "Database & Data",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 75 },
        { name: "SQL", proficiency: 85 },
        { name: "Prisma ORM", proficiency: 70 },
        { name: "Pandas", proficiency: 75 },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30 scroll-mt-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans the entire development stack, enabling me to build complete solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-primary/20 text-primary">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full transition-all duration-500"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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
