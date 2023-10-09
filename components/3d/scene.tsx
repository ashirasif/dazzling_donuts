import React, { useRef } from "react";
import { Environment } from "@react-three/drei";
import { Model } from "./Donuts";

const Scene = () => {
  return (
    <group>
      <Model />
      <Environment preset="city" />
    </group>
  );
};

export default Scene;
