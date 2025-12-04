export default function Projects() {
  const projects = [
    {
      title: "KHOZNA",
      subtitle: "Renting App for Nepal",
      description: "Making renting in Nepal simple and trustworthy with verified listings, real availability, and a smooth platform for tenants and landlords.",
      problem: "Finding reliable, verified rental housing when moving to a new city is extremely difficult in Nepal.",
      solution: "Trust-focused platform with verified listings, real-time availability, and seamless experience.",
      role: "Founder & Product Designer",
      skills: ["UX Research", "UI Design", "Figma", "Product Strategy", "Market Validation"],
      status: "Building MVP - Launching 2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "SaaS Dashboard Design",
      subtitle: "B2B Product Interface",
      description: "Designed intuitive dashboard for Nepal-based SaaS startup helping small businesses manage inventory.",
      role: "UX/UI Designer",
      skills: ["User Flows", "Wireframing", "Prototyping", "Design System"],
      status: "Client Project",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce Redesign",
      subtitle: "Conversion Optimization",
      description: "Redesigned checkout flow for local e-commerce site, improving conversion rate by reducing friction points.",
      role: "UX/UI Designer",
      skills: ["User Research", "A/B Testing", "Conversion Design"],
      status: "Case Study",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Building Real Solutions
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Not just pretty designs - products that solve actual problems
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full">
                <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                  <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-purple-600 font-semibold mb-2">{project.subtitle}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  {project.problem && (
                    <div className="mb-4">
                      <p className="text-sm font-bold text-gray-900 mb-1">Problem:</p>
                      <p className="text-sm text-gray-600">{project.problem}</p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <p className="text-sm font-bold text-gray-900 mb-2">Role:</p>
                    <p className="text-sm text-purple-600 font-medium">{project.role}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-bold text-gray-900 mb-2">Skills Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-sm font-semibold text-gray-900">{project.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Want to see detailed case studies?</p>
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
            Let's Talk About Your Project
          </a>
        </div>
      </div>
    </section>
  )
}