export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden shadow-2xl">
            <img
              src="/profile image.jpeg"
              alt="Prakash Balayar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient">
          Prakash Balayar
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-gray-700 font-medium">
          Product Designer | Figuring out Entrepreneurship
        </p>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm not your typical design student. Building -<span className="font-bold text-purple-600">KHOZAN</span> -
          solving real housing problems through design.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg border-2 border-purple-600">
            Let's Talk
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}