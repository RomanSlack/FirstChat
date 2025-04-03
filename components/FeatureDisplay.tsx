import Image from 'next/image';

export default function FeatureDisplay() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">See How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Profile Analysis</h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden relative">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Alex Johnson, 28</p>
                  <p className="text-gray-600 text-sm">Photographer & Coffee Enthusiast</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Travel addict, always chasing sunsets. Into hiking, photography, and trying new coffee shops. Let's swap travel stories!
              </p>
              
              <div className="grid grid-cols-3 gap-2">
                {/* First image is Guy1.png */}
                <div className="aspect-square bg-gray-200 rounded-md overflow-hidden relative">
                  <Image 
                    src="/Guy1.png" 
                    alt="Gallery image 1" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Rest are random images */}
                {[2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                    <img 
                      src={`https://picsum.photos/200/200?random=${i}`} 
                      alt={`Gallery image ${i}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Message Section */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">AI-Generated Message</h3>
              
              <div className="bg-indigo-50 p-5 rounded-xl mb-8">
                <p className="text-gray-800">
                  "Hey Alex! Those sunset shots in your gallery are stunning - especially the one from what looks like the Pacific Coast Highway. I'm a fellow photography enthusiast who's been trying to perfect my golden hour technique. Any tips for capturing those perfect sky colors? Also, if you're up for it, I know a hidden coffee spot in town that roasts their own beans you might want to check out!"
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-4 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                Regenerate Message
              </button>
              <button className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Copy Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
