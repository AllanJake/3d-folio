import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import joystickScene from '../assets/3d/Arcade/Arcade_Cabinet_Joystick.glb'

const ArcadeJoystick = () => {
    const buttonRef = useRef();
    const { scene, animations } = useGLTF(joystickScene);
    const { actions } = useAnimations(animations, buttonRef);
  return (
    <mesh
    position={[0, 0, 0.25]}
    //rotation={[0, -1.57079633, 0]}
    ref={buttonRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default ArcadeJoystick