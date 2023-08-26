

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-50 ">
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 transform transition duration-700 ease-linear">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={closeSidebar}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="px-4 py-8">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="block text-white hover:text-gray-400"
              >
                Home
              </a>
            </li>
            {/* Add more navigation links */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;