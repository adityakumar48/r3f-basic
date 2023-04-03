import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const FirstModel = () => {
  const modelRef = useRef();

  useFrame((state, delta) => {
    modelRef.current.rotation.x += delta;
    modelRef.current.rotation.y += delta;
    modelRef.current.rotation.z += delta;
    // modelRef.current.position.x -= delta;
    // modelRef.current.position.y -= delta;
    // modelRef.current.position.z += delta;
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh scale={1.2} ref={modelRef}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial color="purple" />
        {/* <OrbitControls /> */}
      </mesh>
    </>
  );
};

export default FirstModel;
