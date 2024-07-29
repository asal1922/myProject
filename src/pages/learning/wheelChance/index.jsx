import { Canvas } from "@react-three/fiber"
import { Model } from "./model"
import { Environment, OrbitControls } from "@react-three/drei"

const WheelChance=()=>{
    return(
        <div className="h-[100vh] bg-slate-600">
            
        <Canvas>
            <Environment preset="city"/>
            <OrbitControls/>
            <Model/>
        </Canvas>
        
        </div>
    )
}
export default WheelChance