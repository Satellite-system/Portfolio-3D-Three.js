import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Comet = (props) => {
  const [tail, setTail] = useState([]);
  const cometRef = useRef();

  useFrame((state, delta) => {
    //     // Update the comet's tail
    const newTail = [...tail];
    console.log("Ref >> ", cometRef.current);
    newTail.push(cometRef.current.position);
    setTail(newTail);
  });

  return (
    <group>
      <mesh ref={cometRef}>
        {/* <mesh ref={cometRef}> */}
    <sphereGeometry args={[0.1]} />
    <meshBasicMaterial color="white" />
   {/* </mesh> */}
      </mesh>
      <lineSegments>
        {/* {tail.map((position, index) => ( */}
          <line positions={1,2,5} le />
        {/* ))} */}
      </lineSegments>
    </group>
  );
};

const CometCanvas = () => {
  return (
    <div>
      Comet>>>
      <Canvas>
        <Suspense>
          <Comet />
        </Suspense>
      </Canvas>
    </div>
  );

  // return(
  //    <Canvas
  //    // shadowMap
  //    style={{ background: '#171717' }}
  //    camera={{ position: [0, 0, 8], fov: 50 }}
  //    gl={{ antialias: false }}
  //    // onCreated={({ gl }) => {
  //    //  gl.toneMapping = THREE.Uncharted2ToneMapping
  //    //  gl.outputEncoding = THREE.sRGBEncoding
  //    // }}
  //    >
  //    <ambientLight intensity={0.5} />
  //    <pointLight position={[0, 60, -100]} intensity={20} />
  //    <pointLight position={[-50, 0, -50]} intensity={2} />
  //    <spotLight castShadow intensity={8} angle={Math.PI / 10} position={[10, 10, 10]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
  //    <mesh position={[0, 4.5, -10]}>
  //     <sphereGeometry attach="geometry" args={[4.9, 32, 32]} />
  //     <meshBasicMaterial attach="material" transparent opacity={0.5} />
  //    </mesh>
  //   </Canvas>
  // )
};

export default CometCanvas;
