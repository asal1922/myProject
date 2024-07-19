import { Canvas } from "@react-three/fiber"
import Model2 from "./model2"
import { Environment, OrbitControls } from "@react-three/drei"
import Configurator from "./configurator"

const Experience=()=>{
return(<div className="h-[100vh]">
<Canvas>
    <Environment preset="forest"/>
    <OrbitControls/>
    <Model2/>
</Canvas>
<Configurator/>
</div>)
}
export default Experience