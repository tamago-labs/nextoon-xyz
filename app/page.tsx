"use client";

import Contents from "@/components/Landing/Contents";
import Feature from "@/components/Landing/Feature";
import Filler from "@/components/Landing/Filler";
import Hero from "@/components/Landing/Hero";
import Subscribe from "@/components/Landing/Subscribe";
import { useState, useEffect } from "react";
import { ChevronRight, Globe, Speaker, ArrowRight, BookOpen, Clock, TrendingUp } from "react-feather"

export default function App() {


  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      {/* <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 py-16 px-8 shadow-lg ">
        <div className="absolute  top-0 right-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-blue-400 opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 rounded-full bg-cyan-400 opacity-20"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Your Stories, <span className="text-blue-200">Every Language</span></h1>
          <p className="text-blue-100 mb-8 text-lg">AI-powered translations that capture the essence of webtoons across cultures.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-50 transition-colors flex items-center">
              Start Reading
              <ChevronRight size={18} className="ml-1" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center">
              For Creators
            </button>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center w-64 transform hover:scale-105 transition-transform">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <Globe size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">12+ Languages</h3>
              <p className="text-sm text-gray-600">Read in your native tongue</p>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center w-64 transform hover:scale-105 transition-transform">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <Speaker size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">AI Powered</h3>
              <p className="text-sm text-gray-600">Context-aware translations</p>
            </div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center w-64 transform hover:scale-105 transition-transform">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <BookOpen size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">10k+ Stories</h3>
              <p className="text-sm text-gray-600">Diverse content library</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 py-16 px-8 shadow-lg ">
        <div className="absolute w-64 h-64 rounded-full bg-blue-300/30 -top-20 -right-20 animate-pulse"></div>
        <div className="absolute w-48 h-48 rounded-full bg-cyan-300/20 top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 rounded-full bg-indigo-300/20 -bottom-32 -left-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
 
        <div className="relative z-10 py-8 px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-lg">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">AI-Powered Platform</span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Your Stories, <span className="text-blue-200">Every Language</span></h1>
              <p className="text-blue-100 mb-8 text-lg">Experience webtoons from around the world with our AI translation technology that preserves cultural nuances.</p>
              <div className="flex flex-wrap   gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-50 transition-colors flex items-center">
                  Start Reading
                  <ChevronRight size={18} className="ml-1" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center">
                  For Creators
                </button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-64 md:w-64 md:h-80 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-48 h-64 md:w-64 md:h-80 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                  <img src="/api/placeholder/300/400" alt="Webtoon preview" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> */}


      {/* <div className="relative overflow-hidden rounded-2xl mb-8 bg-white shadow-lg">

        <div className="absolute w-64 h-64 rounded-full bg-blue-300/30 -top-20 -right-20 animate-pulse"></div>
        <div className="absolute w-48 h-48 rounded-full bg-cyan-300/20 top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 rounded-full bg-indigo-300/20 -bottom-32 -left-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 py-16 px-8 md:px-12 lg:px-16 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-lg">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">AI-Powered Platform</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">Read <span className="text-blue-500">Global Stories</span> in Your Language</h1>
              <p className="text-gray-600 mb-8 text-lg">Experience webtoons from around the world with our AI translation technology that preserves cultural nuances.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors flex items-center">
                  Start Reading
                  <ChevronRight size={18} className="ml-1" />
                </button>
                <button className="bg-transparent text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center">
                  For Creators
                </button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-64 md:w-64 md:h-80 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-48 h-64 md:w-64 md:h-80 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                  <img src="/api/placeholder/300/400" alt="Webtoon preview" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Hero />

      <Contents />
      <Filler />

      <Feature />


      <Subscribe />


      <section className="py-12 my-12">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {[
        {
          question: "How does the AI translation work?",
          answer: "Our AI translation system analyzes the original content's context, humor, and cultural references to create a translation that preserves the creator's intent and style, not just literal meaning."
        },
        {
          question: "What languages are supported?",
          answer: "We currently support 12 languages including English, Spanish, French, German, Japanese, Korean, and Chinese. We're constantly adding more languages based on user demand."
        },
        {
          question: "Is the platform free to use?",
          answer: "The basic platform is free with a selection of webtoons. Premium subscribers get access to our full catalog, early access to new episodes, and ad-free reading."
        },
        {
          question: "Can I create and publish my own webtoon?",
          answer: "Yes! Creators can sign up for a creator account to publish their own webtoons. Our AI translation tools can help expand your audience to readers around the world."
        }
      ].map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
          <p className="text-gray-600">{item.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
