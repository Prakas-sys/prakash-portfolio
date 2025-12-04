export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-white">
          Let's Build Something Together
        </h2>
        <p className="text-xl text-purple-100 mb-12">
          Open to: Collaborations, startup opportunities, design projects, conversations with fellow builders
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:prakashbalayar92@gmail.com" className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform group">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-sm text-purple-600 group-hover:underline">prakashbalayar92@gmail.com</p>
          </a>
          
          <a href="https://www.linkedin.com/in/prakash-balayar" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform group">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-sm text-purple-600 group-hover:underline">Connect with me</p>
          </a>
          
          <a href="https://wa.me/9779863590097" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform group">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-sm text-purple-600 group-hover:underline">9863590097</p>
          </a>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
         <h3 className="text-2xl font-bold text-white mb-4">🚀 2026 Focus</h3>
<ul className="text-left text-purple-100 space-y-2 max-w-2xl mx-auto">
  <li>✨ Launch KHOZNA MVP and validate product-market fit</li>
  <li>📊 Build comprehensive case studies demonstrating ROI</li>
  <li>🤝 Collaborate with founders and design leaders</li>
  <li>💼 Take on challenging projects that drive business growth</li>
  <li>📚 Continue learning and expanding skill set</li>
</ul>
        </div>
        
        <div className="mt-12">
          <p className="text-white text-lg mb-4">Based in Kathmandu, Nepal</p>
          <p className="text-purple-200">
            "My goal isn't just graduation—it's building businesses that create value."
          </p>
        </div>
      </div>
    </section>
  )
}