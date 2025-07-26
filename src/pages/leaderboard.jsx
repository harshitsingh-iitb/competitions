import React, { useState } from 'react';
import { Trophy, Medal, Award, Users, Calendar, Target } from 'lucide-react';
import competitions from '../data/competitions-list'; 
import mockLeaderboardData from '../data/data'; 
import { Typewriter } from 'react-simple-typewriter';

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

const Leaderboard = () => {
  const [selectedChallenge, setSelectedChallenge] = useState('all');
  const [sortBy, setSortBy] = useState('score');

  // Filter and sort leaderboard data
  const filteredData = selectedChallenge === 'all' 
    ? mockLeaderboardData 
    : mockLeaderboardData.filter(user => user.challengeSlug === selectedChallenge);

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'date') return new Date(b.submissionDate) - new Date(a.submissionDate);
    return a.name.localeCompare(b.name);
  });

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Award className="w-5 h-5 text-amber-600" />;
    return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-600">#{rank}</span>;
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 70) return 'text-blue-600 bg-blue-50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const selectedChallengeInfo = competitions.find(comp => comp.slug === selectedChallenge);
  if (mockLeaderboardData.length === 0) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
           <Navbar />
           <div className="text-center mb-8 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Challenge Leaderboard</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your performance across all challenges and see how you rank against other participants
          </p>
        </div>
        <h1 className="text-black font-bold text-xl">
      <Typewriter
        words={['The Leaderboard is currently empty. It will be updated starting 30th July. Check back later for updates!']}
        loop={1}             

        typeSpeed={20}
        deleteSpeed={0}      
        delaySpeed={0}       
      />
    </h1>
        </div>
        
      );
  } else {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Challenge Leaderboard</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your performance across all challenges and see how you rank against other participants
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Participants</p>
                <p className="text-2xl font-bold text-gray-900">{filteredData.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Score</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredData.length > 0 ? Math.round(filteredData.reduce((acc, user) => acc + user.score, 0) / filteredData.length) : 0}
                </p>
              </div>
              <Target className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Challenges</p>
                <p className="text-2xl font-bold text-gray-900">{competitions.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Challenge</label>
                <select 
                  value={selectedChallenge}
                  onChange={(e) => setSelectedChallenge(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="all">All Challenges</option>
                  {competitions.map(comp => (
                    <option key={comp.slug} value={comp.slug}>{comp.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="score">Score (Highest)</option>
                  <option value="date">Submission Date</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>

            {selectedChallengeInfo && (
              <div className="bg-blue-50 rounded-lg p-4 max-w-md">
                <h4 className="font-semibold text-blue-900 mb-1">{selectedChallengeInfo.name}</h4>
                <p className="text-sm text-blue-700 mb-2">Deadline: {selectedChallengeInfo.deadline}</p>
                <p className="text-xs text-blue-600">{selectedChallengeInfo.input}</p>
              </div>
            )}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedChallenge === 'all' ? 'Overall Rankings' : `${selectedChallengeInfo?.name} Rankings`}
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Challenge</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedData.map((user, index) => (
                  <tr key={user.userId} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getRankIcon(user.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
   
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">ID: {user.userId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {competitions.find(comp => comp.slug === user.challengeSlug)?.name || user.challengeSlug}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getScoreColor(user.score)}`}>
                        {user.score}/100
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.submissionDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {sortedData.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No participants found for the selected challenge.</p>
            </div>
          )}
        </div>

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
    </div>
  );
}};

export default Leaderboard;