const Navbar = () => {
    return (
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-baseline">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Operation Zero
              </h1>
              <span className="inline-flex items-centre px-2 py-1 text-xs font-medium text-orange-800 bg-orange-100 rounded-full border border-orange-200">
             BETA
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Home
                </a>
                <a href="/leaderboard" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Leaderboard
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;