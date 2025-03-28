"use client"

import { useState } from "react"
import { Menu, X, Search, Bell, User, Globe, ChevronDown } from "react-feather"
import Link from "next/link"
import { useRouter, usePathname } from 'next/navigation'
import AuthButton from "./AuthButton"

const Header = () => {
 
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ko', name: '한국어' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '中文' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' }
  ];

  const handleLanguageChange = (language: any) => {
    setCurrentLanguage(language);
    setIsLanguageMenuOpen(false);
  };


  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section: Logo and navigation */}
          <div className="flex items-center">
            <button
              className="p-2 rounded-md text-gray-700 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>

            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                <img src="./images/torotoon-logo-2.png" className="w-[160px]" alt="logo" />
              </div>
            </div>

            <div className="hidden lg:ml-8 lg:flex lg:space-x-8">
              <Link href="/" className={` ${pathname === "/" ? "border-blue-500 border-b-2 text-blue-600" : "border-transparent text-gray-700 hover:border-blue-300 hover:text-blue-500"}  px-3 py-5 text-sm font-medium`}>Home</Link>
              <Link href="/originals" className={`${pathname === "/originals" ? "border-blue-500 border-b-2 text-blue-600" : "border-transparent text-gray-700 hover:border-blue-300 hover:text-blue-500"} px-3 py-5 border-b-2 text-sm font-medium`}>Originals</Link>
              <Link href="/genres" className={`${pathname === "/genres" ? "border-blue-500 border-b-2 text-blue-600" : "border-transparent text-gray-700 hover:border-blue-300 hover:text-blue-500"} px-3 py-5 border-b-2 text-sm font-medium`}>Genres</Link>
              {/* <Link href="/rankings" className={`${pathname === "/rankings" ? "border-blue-500 border-b-2 text-blue-600" : "border-transparent text-gray-700 hover:border-blue-300 hover:text-blue-500"} px-3 py-5 border-b-2 text-sm font-medium`}>Rankings</Link> */}
              <Link href="/create" className={`${pathname === "/create" ? "border-blue-500 border-b-2 text-blue-600" : "border-transparent text-gray-700 hover:border-blue-300 hover:text-blue-500"} px-3 py-5 border-b-2 text-sm font-medium`}>Create</Link>
            </div>
          </div>

          {/* Right section: Search, Language, Notifications, Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-100 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Search webtoons..."
              />
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 px-2 py-1.5 rounded-md hover:bg-blue-50"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="true"
              >
                <Globe size={18} className="mr-1" />
                <span className="hidden sm:inline-block text-sm mr-1">{currentLanguage}</span>
                <ChevronDown size={16} />
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`${language.name === currentLanguage ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        } group flex items-center w-full px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600`}
                      onClick={() => handleLanguageChange(language.name)}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* <button className="p-1.5 rounded-full text-gray-700 hover:bg-gray-200" aria-label="Notifications">
              <Bell size={20} />
            </button>

            <button className="flex items-center p-1 rounded-full text-gray-700 hover:bg-gray-200" aria-label="User profile">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center text-white font-medium text-sm">
                JP
              </div>
            </button> */}
            <AuthButton/>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute bg-white rounded-b-lg" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="/" className={` ${pathname === "/" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 "}  block pl-3 pr-4 py-2 rounded-md text-base font-medium`}>Home</Link>
              <Link href="/originals" className={`${pathname === "/originals" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 "} block pl-3 pr-4 py-2 rounded-md text-base font-medium`}>Originals</Link>
              <Link href="/genres" className={`${pathname === "/genres" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 "} block pl-3 pr-4 py-2 rounded-md text-base font-medium`}>Genres</Link>
              {/* <Link href="/rankings" className={`${pathname === "/rankings" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 "} block pl-3 pr-4 py-2 rounded-md text-base font-medium`}>Rankings</Link> */}
              <Link href="/create" className={`${pathname === "/create" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 "} block pl-3 pr-4 py-2 rounded-md text-base font-medium`}>Create</Link>
            </div>

            {/* Mobile Search */}
            <div className="pt-2 pb-4 px-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-100 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  type="text"
                  placeholder="Search webtoons..."
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header