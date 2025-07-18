"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

type Repository = {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  language: string
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  // Mock data for demonstration - in a real app, this would come from GitHub API
  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setRepos([
        {
          id: 1,
          name: "YKS University Guidance Chatbot",
          description:
            "AI-powered Text-to-SQL university guidance system that provides personalized university and department recommendations based on Turkish University Entrance Exam (YKS) results using natural language processing.",
          html_url: "",
          homepage: "",
          topics: ["typescript", "nextjs", "gemini-api", "text-to-sql", "postgresql", "prisma", "chatbot", "nlp"],
          language: "TypeScript",
        },
        {
          id: 2,
          name: "Netaş Hardware Inventory System",
          description:
            "Automated Excel processing system that converts kit lists into standardized Hardware (Z0) and IT (Z1) configuration files, reducing manual workload by 90% and eliminating human errors in enterprise format outputs.",
          html_url: "",
          homepage: "",
          topics: ["nextjs", "typescript", "python", "pandas", "openpyxl", "automation", "excel-processing"],
          language: "TypeScript/Python",
        },
        {
          id: 3,
          name: "Text-to-SQL Converter & Chatbot",
          description:
            "A natural language to SQL query converter using Google's Gemini AI model, with additional RAG (Retrieval-Augmented Generation) capabilities for answering company-specific questions.",
          html_url: "",
          homepage: "",
          topics: ["python", "gemini-api", "streamlit", "rag", "sql", "nlp", "mysql", "sqlalchemy"],
          language: "Python",
        },
        {
          id: 4,
          name: "Online Poker Game",
          description:
            "Designed and implemented an online poker game with a server handling game state and player interactions using TCP/IP socket connection for real-time communication.",
          html_url: "",
          homepage: "",
          topics: ["python", "tcp-ip", "sockets", "networking", "game-development"],
          language: "Python",
        },
        {
          id: 5,
          name: "University Course Selection System",
          description:
            "A comprehensive system where students can view available courses, enroll in them, and receive grades, with professors managing courses and grades using Java MVC architecture.",
          html_url: "",
          homepage: "",
          topics: ["java", "mvc", "database", "university-system", "student-management"],
          language: "Java",
        },
        {
          id: 6,
          name: "Car Rental Application",
          description:
            "Server-side application for a Car Rental system using Spring Boot with JPA and Spring Data JPA. Implemented RESTful services with DTOs and MapStruct for object mapping.",
          html_url: "",
          homepage: "",
          topics: ["spring-boot", "jpa", "rest-api", "mapstruct", "swagger"],
          language: "Java",
        },
        {
          id: 7,
          name: "Shopping Website",
          description:
            "Lightweight web application using pure HTML and JavaScript without external frameworks. Utilized DummyJSON APIs to fetch and manage product and cart data.",
          html_url: "",
          homepage: "",
          topics: ["html", "javascript", "api", "e-commerce", "vanilla-js"],
          language: "JavaScript/HTML",
        },
        {
          id: 8,
          name: "Polynomial Arithmetic Calculator",
          description:
            "Calculator that uses linked list data structure to process polynomial values. Supports addition, subtraction, and multiplication operators.",
          html_url: "",
          homepage: "",
          topics: ["cpp", "data-structures", "linked-list", "polynomial", "calculator"],
          language: "C++",
        },
        {
          id: 9,
          name: "RISC-V Assembler/Disassembler",
          description:
            "Assembler and Disassembler developed using RISC-V instructions with processor core implementation.",
          html_url: "",
          homepage: "",
          topics: ["risc-v", "assembly", "processor", "computer-architecture", "verilog", "c"],
          language: "C",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const filteredRepos =
    activeTab === "all"
      ? repos
      : activeTab === "ai"
        ? repos.filter((repo) =>
            repo.topics.some((topic) =>
              ["gemini-ai", "rag", "nlp", "openai", "text-to-sql", "chatbot"].includes(topic),
            ),
          )
        : repos.filter((repo) => repo.topics.includes(activeTab.toLowerCase()))

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent development projects showcasing various technologies and skills
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
              <div className="flex justify-center">
                <TabsList className="bg-card/50 backdrop-blur-sm border border-border/50">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white text-muted-foreground"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="typescript"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white text-muted-foreground"
                  >
                    TypeScript
                  </TabsTrigger>
                  <TabsTrigger
                    value="python"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white text-muted-foreground"
                  >
                    Python
                  </TabsTrigger>
                  <TabsTrigger
                    value="java"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white text-muted-foreground"
                  >
                    Java
                  </TabsTrigger>
                  <TabsTrigger
                    value="ai"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white text-muted-foreground"
                  >
                    AI/ML
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-3">
                          <CardTitle className="text-lg leading-tight text-foreground flex-1 min-w-0">
                            {repo.name}
                          </CardTitle>
                          <Badge variant="outline" className="border-primary/50 text-primary shrink-0">
                            {repo.language}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{repo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {repo.topics.slice(0, 4).map((topic) => (
                          <Badge
                            key={topic}
                            variant="secondary"
                            className="text-xs bg-muted text-muted-foreground border-border/50"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center pt-4">
                      {repo.homepage && (
                        <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90">
                          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
              </p>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
              >
                <a href="https://github.com/zehrasagin" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit My GitHub
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
