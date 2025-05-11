'use client';
import React, { useRef } from 'react';
import { useGLTF, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Model(props) {
  const wingsRef = useRef();
  const headTailRef = useRef();

  const { nodes } = useGLTF('/components/tlk-min.glb');


  if (!nodes?.Type?.geometry || !nodes?.Wings?.geometry || !nodes?.HeadTail?.geometry) {
    console.warn('One or more geometries not found in GLTF');
    return null;
  }

  const staticRotation = [0, 0, 0];
  const typePosition = [0, 0, -124];
  const typeScale = [1.05, 1.05, 1];

  const whiteMaterial = React.useMemo(() => new THREE.MeshBasicMaterial({ color: 'white' }), []);


  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (wingsRef.current) {
      wingsRef.current.rotation.y = elapsed * 0.75;
    }
    if (headTailRef.current) {
      headTailRef.current.rotation.y = elapsed * 0.75;
    }
  });

  return (
    <>
      {/* Environment Lighting */}
      <Environment files="/hdr/studio-e.exr" background={false} />

      <group {...props} dispose={null} scale={[1, 1, 1]}>
        {/* Static Background Text */}
        <mesh
          geometry={nodes.Type.geometry}
          position={typePosition}
          material={whiteMaterial}
          scale={typeScale}
          renderOrder={0}
        />

        {/* Grouped Animating Logo Pieces */}
        <group position={[0, -8, -50]} rotation={staticRotation}>
          <mesh
            ref={wingsRef}
            geometry={nodes.Wings.geometry}
            position={[0, 40, 0]}
            renderOrder={1}
          >
            <MeshTransmissionMaterial
              thickness={16}
              roughness={0}
              transmission={0.99}
              ior={1.5}
              chromaticAberration={0.1}
              backside={false}
              clearcoat={1}
              depthWrite={false}
            />
          </mesh>

          <mesh
            ref={headTailRef}
            geometry={nodes.HeadTail.geometry}
            renderOrder={1}
          >
            <MeshTransmissionMaterial
              thickness={12}
              roughness={0}
              transmission={0.99}
              ior={1.5}
              chromaticAberration={0.1}
              backside
              clearcoat={1}
              depthWrite={false}
            />
          </mesh>
        </group>
      </group>
    </>
  );
}

export default React.memo(Model);
