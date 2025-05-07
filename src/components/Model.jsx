'use client';
import React, { useRef } from 'react';
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshBasicMaterial } from 'three';

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
  const typePosition = [0, 0, -24];
  const typeScale = [1.05, 1.05, 1];

  const whiteMaterial = new MeshBasicMaterial({ color: 'white' }); // Renamed for clarity

  useFrame(() => {
    if (logoMesh.current) logoMesh.current.rotation.y += 0.012;
  });

  return (
    <group {...props} dispose={null} scale={[0.025, 0.025, 0.025]}>
      {nodes?.TlkLogo?.geometry && (
        <mesh
          ref={logoMesh}
          geometry={nodes.TlkLogo.geometry}
          rotation={staticRotation}
          position={[0, 0, 12]}
          renderOrder={1}
        >
          <MeshTransmissionMaterial
            thickness={0}
            roughness={0.1}
            transmission={1}
            ior={1.4}
            chromaticAberration={0.5}
            backside={true}
            transmissionSampler={false}
            renderPriority={1}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor='#ffffff'
            color='#ffffff'
          />
        </mesh>
      )}
      {nodes?.Type?.geometry && (
        <mesh
          geometry={nodes.Type.geometry}
          position={typePosition}
          material={whiteMaterial} // Using the white material
          scale={typeScale}
          renderOrder={0}
        >
        </mesh>
      )}
    </group>
  );
}

export default React.memo(Model);