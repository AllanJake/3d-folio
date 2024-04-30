import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { getProject } from '@theatre/core';
import { SoftShadows } from "@react-three/drei";
import studio from "@theatre/studio";
import extension from '@theatre/r3f/dist/extension';
import { PerspectiveCamera, editable as e, SheetProvider } from "@theatre/r3f";

import ArcadeCabState from '../assets/3d/ArcadeCabState.json';

import Loader from '../components/Loader';
import ArcadeCabinet from "../models/ArcadeCabinet";
import ArcadeButtonA from "../models/ArcadeButtonA";
import ArcadeButtonB from "../models/ArcadeButtonB";
import ArcadeJoystick from "../models/ArcadeButtonJoystick";
import { renderToStaticNodeStream } from "react-dom/server";

if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}

const CabinetSheet = getProject('ArcadeCabProject', { state: ArcadeCabState }).sheet('Cabinet Sheet');

const Projects = () => {

  useEffect(() => {
    CabinetSheet.project.ready.then(() => CabinetSheet.sequence.play({ iterationCount: 1, range: [0, 4]}));
  }, [])

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-full bg-black`}
        gl={{preserveDrawingBuffer: true }}
        shadows>
          <SoftShadows />
          <Suspense fallback={<Loader />}>
            <SheetProvider sheet={CabinetSheet}>
              <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 0]} fov={75} />

              <spotLight
              position={[2, 15, 0]} rotation={[-1.5707963, 0, 0]} 
              intensity={5} angle={1} decay={1} color="f5edd5" 
              castShadow shadow-mapSize={1024}>
                <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]}/>
              </spotLight>
              
              <e.pointLight theatreKey="PointLight" />

              <ArcadeCabinet />
              <ArcadeButtonA />
              <ArcadeButtonB />
              <ArcadeJoystick onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} />

              {/* Floor Mesh */}
              <mesh
              position={[0, -1.97, 0]}>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color="gray" />
              </mesh>
            </SheetProvider>
          </Suspense>
      </Canvas>

    </section>
  )
}

export default Projects