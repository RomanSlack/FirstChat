export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">FirstChat</div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            Break the Ice For Me
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
