'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [startExit, setStartExit] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    const minTimer = setTimeout(() => setMinTimePassed(true), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(minTimer);
    };
  }, []);

  // Trigger exit animations
  useEffect(() => {
    if (progress >= 100 && minTimePassed) {
      const delay = setTimeout(() => {
        setStartExit(true);
        setTimeout(() => {
          onComplete();
        }, 1700); // 1.2s animation + 0.5s delay
      }, 300);
      return () => clearTimeout(delay);
    }
  }, [progress, minTimePassed, onComplete]);
// Force Vercel rebuild

  return (
    <>
      {/* Main black loader panel */}
      <AnimatePresence>
        {!startExit && (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: '#0B0B0D',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              color: '#fff',
              pointerEvents: 'none',
            }}
          >
            {/* Logo */}
            <Image src="/logo.svg" alt="Logo" width={84} height={56} />

            {/* Progress percentage */}
            <div
              style={{
                position: 'absolute',
                bottom: '5%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ fontSize: '6rem' }}
              >
                {progress}%
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trailing white inverter panel */}
      {startExit && (
        <motion.div
          key="trailing-inverter"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.85, 0, 0.15, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            backgroundColor: '#fff',
            mixBlendMode: 'difference',
            pointerEvents: 'none',
          }}
        />
      )}
    </>
  );
}
