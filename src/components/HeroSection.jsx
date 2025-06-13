import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Float,
  Text,
  Sphere,
  Line,
} from "@react-three/drei";
import * as random from "maath/random";
import { useRef, useState, Suspense, useMemo, createRef } from "react";
import {
  MathUtils,
  Vector3,
  InstancedBufferAttribute,
  InstancedMesh,
} from "three";
import * as THREE from "three";

const StarField = () => {
  const ref = useRef();
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(10000), { radius: 15 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.01;
    ref.current.rotation.y += delta * 0.005;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4dabf7"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Comet = () => {
  const ref = useRef();
  const speed = useMemo(() => Math.random() * 0.5 + 0.2, []);
  const path = useMemo(() => {
    const points = [];
    for (let i = 0; i < 5; i++) {
      points.push(new Vector3(Math.sin(i) * 10, Math.cos(i) * 5, -i * 2));
    }
    return points;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime * speed;
    ref.current.position.x = Math.sin(time) * 8;
    ref.current.position.y = Math.cos(time * 0.5) * 4;
    ref.current.position.z = -time % 20;
    ref.current.rotation.x = time;
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#FF0000" />
      </mesh>
      <Line
        points={path}
        color={new THREE.Color("#FF0000").convertLinearToSRGB()}
        lineWidth={0.5}
        dashed={false}
        opacity={0.7}
        transparent
      />
    </group>
  );
};

const AsteroidField = () => {
  const count = 500;
  const meshRef = useRef();
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    return new Float32Array(pos);
  }, []);

  const rotations = useMemo(() => {
    const rot = [];
    for (let i = 0; i < count; i++) {
      rot.push(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
    }
    return new Float32Array(rot);
  }, []);

  useFrame(() => {
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[0.1, 0.1, 0.1]}>
        <instancedBufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
        />
        <instancedBufferAttribute
          attach="attributes-rotation"
          array={rotations}
          itemSize={3}
          count={count}
        />
      </boxGeometry>
      <meshPhongMaterial color="#888888" opacity={0.8} transparent />
    </instancedMesh>
  );
};

const Nebula = () => {
  const ref = useRef();
  const [particles] = useState(() => {
    const count = 5000;
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 5 + Math.random() * 5;

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      colors[i * 3] = 0.5 + Math.random() * 0.5;
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.3;
      colors[i * 3 + 2] = 0.7 + Math.random() * 0.3;
    }
    return { pos, colors };
  });

  useFrame((state) => {
    ref.current.rotation.y += 0.0005;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Points
      ref={ref}
      positions={particles.pos}
      colors={particles.colors}
      stride={5}
    >
      <PointMaterial
        vertexColors
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const DigitalParticles = () => {
  const meshRef = useRef();
  const count = 3000;
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
    }
    return new Float32Array(pos);
  }, []);

  useFrame((state) => {
    meshRef.current.rotation.y += 0.0005;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#2563eb"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const NetworkLines = () => {
  const lines = useMemo(() => {
    const connections = [];
    for (let i = 0; i < 20; i++) {
      const start = new Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      );
      const end = new Vector3(
        start.x + (Math.random() - 0.5) * 2,
        start.y + (Math.random() - 0.5) * 2,
        start.z + (Math.random() - 0.5) * 2
      );
      connections.push([start, end]);
    }
    return connections;
  }, []);

  return (
    <group>
      {lines.map(([start, end], i) => (
        <Line
          key={i}
          points={[start, end]}
          color="#7c3aed"
          lineWidth={0.5}
          transparent
          opacity={0.4}
        />
      ))}
    </group>
  );
};

const WorldMap = () => {
  const points = useMemo(() => {
    const worldPoints = [];
    // Create a simplified world map using points
    for (let lat = -60; lat <= 60; lat += 15) {
      for (let lon = -180; lon <= 180; lon += 15) {
        // Convert lat/lon to 3D coordinates
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        const radius = 7;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        worldPoints.push(x, y, z);
      }
    }
    return new Float32Array(worldPoints);
  }, []);

  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points}
          count={points.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        color="#5d96f5"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4 overflow-hidden relative">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 75 }}
          style={{ width: "100%", height: "100%" }}
          gl={{ antialias: true }}
        >
          <color attach="background" args={["#0a192f"]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />

          <Suspense fallback={null}>
            <group position={[0, 0, 0]}>
              <DigitalParticles />
              <NetworkLines />
              <WorldMap />
            </group>
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto text-center max-w-4xl relative z-10 p-8 rounded-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
          Welcome to TechEve
        </h1>
        <p className="text-xl md:text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Transforming Ideas into Digital Reality
        </p>
        <div className="space-y-4">
          <p className="text-lg md:text-xl font-medium text-cyan-300 hover:text-cyan-200 transition-colors duration-300">
            Innovative Software Solutions
          </p>
          <p className="text-lg md:text-xl font-medium text-blue-300 hover:text-blue-200 transition-colors duration-300">
            Cloud-Native Applications
          </p>
          <p className="text-lg md:text-xl font-medium text-indigo-300 hover:text-indigo-200 transition-colors duration-300">
            Digital Transformation Experts
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
