import React from 'react';
import { Calendar, Trophy, Users } from 'lucide-react';
import { useState } from "react";
import competitions from '../data/competitions-list'; // Competitions data import
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ShinyButton from '../components/shinyButton'; // Importing the shiny button component
import GradientText from '../components/gradientText';


// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <GradientText colors={["#3b82f6", "#8b5cf6", "#ec4899","#3b82f6"]} className="text-5xl md:text-7xl">
            Discover Real World 
            </GradientText>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Challenges
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-bold">
            9 elite challenges. One mission: win.
            <br />
            What you submit determines what happens next. 
            <br />
            You think you’ve got founder DNA?
            <br />
            Let’s see if it survives real execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-500">
              <Trophy className="w-5 h-5 mr-2" />
              <span>Elite Competitions</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Limited Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Competition Card Component
const CompetitionCard = ({ competition,isBlurred }) => {
  return (
    <div className={`bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(217,176,255,0.7)] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 p-6 border border-gray-100 group ${isBlurred ? "blur-sm opacity-50" : "blur-0 opacity-100"}`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {competition.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {competition.brief}
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{competition.deadline}</span>
        </div>
        <a href={`/${competition.slug}`}>
        <ShinyButton name="View Details" />
        {/* <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105">
          View Details
        </button> */}
        </a>
      </div>
    </div>
  );
};

// Competition Listing Component
const CompetitionListing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Active Competitions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your battleground. Each competition offers unique challenges and substantial rewards for the victorious.
          </p>
        </div>
        <div className="mb-8 ">
        <p className='text-red-500'>Note: </p> <p>You can submit in teams, but remember every Team Member has to make the submission with the same Team Name.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {competitions.map((competition, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <CompetitionCard competition={competition} isBlurred={hoveredIndex !== null && hoveredIndex !== index}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#000000] z-10 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Operation Zero
            </h3>
            <p className="text-gray-400  mx-auto">
            Observe. Execute. Rise.
              <br />
              Some will finish. A few will be chosen. Most will never be spoken to.
              <br />
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
            Deployed inside IIT Bombay. Purpose: Classification.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <CompetitionListing />
      <Footer />
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default Home;