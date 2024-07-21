import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const Experience= (props)=> {
const group=useRef() 
  const { nodes, materials } = useGLTF('/mynewavatarglb.glb')
  const{animations}=useFBX("animation/Type.fbx")
  console.log('typingAnimation: ', animations);
  animations[0].name="Typing"
const{actions}=useAnimations(animations,group)
useEffect(()=>{
actions["Typing"].reset().play()
console.log('actions["Typing"]: ', actions["Typing"].play());
}) 
  return (
/*     <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group> */
    <group {...props} dispose={null} ref={group}>
    <mesh
      name="EyeLeft"
      castShadow
      receiveShadow
      geometry={nodes.EyeLeft.geometry}
      material={materials.Wolf3D_Eye}
      morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
      morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
    />
    <mesh
      name="EyeRight"
      castShadow
      receiveShadow
      geometry={nodes.EyeRight.geometry}
      material={materials.Wolf3D_Eye}
      morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
      morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
    />
    <mesh
      name="Wolf3D_Head"
      castShadow
      receiveShadow
      geometry={nodes.Wolf3D_Head.geometry}
      material={materials.Wolf3D_Skin}
      morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
    />
    <mesh
      name="Wolf3D_Teeth"
      castShadow
      receiveShadow
      geometry={nodes.Wolf3D_Teeth.geometry}
      material={materials.Wolf3D_Teeth}
      morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
      morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Wolf3D_Hair.geometry}
      material={materials.Wolf3D_Hair}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Wolf3D_Body.geometry}
      material={materials.Wolf3D_Body}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
      material={materials.Wolf3D_Outfit_Bottom}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
      material={materials.Wolf3D_Outfit_Footwear}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Wolf3D_Outfit_Top.geometry}
      material={materials.Wolf3D_Outfit_Top}
    />
  </group>

  )
}

useGLTF.preload('/mynewavatarglb.glb')
export default Experience