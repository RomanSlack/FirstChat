export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">FirstChat</p>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
