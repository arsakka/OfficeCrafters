"use client";
import { CameraControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function LoadModel() {
    const meshRef = useRef<THREE.Mesh>(null!);

    const { scene, animations } = useLoader(
        GLTFLoader,
        "/models/truth_about_the_dark_side_of_the_moon.glb"
    );

    const mixer = new THREE.AnimationMixer(scene);

    animations.forEach((clip) => mixer.clipAction(clip).play());
    useFrame((state, delta) => {
        mixer.update(delta);
        meshRef.current.rotation.x += delta / 10;
        meshRef.current.rotation.y += delta / 10;
    });

    return (
        <mesh ref={meshRef}>
            <primitive object={scene} scale={4} />
        </mesh>
    );
}

function MoonModel() {
    return (
        <React.Fragment>
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight
                    position={[15, 25, 15]}
                    angle={0.15}
                    penumbra={1}
                    decay={-0.2}
                    intensity={Math.PI}
                />
                <pointLight
                    position={[-10, -10, -10]}
                    decay={0}
                    intensity={Math.PI}
                />
                <CameraControls />
                <LoadModel />
            </Canvas>
        </React.Fragment>
    );
}

export default MoonModel;
