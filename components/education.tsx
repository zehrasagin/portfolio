"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Özyeğin University",
      degree: "Bachelor of Science in Computer Engineering",
      period: "2022 - Present",
      location: "Istanbul, Turkey",
      year: "4th Year",
      gpa: "3.06/4.00",
      description:
        "Focusing on AI, backend development, and decision support systems with strong foundation in algorithms and data structures.",
      achievements: [
        "Active member of IEEE Student Branch",
        "Social Media Coordinator (2023-2024)",
        "Computer Science Subdivision Team Member",
        "IEEEXtreme Programming Competition participant",
      ],
    },
    {
      institution: "Hüseyin Avni Sözen Anatolian High School",
      degree: "High School Diploma",
      period: "2017 - 2022",
      location: "Istanbul, Turkey",
      year: "Graduated",
      gpa: "",
      description:
        "Comprehensive education with focus on mathematics and sciences, active participation in debate team.",
      achievements: [
        "Debate Team Member & Mentor (2017-2021)",
        "Strong academic performance in STEM subjects",
        "Leadership experience through mentoring activities",
      ],
    },
  ]

  const certificates = [
    {
      name: "Anbean Finans ve Yatırım Okulu",
      issuer: "Anbean Kampüs",
      year: "2025",
      type: "Finance & Investment",
    },
    {
      name: "IEEEXtreme Programming Competition",
      issuer: "IEEE",
      year: "2024",
      type: "Programming Competition",
    },
    {
      name: "C++ Data Structures & Algorithms + LEETCODE Exercises",
      issuer: "Udemy - Scott Barrett",
      year: "2024",
      type: "Technical Course",
    },
    {
      name: "Ethical Leadership Academy Certificate | 20th Term",
      issuer: "Etik Liderler Merkezi Derneği",
      year: "2024",
      type: "Leadership",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 md:px-6 lg:px-8 scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning achievements
          </p>
        </motion.div>

        <div className="space-y-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <div className="text-lg font-medium text-primary">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period} • {edu.location}
                      </div>
                      {edu.gpa && <div className="text-sm font-medium text-primary mt-1">GPA: {edu.gpa}</div>}
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {edu.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{edu.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={`${cert.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {cert.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
