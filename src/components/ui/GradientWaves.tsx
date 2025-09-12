'use client'

import { motion } from 'framer-motion'

export function GradientWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.563 0.131 196.177)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.491 0.142 196.177)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="oklch(0.563 0.131 196.177)" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="wave2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.95 0.01 196)" stopOpacity="0.7" />
            <stop offset="50%" stopColor="oklch(0.9 0.05 196)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="oklch(0.95 0.01 196)" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="wave3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.563 0.131 196.177)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="oklch(0.95 0.01 196)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
          fill="url(#wave1)"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            d: [
              "M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z",
              "M0,300 C300,500 600,100 1200,400 L1200,800 L0,800 Z",
              "M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
            ]
          }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            d: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.path
          d="M0,600 C400,300 800,800 1200,500 L1200,800 L0,800 Z"
          fill="url(#wave2)"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            d: [
              "M0,600 C400,300 800,800 1200,500 L1200,800 L0,800 Z",
              "M0,500 C400,700 800,200 1200,600 L1200,800 L0,800 Z",
              "M0,600 C400,300 800,800 1200,500 L1200,800 L0,800 Z"
            ]
          }}
          transition={{
            pathLength: { duration: 2, delay: 0.5, ease: "easeInOut" },
            d: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }
          }}
        />

        <motion.path
          d="M0,700 C200,500 1000,600 1200,400 L1200,800 L0,800 Z"
          fill="url(#wave3)"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            d: [
              "M0,700 C200,500 1000,600 1200,400 L1200,800 L0,800 Z",
              "M0,600 C200,800 1000,300 1200,700 L1200,800 L0,800 Z",
              "M0,700 C200,500 1000,600 1200,400 L1200,800 L0,800 Z"
            ]
          }}
          transition={{
            pathLength: { duration: 2, delay: 1, ease: "easeInOut" },
            d: { duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }
          }}
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
    </div>
  )
}