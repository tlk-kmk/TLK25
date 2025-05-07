// src/app/page.tsx
"use client";

import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import { LineAnimation } from 'src/components/LineAnimation';
import { LogoHover } from 'src/components/LogoHover';

const Scene = dynamic(() => import('src/components/Scene'), {
  ssr: false
})


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
          <p id="hero-text" className="type-base" style={{ maxWidth: '335px', textAlign: 'center', opacity: '0.8' }}>
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
            <img
              src="/logo.svg"
              alt="Logo"
              style={{ width: '21px', height: '14px' }}
            ></img>
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
          <p id="hero-text" className="type-base" style={{ maxWidth: '335px', textAlign: 'center', opacity: '0.8' }}>
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
              zIndex: '999'
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
              <img id="sm" src="/components/behance.svg" alt="Behance" style={{ width: '19px', height: '12px' }} />
            </a>
            <a ref={xRef} className="socialmedia" href="https://x.com/tlk_hh" target="_blank">
              <img id="sm" src="/components/x.svg" alt="X" style={{ width: '17.5px', height: '14px' }} />
            </a>
            <a ref={discordRef} className="socialmedia" href="https://discordapp.com/users/204274371622207488" target="_blank">
              <img id="sm" src="/components/discord.svg" alt="Discord" style={{ width: '20px', height: '16.25px' }} />
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
          <div className='logo-spiral' >
          <div
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1, // Ensure it's on top
            }}
            onContextMenu={(e) => e.preventDefault()} // Prevent context menu on the overlay
          />

            <img
              src="/components/spiral-logo-50.png"
              alt="Logo Spiral"
              style={{
                width:'100%',
                
              }}  
            />
          </div>
        </div>
      
        {/* TLK TYPE */}{/*
        <div style={{ position:'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='type-container'>
            <div
              style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1, // Ensure it's on top of the image
              }}
              onContextMenu={(e) => e.preventDefault()}
            />
            <img
              src="/components/tlk-abstracttype.svg"
              alt='timo leon krause'
              style={{
              width: '100%',
              
              }}
            />
          </div>
        </div>
        */}
        
        {/* 3D LOGO */}
        <div style={{ width: '100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className='threed'>
            <Scene/>
          </div>
        </div>
      </div>
    </div>
  );
}