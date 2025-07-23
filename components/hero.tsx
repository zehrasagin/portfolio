"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Zehra</span>{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SAĞIN</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Computer Engineering Student & AI Enthusiast</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-white font-medium"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            Contact Me
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <Button variant="ghost" size="icon" onClick={scrollToAbout} className="animate-bounce text-muted-foreground">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}
