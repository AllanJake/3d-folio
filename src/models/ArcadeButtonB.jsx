import { useRef, useEffect, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { LoopOnce } from 'three';

import buttonScene from '../assets/3d/Arcade/Arcade_Cabinet_ButtonB.glb'

const ArcadeButtonB = () => {
    const buttonRef = useRef();
    const { scene, animations } = useGLTF(buttonScene);
    const { actions } = useAnimations(animations, buttonRef);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      document.body.style.cursor = hovered ? 'grab' : 'auto';
    }, [hovered])

  return (
    <mesh
    position={[0, 0, 0.25]}
    //rotation={[0, -1.57079633, 0]}
    ref={buttonRef}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
    onClick={() => {
      actions["ButtonBPress"].reset();
      actions["ButtonBPress"].setLoop(LoopOnce)
      actions["ButtonBPress"].play();      
    }}
    >
        <primitive object={scene} />
    </mesh>
  )
}

export default ArcadeButtonB