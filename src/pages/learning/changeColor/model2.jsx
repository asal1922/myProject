
import React, { useRef } from 'react'
import { Float, MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'
import { useCustomization } from '../../../chair-model'

const Model2=(props)=> {
  const { nodes, materials } = useGLTF('/scene.gltf')
  const {material}=useCustomization()
  const leatherTextureProps=useTexture({
    map:'/textures/Skin_Lizard_002_basecolor.jpg',
    normalMap:"/textures/Skin_Lizard_002_normal.jpg",
    roughnessMap:'/textures/Skin_Lizard_002_roughness.jpg',
    aoMap:'/textures/Skin_Lizard_002_ambientOcclusion.jpg'
  })
  const leatherTextureProps2=useTexture({
   /*  map:'/textures/Glass_Pattern_001_basecolor.jpg', */
    normalMap:"/textures/Glass_Pattern_001_normal.jpg",
    roughnessMap:'/textures/Glass_Pattern_001_roughness.jpg',
    aoMap:'/textures/Glass_Pattern_001_ambientOcclusion.jpg'
  })
  return (
    <group {...props} dispose={null}>
     
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.435}>

   {/*    <Float speed={1}
    rotationIntensity={1}
    floatIntensity={1}
    floatingRange={[1,10]}>  */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Sleigh_NoLight1}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Sleigh_NoLight2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Sleigh_NoLight3}
        />
     {/*    <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Sleigh_Sleigh}
        /> */}
        {material==='Fabric' ?(<><mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Sleigh_Sleigh}
          color='#FF0000'
        /></>):
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        color='#FF0000'
        > 
        <meshBasicMaterial color="rgb(10, 20, 30)" />
        <meshStandardMaterial {...leatherTextureProps2} color='#659994'/>

        </mesh>}
       
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Sleigh_Tech1}
        /> 
          
       <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Sleigh_Tech2}
        />  
        <mesh>
        <planeGeometry args={[170,170]}/>
        <MeshReflectorMaterial
        blur={[300,100]} resolution={2048} mixBlur={1} mixStrength={40} roughness={1} depthScale={1.2}
        minDepthThreshold={0.4} maxDepthThreshold={1.4} color="#101010" metalness={0.5}/>
    </mesh> 
     {/*  </Float> */}
       
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
export default Model2