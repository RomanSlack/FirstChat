export default function Hero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Craft the Perfect First Message
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          FirstChat helps you analyze profiles and generate high-quality openers automatically.
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-full hover:bg-indigo-700 transition-colors shadow-md">
          Impress Instantly
        </button>
        
        <div className="mt-16 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-700 font-medium mb-2">AI-suggested opener:</p>
              <p className="text-gray-800 italic">"I noticed you're into photography too! Your Golden Gate Bridge sunset shot is stunning. What camera setup do you use?"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
