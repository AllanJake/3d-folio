import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../components/Loader'
import Scene from '../components/Scene'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <Canvas 
      className='w-full h-full bg-transparent'
      camera={{near:0.1, far:1000}}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} intensity={1.2} />
          <Scene />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home