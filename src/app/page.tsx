'use client';

import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import { LineAnimation } from '@/components/LineAnimation';
import { LogoHover } from '@/components/LogoHover';
import Loader from '@/components/Loader';
import Image from 'next/image';
import { useIsMobile } from '@/components/MobileCheck';

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Home() {
  const behanceRef = useRef<HTMLAnchorElement>(null);
  const xRef = useRef<HTMLAnchorElement>(null);
  const discordRef = useRef<HTMLAnchorElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (behanceRef.current) LogoHover(behanceRef.current);
    if (xRef.current) LogoHover(xRef.current);
    if (discordRef.current) LogoHover(discordRef.current);
  }, []);

  return (
    <>
      <Loader onComplete={() => {}} />

      <div className="fundament">
        
        <div className="content-frame">
          <LineAnimation />

          {/* TOP TYPE */}
          <div className="hero-type-top">
            <p
              id="hero-text"
              className="type-base"
              style={{ textAlign: 'center', opacity: '0.8', width: '375px' }}
            >
              THE PHENOMENON OF <span className="special-char">A</span> SLIGHT <span className="special-char">A</span>CTION LE<span className="special-char">A</span>DING TO SIGNIFICANT IMP<span className="special-char">A</span>CTS.
            </p>
         
            {/*
            <div className="line" style={{ width: '16px', height: '1px', backgroundColor: '#696F8A' }} />
            */}
          </div>

          {/* TOP RIGHT */}
          <div className='hero-right'>
              
              <div className="line" style={{ width: '16px', height: '1px', backgroundColor: '#696F8A' }} />
              <Image
                  src="/logo.svg"
                  alt="Logo"
                  priority
                  unoptimized
                  width={24}
                  height={16}
              />
          </div>

          {/* TOP LEFT */}
          <div className='hero-left'>
            <Image
            src="/tlk-type.svg"
            alt="Type"
            priority
            unoptimized
            width={88}
            height={32}
            />
            
            {/*
            <div className="line" style={{ width: '16px', height: '1px', backgroundColor: '#696F8A' }} />
            */}
          </div>

          {/* BOTTOM TYPE */}
          <div className="hero-type-bottom">
            <p
              id="hero-text"
              className="type-base"
              style={{ maxWidth: '80vw', textAlign: 'center', opacity: '0.8' }}
            >
              PRODUCT DESIGN <span className="grey-text">/</span>{' '}
              <span className="special-char">BRAND IDENTITY</span>
            </p>

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
              <div className="line" style={{ width: '16px', height: '1px', backgroundColor: '#696F8A' }} />
              <a ref={behanceRef} className="socialmedia" href="https://www.behance.net/tlk-hh" target="_blank">
                <Image id="sm" src="/components/behance.svg" alt="Behance" width={19} height={12} />
              </a>
              <a ref={xRef} className="socialmedia" href="https://x.com/tlk_hh" target="_blank">
                <Image id="sm" src="/components/x.svg" alt="X" width={17.5} height={14} />
              </a>
              <a
                ref={discordRef}
                className="socialmedia"
                href="https://discordapp.com/users/204274371622207488"
                target="_blank"
              >
                <Image id="sm" src="/components/discord.svg" alt="Discord" width={20} height={16.25} />
              </a>
              <div className="line" style={{ width: '16px', height: '1px', backgroundColor: '#696F8A' }} />
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
                onContextMenu={(e) => e.preventDefault()}
              />
              <Image
                src={isMobile ? '/components/spiral-logo-50-mobile.png' : '/components/spiral-logo-50.png'}
                alt="Logo Spiral"
                width={1000}
                height={1000}
                layout="responsive"
                priority
              />
            </div>
          </div>

          {/* 3D LOGO */}
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="threed">
              <Scene />
              <div className="glow-container">
                <div className="glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
