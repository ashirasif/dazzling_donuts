import React, { useRef } from "react";
import { Environment, Lightformer, Sparkles, useTexture } from "@react-three/drei";
import { Model } from "./Donuts";
import { useFrame, useLoader, useThree } from "@react-three/fiber";

import * as THREE from "three";


const Scene = () => {

  const grRef = useRef<THREE.Group>(null)
  // useFrame(({clock,camera}) => {
  //   const a = Math.sin(clock.getElapsedTime())
  //   camera.rotation.set(0, a*0.2, 0)
    
  // })
  return (
    <group ref={grRef}>
      <Model />
      <Sparkles scale={1000} size={100}/>
    </group>   
  );
};

export default Scene;
