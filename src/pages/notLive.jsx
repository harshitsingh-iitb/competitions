import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlurText from '../components/BlurText';
import ShinyText from '../components/ShinyText';


const NotLive = (message) => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-24">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            <BlurText
                text="Competition Not Live"
                delay={300}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl md:text-6xl mb-8"/>
            </h1>
            <h1 className="text-lg text-black mb-8">
            <ShinyText text={message} disabled={false} speed={3}/>
            </h1>

        </div>
        </div>
    );
    }
export default NotLive;