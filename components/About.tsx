export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          My Unfair Advantage
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-900">The Story</h3>
              <p className="text-gray-700 leading-relaxed">
                While most people my age are just starting college, I spent a year after +2
                building real products, learning UX/UI deeply, and understanding what it takes
                to create solutions people actually use.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">What I Bring</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✨ UX/UI design focused on business outcomes, not just aesthetics</li>
                <li>🚀 Real product development experience (not just academic projects)</li>
                <li>💡 Understanding of market needs from researching real problems</li>
                <li>📊 Strategic thinking: connecting design decisions to revenue</li>
              </ul>
            </div>

            {/* Current Focus section removed as per request */}
          </div>

          <div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-1 rounded-3xl">
              <div className="bg-white p-8 rounded-3xl">
                <h3 className="text-3xl font-bold mb-6 text-purple-900">Building Solutions That Matter</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I focus on understanding real user problems and creating design solutions
                  that deliver measurable business results. Every project is an opportunity
                  to solve meaningful challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🎨</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Design Execution</h4>
                      <p className="text-gray-600">I can build the product myself, not just hire designers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">💼</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Business Fundamentals</h4>
                      <p className="text-gray-600">Market analysis, unit economics, customer acquisition</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🧠</span>
                    <div>
                      <h4 className="font-bold text-gray-900">User Psychology</h4>
                      <p className="text-gray-600">Understanding why people buy and how to reduce friction</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-800 font-semibold italic">
                  "Most entrepreneurs can't design. Most designers can't build businesses. I'll do both."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}