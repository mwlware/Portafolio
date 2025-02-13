import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Star = () => {
    const { scene } = useGLTF("/estrellas.glb"); 

    return <primitive object={scene} scale={1} />;
};

const App = () => {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Star />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
