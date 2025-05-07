'use client';

import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import { LineAnimation } from '@/components/LineAnimation'; // Using '@/components' alias
import { LogoHover } from '@/components/LogoHover';      // Using '@/components' alias
import Image from 'next/image';

const Scene = dynamic(() => import('@/components/Scene'), { // Using '@/components' alias
  ssr: false
});

export default function Home() {
  const behanceRef = useRef<HTMLAnchorElement>(null);
  const xRef = useRef<HTMLAnchorElement>(null);
  const discordRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (behanceRef.current) {
      LogoHover(behanceRef.current);
    }
    if (xRef.current) {
      LogoHover(xRef.current);
    }
    if (discordRef.current) {
      LogoHover(discordRef.current);
    }
  }, []); // Empty dependency array - runs only once after initial render

  return (
    <div className="fundament">
      <div className="content-frame">
        <LineAnimation />
  
        {/* TOP TYPE */}
        <div className="hero-type-top">
          {/* TEXT */}
          <p
            id="hero-text"
            className="type-base"
            style={{ maxWidth: '335px', textAlign: 'center', opacity: '0.8' }}
          >
            THE PHENOMENON OF <span className="special-char">A</span> SLIGHT <span className="special-char">A</span>CTION LE<span className="special-char">A</span>DING TO SIGNIFICANT IMP<span className="special-char">A</span>CTS.
          </p>
  
          {/* LINES & LOGO */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="line"
              style={{
                width: '16px',
                height: '1px',
                backgroundColor: '#A3A9BD',
              }}
            ></div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={21} // Corrected here
              height={14} // Corrected here
            />
            <div
              className="line"
              style={{
                width: '16px',
                height: '1px',
                backgroundColor: '#A3A9BD',
              }}
            ></div>
          </div>
        </div>
  
        {/* BOTTOM TYPE */}
        <div className="hero-type-bottom">
          {/* TEXT */}
          <p
            id="hero-text"
            className="type-base"
            style={{ maxWidth: '335px', textAlign: 'center', opacity: '0.8' }}
          >
            PRODUCT DESIGN <span className="grey-text">/</span> <span className="special-char">BRAND IDENTITY</span>
          </p>
  
          {/* SOCIAL MEDIA CONTAINER */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '999',
            }}
          >
            <div
              className="line"
              style={{
                width: '16px',
                height: '1px',
                backgroundColor: '#A3A9BD',
              }}
            ></div>
            <a ref={behanceRef} className="socialmedia" href="https://www.behance.net/tlk-hh" target="_blank">
              <Image id="sm" src="/components/behance.svg" alt="Behance" width={19} height={12} />
            </a>
            <a ref={xRef} className="socialmedia" href="https://x.com/tlk_hh" target="_blank">
              <Image id="sm" src="/components/x.svg" alt="X" width={17.5} height={14} />
            </a>
            <a ref={discordRef} className="socialmedia" href="https://discordapp.com/users/204274371622207488" target="_blank">
              <Image id="sm" src="/components/discord.svg" alt="Discord" width={20} height={16.25} />
            </a>
            <div
              className="line"
              style={{
                width: '16px',
                height: '1px',
                backgroundColor: '#A3A9BD',
              }}
            ></div>
          </div>
        </div>
  
        {/* ROTATING SPIRAL */}
        <div className="spiral-container">
          <div className="logo-spiral">
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
              }}
              onContextMenu={(e) => e.preventDefault()} // Prevent context menu on the overlay
            />
            <Image
              src="/components/spiral-logo-50.png"
              alt="Logo Spiral"
              width={1000} // Corrected here (number, not string)
              height={1000} // Corrected here (number, not string)
              layout="responsive" // Makes the image scale according to its container
            />
          </div>
        </div>
  
        {/* 3D LOGO */}
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="threed">
            <Scene />
          </div>
        </div>
      </div>
    </div>
  );
}
