
import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-t from-yellow-200 to-blue-300">
      {/* Sun */}
      <motion.div
        className="absolute w-20 h-20 bg-yellow-400 rounded-full shadow-2xl"
        animate={{ x: ['-10%', '50%', '110%'], y: ['80%', '5%', '80%'], opacity: [1, 1, 0, 0, 1] }}
        transition={{ duration: 40, repeat: Infinity }}
        style={{ left: '-10%', top: '80%' }}
      />

      {/* Moon */}
      <motion.div
        className="absolute w-16 h-16 bg-white rounded-full shadow-md"
        animate={{ x: ['-10%', '50%', '110%'], y: ['80%', '5%', '80%'], opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 40, repeat: Infinity, delay: 20 }}
        style={{ left: '-10%', top: '80%' }}
      />

      {/* Clouds */}
      <motion.div
        className="absolute top-20 left-0 w-40 h-12 bg-white rounded-full opacity-80"
        animate={{ x: ['-20%', '100%'] }}
        transition={{ duration: 60, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-32 left-1/3 w-32 h-10 bg-white rounded-full opacity-60"
        animate={{ x: ['0%', '120%'] }}
        transition={{ duration: 50, repeat: Infinity }}
      />

      {/* Stars */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 40, repeat: Infinity }}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ top: `${Math.random() * 50}%`, left: `${Math.random() * 100}%`, opacity: Math.random() }}
          />
        ))}
      </motion.div>

      {/* Tree and Swing */}
      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2">
        <svg viewBox="0 0 100 200" width="100" height="200">
          <path d="M50 200 Q45 150 50 100 Q55 150 50 200 Z" fill="#2f2f2f" />
          <line x1="40" y1="100" x2="40" y2="130" stroke="black" strokeWidth="2" />
          <line x1="60" y1="100" x2="60" y2="130" stroke="black" strokeWidth="2" />
          <rect x="40" y="130" width="20" height="5" fill="brown" />
          <motion.circle
            cx="50"
            cy="120"
            r="5"
            fill="black"
            animate={{ y: [0, -5, -10, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Buildings */}
      <div className="absolute bottom-0 left-20 w-16 h-40 bg-gray-800" />
      <div className="absolute bottom-0 left-40 w-12 h-32 bg-gray-700" />
      <div className="absolute bottom-0 left-64 w-20 h-36 bg-gray-900" />

      {/* Streetlight */}
      <div className="absolute bottom-0 right-10">
        <div className="w-1 h-24 bg-gray-700" />
        <motion.div
          className="w-4 h-4 rounded-full bg-yellow-300 mx-auto mt-1"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 40, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
