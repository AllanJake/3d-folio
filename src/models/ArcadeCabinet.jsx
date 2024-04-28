import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import arcadeScene from '../assets/3d/Arcade/Arcade_Cabinet.glb'

const ArcadeCabinet = () => {
  const cabRef = useRef();
  const { scene, animations } = useGLTF(arcadeScene);
  const { actions } = useAnimations(animations, cabRef);
  
  
    return (
    <mesh
    position={[0, 0, 0.25]}
    //position={[-0.25, 0, -2]}
    //rotation={[0, -1.57079633, 0]}
    ref={cabRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default ArcadeCabinet