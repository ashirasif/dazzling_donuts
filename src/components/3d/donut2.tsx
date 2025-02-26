/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/dazzling donuts.gltf -ts --output ./components/3d/donut2.tsx 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { LayerMaterial, Texture } from "lamina";
import { useLoader } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Torus: THREE.Mesh;
    Torus001: THREE.Mesh;
    Torus003: THREE.Mesh;
    Plane: THREE.Mesh;
  };
  materials: {
    bread: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/dazzling donuts.gltf") as GLTFResult;
  const texture = useLoader(THREE.TextureLoader, "/texture/breat_texture2.jpg");
  return (
    <group {...props} dispose={null}>
      {/* <mesh castShadow receiveShadow geometry={nodes.Torus.geometry} material={materials.bread} position={[0, -0.001, 0]} /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials["Material.001"]}
        position={[0, 0.036, 0]}
        scale={[0.992, 1.11, 0.992]}
      />

      <mesh
        name="bread"
        castShadow
        receiveShadow
        geometry={nodes.Torus003.geometry}
        // material={materials.bread}
      >
        <LayerMaterial
          color="#d18865" //
          lighting="standard"
          bumpMap={texture}
          bumpScale={0.005}
          
        >
          <Texture map={texture} alpha={0.6} />
        </LayerMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/dazzling donuts.gltf");
