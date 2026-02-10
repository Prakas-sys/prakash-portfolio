export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background circles - repositioned for split layout */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content - Text and CTA */}
        <div className="text-left space-y-8 order-2 lg:order-1">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient leading-tight">
              Prakash Balayar
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 font-semibold tracking-tight">
              Product Designer | <span className="text-purple-600">Entrepreneurship</span>
            </p>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            Building -<span className="font-bold text-purple-600">KHOZNA.com</span>-
            solving real housing problems through design-led business solutions.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:scale-105 transition-all shadow-xl hover:shadow-purple-200 text-lg">
              View Projects
            </a>
            <a href="#contact" className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl border-2 border-purple-500 text-lg">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Content - Visual Profile */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            {/* Artistic Frame Elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
            <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl"></div>
            <div className="relative w-full h-full rounded-[2rem] p-3 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
              <img
                src="/profile image.jpeg"
                alt="Prakash Balayar"
                className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-purple-100 animate-float">
              <span className="text-3xl">🚀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - repositioned */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <svg className="w-8 h-8 text-purple-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}