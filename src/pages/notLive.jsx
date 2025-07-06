import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NotLive = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-24">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Competition Not Live</h1>
            <p className="text-lg text-gray-600 mb-8">
            This competition is not currently live. Please check back later for updates.
            </p>

        </div>
        </div>
    );
    }
export default NotLive;