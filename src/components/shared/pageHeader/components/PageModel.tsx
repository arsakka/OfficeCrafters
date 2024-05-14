"use client";

import { CameraControls, Center, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

interface model {
    model: string;
    rotation: number[];
}

interface props {
    model: string;
    fov: number;
    rotation: number[];
}

function LoadModel({ model, rotation }: model) {
    const ref = useRef<THREE.Mesh>(null!);

    const { scene } = useLoader(
        GLTFLoader,
        `${process.env.BASE_PATH}/models/${model}`
    );

    return (
        <mesh ref={ref}>
            <primitive object={scene} scale={1.8} rotation={rotation} />
        </mesh>
    );
}

function PageModel({ model, fov, rotation }: props) {
    return (
        <React.Fragment>
            <Canvas style={{ height: "500px" }}>
                <PerspectiveCamera
                    makeDefault
                    fov={fov}
                    position={[0, 0, 80]}
                />
                <ambientLight position={[1, 1, 1]} intensity={1} />
                <spotLight intensity={1} decay={0} position={[10, 10, 10]} />
                <pointLight intensity={1} decay={0} />
                <CameraControls />
                <Center>
                    <LoadModel model={model} rotation={rotation} />
                </Center>
            </Canvas>
        </React.Fragment>
    );
}

export default PageModel;
