import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { getProject } from '@theatre/core';
import studio from "@theatre/studio";
import extension from '@theatre/r3f/dist/extension';
import { PerspectiveCamera, editable as e, SheetProvider } from "@theatre/r3f";

import ArcadeCabState from '../assets/3d/ArcadeCabState.json';

import Loader from '../components/Loader';
import ArcadeCabinet from "../models/ArcadeCabinet";
import ArcadeButtonA from "../models/ArcadeButtonA";
import ArcadeButtonB from "../models/ArcadeButtonB";

if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}


const CabinetSheet = getProject('ArcadeCabProject', { state: ArcadeCabState }).sheet('Cabinet Sheet');

const Projects = () => {

  useEffect(() => {
    CabinetSheet.project.ready.then(() => CabinetSheet.sequence.play({ iterationCount: 1, range: [0, 4]}))
  }, [])

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-full bg-transparent`}
        gl={{preserveDrawingBuffer: true }}>
          <Suspense fallback={<Loader />}>
            <SheetProvider sheet={CabinetSheet}>
              <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 0]} fov={75} />
              <directionalLight position={[1,1,1]} intensity={2} />
              <ambientLight intensity={0.5}/>
              <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

              <ArcadeCabinet />
              <ArcadeButtonA />
              <ArcadeButtonB />
            </SheetProvider>
          </Suspense>
      </Canvas>

    </section>
  )
}

export default Projects