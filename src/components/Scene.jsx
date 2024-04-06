const Scene = () => {
  return (
    <mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshLambertMaterial attach="material" color="cyan" />
    </mesh>
  )
}

export default Scene