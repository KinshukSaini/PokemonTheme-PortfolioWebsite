import React from 'react'

const ProjectsScreen = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A Pokédex-themed portfolio built with Next.js and React",
      tech: ["React", "Next.js", "Tailwind CSS"],
      status: "Current"
    },
    {
      id: 2,
      title: "Web Application",
      description: "Full-stack application with modern design",
      tech: ["Node.js", "Express", "MongoDB"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application",
      tech: ["React Native", "TypeScript"],
      status: "In Progress"
    }
  ]

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 overflow-y-auto">
      <div className="text-white text-center max-w-6xl">
        <h2 className="text-6xl mb-8 text-[#D9B458]">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-[#3B4A52] to-[#1D2B32] p-6 rounded-lg border-2 border-[#5D6BAD] hover:border-[#D9B458] transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-[#D9B458]">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'Completed' ? 'bg-green-600' :
                  project.status === 'Current' ? 'bg-blue-600' : 'bg-yellow-600'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-[#2B343A] rounded text-sm text-[#D9B458]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-lg opacity-80">More projects coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsScreen