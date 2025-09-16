"use client"

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
  technologies: string[]
}

interface ExperienceProps {
  experiences: Experience[]
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <motion.section 
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.location}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                  <span>{exp.startDate}</span>
                  <span> - </span>
                  <span>{exp.current ? 'Present' : exp.endDate}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="relative z-10 mb-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
