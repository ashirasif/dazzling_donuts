import React, { useRef } from "react";
import { Environment, Lightformer, useTexture } from "@react-three/drei";
import { Model } from "./Donuts";
import { useFrame, useLoader, useThree } from "@react-three/fiber";

import * as THREE from "three";

const Scene = () => {
  useFrame((state, dt) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.x = Math.sin(t) * 5;
  });

  return (
    <group>
      <Model />
      <directionalLight position={[0, 0, 10]} />
      <Environment preset="apartment" />
    </group>
  );
};

export default Scene;
