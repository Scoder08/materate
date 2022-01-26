import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Owl from "./Owl-dance-2.js";


import { OrbitControls } from "@react-three/drei/OrbitControls";
import "./styles.css";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.2} />
      <Suspense fallback={null}>
        <Owl/>
      </Suspense>
    </Canvas>
  );
}
