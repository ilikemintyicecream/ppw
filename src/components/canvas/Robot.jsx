import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF  } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Robot = () => {
    const robot = useGLTF('./wallE/scene.gltf')

    return(
        <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black'/>
      <pointLight intensity={0.25}/>
      <spotLight 
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      />
      <pointLight intensity={0.45}/>
      
      <primitive
      object={robot.scene}
      scale={isMobile ? 0.4 : 0.75}
      position={isMobile ? [0, -3, -1.1] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
    )
}
const RobotCanvas = () => {
    const[isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 600px');
    
      setIsMobile(mediaQuery.matches);
      
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
    
      mediaQuery.addEventListener('change',handleMediaQueryChange);
    
      return () => {
        mediaQuery.removeEventListener('change',handleMediaQueryChange)
      }
    
    },[])


 return (
    <Canvas
    frameLoop='demand'
    shadows
   
    
    camera={{ position: [20, 4, 10], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Robot isMobile={isMobile}/>
    </Suspense>

    <Preload all />
  </Canvas>
  );



};
export default RobotCanvas;