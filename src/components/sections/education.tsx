"use client"

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  gpa?: string
  description?: string[]
  achievements?: string[]
}

interface EducationProps {
  education: Education[]
}

export function Education({ education }: EducationProps) {
  return (
    <motion.section 
      className="py-12 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.location}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  <span>{edu.startDate}</span>
                  <span> - </span>
                  <span>{edu.current ? 'Present' : edu.endDate}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              {edu.description && (
                <div className="mb-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {edu.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
