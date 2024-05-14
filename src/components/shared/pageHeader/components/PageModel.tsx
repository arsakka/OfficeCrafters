"use client";

import { CameraControls, Center, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

interface model {
    model: string;
    rotation: number[];
    scale: number;
}

interface props {
    model: string;
    fov: number;
    rotation: number[];
    scale: number;
}

function LoadModel({ model, rotation, scale }: model) {
    const ref = useRef<THREE.Mesh>(null!);

    const { scene, animations } = useLoader(
        GLTFLoader,
        `${process.env.BASE_PATH}/models/${model}`
    );

    const mixer = new THREE.AnimationMixer(scene);

    useFrame((state, deilta) => mixer.update(deilta));

    animations.forEach((clip) => mixer.clipAction(clip).play());

    return (
        <mesh ref={ref}>
            <primitive object={scene} scale={scale} rotation={rotation} />
        </mesh>
    );
}

function PageModel({ model, fov, rotation, scale }: props) {
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
                    <LoadModel model={model} rotation={rotation} scale={scale} />
                </Center>
            </Canvas>
        </React.Fragment>
    );
}

export default PageModel;
