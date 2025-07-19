import React, { useState, useEffect } from 'react';
import { Home, Calendar, Target, FileText, Upload, Award , ArrowUp} from 'lucide-react';
import HomeButton from '../components/homebutton';
import Navbar from '../components/Navbar';

export default function CompetitionShowcase({ competition }) {
  const handleClick = () => {
    // Show alert that submissions open 25th July
    alert("Submissions will open 25th July.");
    // window.open("https://forms.gle/smbwab1tpmZUfHpw6", "_blank");
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Navigation */}
    <Navbar />

      {/* Hero Section */}
      <header className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1   className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-800 via-purple-600 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            {competition.name}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        {/* Description Section */}
        <section className="mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-purple-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-800">Competition Brief</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p   className="mb-4">
               {competition.description}
              </p>
            </div>
          </div>
        </section>

        {/* Grid Layout for Competition Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Input Section */}
          <section className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FileText className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Information to be Reported</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <p   >{competition.input}</p>
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Competition Goals</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <p   >{competition.goals}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Expected Output Section */}
        <section className="mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-purple-800 rounded-xl flex items-center justify-center">
                <Upload className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Expected Output</h2>
            </div>
            <div className=" md:grid-cols-3 gap-6">
                <p   className="text-gray-700">{competition.output}</p>
            </div>
          </div>
        </section>

        {/* Deadline and Submission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Deadline Section */}
          <section className="bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Important Deadline</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-purple-300 font-semibold mb-2">Final Submission Date</p>
                <p   className="text-3xl font-bold text-white mb-2">{competition.deadline}</p>
                <p className="text-gray-300">11:59 PM IST</p>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>• Late submissions will not be accepted</p>
              </div>
            </div>
          </section>

          {/* Submission Section */}
          <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Upload className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Submit Your Entry</h3>
            </div>
            <div id="submission-status">
    Login With Your LDAP ID to submit the form.
  </div>
            <div id="submission-link" className='pt-5'>
            <a   href={competition.submitLink}>
            <button onClick={handleClick} className="w-full bg-white text-purple-700 font-bold py-4 px-8 rounded-2xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
              Submit Here
            </button>
            </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}
