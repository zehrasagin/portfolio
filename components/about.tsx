"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-lg mb-4">
                  I'm a 4th year Computer Engineering student at Özyeğin University, exploring AI, backend development,
                  and decision support systems. I'm actively enhancing my knowledge in AI through self-learning and
                  online courses to develop a strong foundation in machine learning and data-driven solutions.
                </p>
                <p className="text-lg mb-4">
                  My passion lies in creating innovative solutions that combine theoretical knowledge with practical
                  applications. I'm eager to apply and expand my skills in real-world projects, particularly in areas
                  involving artificial intelligence and backend systems.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="outline" className="text-sm">
                    AI Enthusiast
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Backend Developer
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Problem Solver
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Algorithm Designer
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-4">My Mission</h3>
                <p className="text-lg">
                  To become a leading expert in artificial intelligence by pushing the boundaries of innovation across data science, fintech, and fashion analytics. I aim to design intelligent systems that make data not only insightful, but actionable — turning complexity into clarity and impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
