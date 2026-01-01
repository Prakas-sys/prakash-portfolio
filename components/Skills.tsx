export default function Skills() {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: "🎨",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "UX Process",
      icon: "🔍",
      skills: ["User Research", "Wireframing", "Prototyping", "User Testing", "Information Architecture"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Development",
      icon: "💻",
      skills: ["HTML", "CSS", "JavaScript Basics", "Responsive Design", "Webflow", "Framer"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Business",
      icon: "📊",
      skills: ["Market Research", "Product Strategy", "Customer Acquisition", "Unit Economics", "BBS Student"],
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          My Arsenal
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Design execution + Business thinking = Unfair advantage
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className={`bg-gradient-to-br ${category.color} p-1 rounded-3xl`}>
                <div className="bg-white p-8 rounded-3xl h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning section removed as per request */}
      </div>
    </section>
  )
}