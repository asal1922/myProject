import { Float, MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { Suspense } from "react"
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

const Model=()=>{
    const gltf=useLoader(GLTFLoader,'/scene.gltf')
return(
    <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1,Math.PI/4]}>
<Stage environment={"city"} intensity={0.6} contactShadow={false}>
  {/*   <Float speed={1}
    rotationIntensity={1}
    floatIntensity={1}
    floatingRange={[1,10]}> */}
        <Suspense fallback={null}>
            <primitive object={gltf.scene}/>
        </Suspense>
{/*     <mesh>
        
        <meshNormalMaterial/>
    </mesh> */}
    {/* </Float> */}
    </Stage>
   {/*  <mesh>
        <planeGeometry args={[170,170]}/>
        <MeshReflectorMaterial
        blur={[300,100]} resolution={2048} mixBlur={1} mixStrength={40} roughness={1} depthScale={1.2}
        minDepthThreshold={0.4} maxDepthThreshold={1.4} color="#101010" metalness={0.5}/>
    </mesh> */}
    </PresentationControls>

)
}
export default Model