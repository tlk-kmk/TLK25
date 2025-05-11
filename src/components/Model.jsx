'use client';
import React, { useRef } from 'react';
import { useGLTF, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshBasicMaterial } from 'three';
import * as THREE from 'three';

function Model(props) {
  const logoMesh = useRef();
  const { nodes } = useGLTF('/components/tlk-min.gltf');
  const { scene } = useThree();

  if (!nodes?.TlkLogo?.geometry) {
    console.warn('TlkLogo geometry not found in GLTF');
    return null;
  }

  if (!nodes?.Type?.geometry) {
    console.warn('Type geometry not found in GLTF');
    return null;
  }

  const staticRotation = [-0.05, 0, 0];
  const typePosition = [0, 0, -124];
  const typeScale = [1.05, 1.05, 1];

  const whiteMaterial = React.useMemo(() => new THREE.MeshBasicMaterial({ color: 'white' }), []);

  useFrame(({ clock }) => {
    if (logoMesh.current) {
    const elapsed = clock.getElapsedTime();
    logoMesh.current.rotation.y = elapsed * 1; 
    }
  });





  return (
    <>
      {/* Realistic lighting and reflections */}
      <Environment
        files="/hdr/studio-e.exr"
        background={false}
      />
      

      <group {...props} dispose={null} scale={[0.025, 0.025, 0.025]}>
        {/* BACKGROUND TEXT */}
        <mesh
          geometry={nodes.Type.geometry}
          position={typePosition}
          material={whiteMaterial}
          scale={typeScale}
          renderOrder={0}
        />


        {/* TRANSMISSIVE LOGO */}
        <mesh
          ref={logoMesh}
          geometry={nodes.TlkLogo.geometry}
          rotation={staticRotation}
          position={[0, 0, 10]}
          renderOrder={1}
        >
          <MeshTransmissionMaterial
            thickness={12}
            roughness={0.15}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.1}
            backside={false}
            distortion={0.1}
            anisotropy={1}
            distortionScale={1}
            temporalDistortion={0.05}
            clearcoat={1}
            depthWrite={false}
          />
        </mesh>
      </group>
    </>
  );
}

export default React.memo(Model);