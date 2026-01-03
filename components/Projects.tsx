export default function Projects() {
  const projects = [
    {
      title: "KHOZNA-webapp",
      subtitle: "Renting App for Nepal",
      description: "Making renting in Nepal simple and trustworthy with verified listings, real availability, and a smooth platform for tenants and landlords.",
      problem: "Finding reliable, verified rental housing when moving to a new city is extremely difficult in Nepal.",
      solution: "Trust-focused platform with verified listings, real-time availability, and seamless experience.",
      role: "Founder & Product Designer",
      skills: ["UX Research", "UI Design", "Figma", "Product Strategy", "Market Validation"],
      status: "Building MVP - Launching 2026",
      color: "from-purple-500 to-pink-500",
      image: "/homepage-desktop.png.jpeg",
      caseStudy: "https://www.behance.net/PrakashBlyr",
      secondaryImages: [
        "/Mobile reel mockup png.jpeg",
        "/home png mobile mockup.jpeg",
        "/login png mobile mockup.jpeg",
        "/sp;ash Scrren in Mobile mockup.jpeg"
      ]
    },
    {
      title: "SaaS Dashboard Design",
      subtitle: "B2B Product Interface",
      description: "Designed intuitive dashboard for Nepal-based SaaS startup helping small businesses manage inventory.",
      role: "UX/UI Designer",
      skills: ["User Flows", "Wireframing", "Prototyping", "Design System"],
      status: "Coming Soon",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce Redesign",
      subtitle: "Conversion Optimization",
      description: "Redesigned checkout flow for local e-commerce site, improving conversion rate by reducing friction points.",
      role: "UX/UI Designer",
      skills: ["User Research", "A/B Testing", "Conversion Design"],
      status: "Coming Soon",
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
                <div className={`h-64 relative overflow-hidden bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-500`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
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

                  {project.secondaryImages && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-bold text-gray-900 mb-2">View More:</p>
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {project.secondaryImages.map((img, i) => (
                          <div key={i} className="flex-shrink-0 w-16 h-28 rounded-lg overflow-hidden border border-gray-200 hover:border-purple-500 transition-colors cursor-pointer">
                            <img src={img} alt={`Mockup ${i + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-200 mt-auto flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{project.status}</span>
                    {project.caseStudy && (
                      <a
                        href={project.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-purple-600 hover:text-pink-600 transition-colors flex items-center gap-1"
                      >
                        Case Study ↗
                      </a>
                    )}
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