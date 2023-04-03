import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import FirstModel from "./FirstModel";

function App() {
  return (
    <Canvas>
      <FirstModel />
    </Canvas>
  );
}

export default App;
