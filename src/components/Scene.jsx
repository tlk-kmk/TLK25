'use client';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import Model from './Model';

// Preload GLTF to ensure it's cached
useGLTF.preload('/components/tlk-min.gltf');

function Scene() {
  const [size, setSize] = useState({ width: 800, height: 800 });
  const containerRef = useRef(null);

  // Initialize size based on container dimensions
  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setSize({ width: clientWidth, height: clientHeight });
    }
  }, []);

  // Handle resize with debouncing
  const handleResize = useCallback(([entry]) => {
    const { width, height } = entry.contentRect;
    setSize({ width, height });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [handleResize]);

  // Clean up Three.js resources on unmount
  const CleanUp = () => {
    const { gl, scene } = useThree();
    useEffect(() => {
      return () => {
        // Dispose of renderer resources
        gl.dispose();
        // Clear scene objects
        scene.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (object.material.isMaterial) {
              object.material.dispose();
            }
          }
        });
      };
    }, [gl, scene]);
    return null;
  };

  // Simple error boundary component
  class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return <div style={{ color: 'red', textAlign: 'center' }}>Failed to render 3D model</div>;
      }
      return this.props.children;
    }
  }

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 45, near: 1, far: 140 }}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' }}
          onCreated={({ gl }) => {
            console.log('WebGL version:', gl.capabilities.isWebGL2 ? 'WebGL2' : 'WebGL1');
          }}
          style={{ width: size.width, height: size.height }}
        >  

          <Model />

          <CleanUp />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

export default React.memo(Scene);