

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
        <a href="#" className="block text-white hover:text-gray-400">প্রচ্ছদ</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">আজকের খবর</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">জাতীয়</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">রাজনীতি</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">দেশ</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">বিশেষ খবর</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">আন্তর্জাতিক</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">কলাম</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">ব্যবসা-বাণিজ্য</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">বিনোদন</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">খেলা</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">স্বাস্থ্য</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">শিক্ষা</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">ক্যাম্পাস</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">জীবনযাপন</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">জার্নি</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">তথ্যপ্রযুক্তি</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">চাকরি</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">আইন ও অপরাধ</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">আজকের আবহাওয়া</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">সাহিত্য</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">স্বাধীনতার ৫০</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">অন্যান্য</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">প্রেস রিলিজ</a>
      </li>
      <li>
        <a href="#" className="block text-white hover:text-gray-400">আর্কাইভ</a>
      </li>
        
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;