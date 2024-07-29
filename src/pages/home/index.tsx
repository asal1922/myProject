import { Canvas } from "@react-three/fiber"
/* import Experience from "../../components/experience" */
import { Environment, OrbitControls, Scroll, ScrollControls } from "@react-three/drei"
import Experience from "../../components/experience"
const Home = () => {
    return (
        <div className="h-[100vh] w-[100vh]">
            <Canvas>
                <Environment preset="studio" />
                <OrbitControls />
                <group>
                    <Experience />
                </group>

            </Canvas>
       
        </div>

    )
}
export default Home