import Image from 'next/image';
"use client"

export default function FeatureDisplay() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">See How It Works</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Process</h3>
            <ol className="space-y-4">
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full mr-3">1</span>
                <div>
                  <p className="font-medium">Profile Analysis</p>
                  <p className="text-gray-600">Our AI analyzes the profile to identify interests, style, and conversation hooks.</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full mr-3">2</span>
                <div>
                  <p className="font-medium">Message Crafting</p>
                  <p className="text-gray-600">Using profile insights, we craft personalized messages that show genuine interest.</p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full mr-3">3</span>
                <div>
                  <p className="font-medium">Review & Send</p>
                  <p className="text-gray-600">Copy the message, send it, and start meaningful conversations that get responses.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Profile Analysis</h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden relative">
                  <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Sophia Martinez, 26</p>
                  <p className="text-gray-600 text-sm">Photographer & Adventure Enthusiast</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Adventure seeker & nature lover. Passionate about photography, yoga, and finding hidden cafés. Looking for someone to explore with!
              </p>
              
              <div className="grid grid-cols-3 gap-2">
                {/* All random images */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
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
                  "Hi Sophia! I was blown away by your sunrise shots from what looks like Sedona - the colors are incredible! I've been hiking those trails myself and can never seem to capture the landscape that well. What's your secret for those perfect composition shots? Also, if you're up for an adventure, I found this amazing hidden waterfall trail that would be perfect for your photography style."
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
        
        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">What Our Users Say</h3>
          
          <div className="relative">
            <div className="testimonial-carousel overflow-hidden">
              <div className="flex testimonial-slides transition-transform duration-500 ease-in-out">
                {/* Testimonial 1 */}
                <div className="testimonial-slide min-w-full">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Reviewer" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Michael Reed, 26</p>
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "FirstChat was a game-changer for me. Before using it, I struggled with getting responses from matches. Now I'm having meaningful conversations that actually lead somewhere. Their AI somehow captures my voice while making me sound more interesting!"
                    </p>
                  </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="testimonial-slide min-w-full">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Reviewer" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Jason Parker, 27</p>
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "I was skeptical at first, but this app saved my dating life. I went from barely getting replies to setting up dates within days. The messages it creates are so natural - they reference specific details from profiles in a way that doesn't feel forced or creepy. Worth every penny!"
                    </p>
                  </div>
                </div>
                
                {/* Testimonial 3 */}
                <div className="testimonial-slide min-w-full">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Reviewer" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Ryan Thomas, 33</p>
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "As someone who's always been awkward with first messages, this tool has been incredible. It analyzes profiles so thoroughly and creates openers that actually get conversations flowing. My match rate has tripled since I started using it. Can't recommend it enough!"
                    </p>
                  </div>
                </div>
                
                {/* Testimonial 4 */}
                <div className="testimonial-slide min-w-full">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Reviewer" className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">Daniel Wilson, 29</p>
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "Online dating was frustrating before I found FirstChat. The personalized messages it creates are spot-on - they show I've actually looked at her profile without being weird about it. I'm getting way more responses and actual dates now. This app literally pays for itself!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button 
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-300 focus:outline-none carousel-dot"
                  data-index={index}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none" aria-label="Previous slide">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none" aria-label="Next slide">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
