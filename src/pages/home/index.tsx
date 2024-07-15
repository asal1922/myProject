import { Canvas } from "@react-three/fiber"
import Experience from "../../components/experience"
import { Environment, OrbitControls, Scroll, ScrollControls } from "@react-three/drei"
const Home = () => {
    return (
        <div className="h-[100vh] w-[100vh]">
            <Canvas>
                <Environment preset="studio" />
                <OrbitControls />
                <Experience />

            </Canvas>
        </div>

    )
}
export default Home