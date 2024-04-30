import { useState, useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { LoopOnce } from 'three';

import buttonScene from '../assets/3d/Arcade/Arcade_Cabinet_ButtonA.glb'

const ArcadeButtonA = () => {
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
      actions["ButtonAPress"].reset();
      actions["ButtonAPress"].setLoop(LoopOnce)
      actions["ButtonAPress"].play();      
    }}
    >
        <primitive object={scene} />
    </mesh>
  )
}

export default ArcadeButtonA