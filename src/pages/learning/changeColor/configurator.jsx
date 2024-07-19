/* import { useCustomization } from "../../../chair-model" */

import { useEffect } from "react"
import { useCustomization } from "../../../chair-model" 

const Configurator=()=>{
    const{material,setMaterial}=useCustomization() 
    useEffect(()=>{
        console.log('material',material)
    },[material])
    return(<div className=" fixed right-6 w-80 bottom-2/4 text-white p-4">
<div>
    <div className=" font-bold">
        chair material
    </div>
    <div className="flex items-center gap-4">
        <div className={`text-xs text-gray-200 ${material==='leather' ? ' text-cyan-600' :''} `} onClick={()=>setMaterial('leather')}>
            <div className=" opacity-80 cursor-pointer">leather</div>
        </div>
        <div className={`text-xs text-gray-200 ${material==='Fabric' ? ' text-cyan-600' :''} `}>
            <div   className=" opacity-80 cursor-pointer" onClick={()=>setMaterial('Fabric')}>Fabric</div>
        </div>
    </div>
    </div>
    </div>)
}
export default Configurator