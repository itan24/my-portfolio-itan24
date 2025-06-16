"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { BufferGeometry, Material, Points as ThreePoints } from "three";

interface StarBackgroundProps {
  [key: string]: unknown;
}

const StarBackground = (props: StarBackgroundProps) => {
  const ref = useRef<ThreePoints<BufferGeometry, Material | Material[]>>(null);
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });
    for (let i = 0; i < positions.length; i++) {
      if (!isFinite(positions[i]) || isNaN(positions[i])) {
        positions[i] = 0;
      }
    }
    if (positions.length === 0) {
      console.warn("Generated positions array is empty");
      return new Float32Array(5000 * 3);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true} {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div
    className="fixed top-0 left-0 w-full h-full z-[-1]"
    style={{ pointerEvents: "none" }}
  >
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{ pointerEvents: "none", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;