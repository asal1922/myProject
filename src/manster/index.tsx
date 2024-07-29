import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import MonsterModal from "./monsterModal"
import { useState } from "react"

const Manster = () => {
    const [anime, setAnime] = useState("standing")

    return (
        <div className="h-[100vh] bg-slate-600">
            <div className="w-1/2 h-3/5 bg-black">
            <Canvas>
                <ambientLight />
                <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
                <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
                <pointLight intensity={2} position={[0, 3, -10]} color="white" />
                <Environment preset="forest" />
                <OrbitControls />
                <MonsterModal anime={anime} />
            </Canvas>
            </div>
            <div className='bg-slate-700 text-3xl font-extrabold'>
                <p onClick={() => setAnime("Typing")}>Typing</p>
                {/* <p onClick={() => setAnime("dance")}>dance</p> */}
                <p onClick={() => setAnime("standing")}>standing</p>
            </div>

        </div>
    )
}
export default Manster