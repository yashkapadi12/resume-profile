"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  name: string
  skills: string[]
}

interface SkillsProps {
  skillCategories: SkillCategory[]
}

export function Skills({ skillCategories }: SkillsProps) {
  return (
    <motion.section 
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-blue-600 group-hover:via-purple-700 group-hover:to-pink-700"
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        rotate: 2,
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
