import { Hero } from "@/components/sections/hero"
import { Experience } from "@/components/sections/experience"
import { Education } from "@/components/sections/education"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { resumeData } from "@/data/resume-data"

function CompanyLogos() {
  const companies = [
    { name: "AWS", description: "Cloud Computing" },
    { name: "Kubernetes", description: "Orchestration" },
    { name: "GitHub", description: "Version Control" },
    { name: "Linux", description: "Operating System" }
  ]

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-2">
            Technologies & Tools
          </h3>
          <p className="text-slate-500 dark:text-slate-500">
            Professional expertise in modern DevOps technologies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="text-center p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-slate-600 dark:text-slate-300 font-bold text-sm">
                  {company.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                {company.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-20" />
        <div className="absolute inset-4 bg-white rounded-3xl" />
      </div>
      <div className="pt-20 relative z-10">
        <section id="home"><Hero {...resumeData.personal} /></section>
        <CompanyLogos />
        <section id="resume" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Resume</h2>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-gray-600 dark:text-gray-300">
                Drop your PDF at <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">public/resume.pdf</code> and this button will serve it.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
        <section id="experience"><Experience experiences={resumeData.experience} /></section>
        <section id="education"><Education education={resumeData.education} /></section>
        <section id="skills"><Skills skillCategories={resumeData.skillCategories} /></section>
        <section id="projects"><Projects projects={resumeData.projects} /></section>
      </div>
    </div>
  )
}


