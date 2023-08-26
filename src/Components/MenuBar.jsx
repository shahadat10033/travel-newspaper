import { useState } from "react";
import Sidebar from './Sidebar';
import "./menubar.css"


const MenuBar = () => {


  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

    return (

      <>



<div className="hide overflow-auto  ">


<nav className="bg-gray-800 py-4">
      <div className="max-w-7xl text-sm ">
        <ul className="flex space-x-4 ">
          <li>
            <a href="#" className="text-white hover:text-gray-400">প্রচ্ছদ</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">আজকের খবর</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">জাতীয়</a>
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
      </div>
    </nav>


</div>

        <div className="navbar bg-base-100">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div> */}


<button
          onClick={toggleSidebar}
          className="text-black focus:outline-none "
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
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>







  </div>
  <div className="navbar-center relative">
    <a className="btn btn-ghost normal-case text-2xl font-bold"> ভ্রমণ
    <span className="text-red-600"> নিউজ ২৪
    </span></a><small className=" font-bold absolute top-9 right-5" style={{fontSize:"8px"}}> সময় থাকতে ঘুরে আসুন
    </small>
    
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    
  </div>
 
  {sidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}


</div>
<hr className="  border-t-2 border-gray-800 my-4 "/>
</>
    );
};

export default MenuBar;