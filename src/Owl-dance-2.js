/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/owl-dance-2.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions);
    actions.dance.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.42, 0.23, 0]} rotation={[1.7, -0.11, 0.86]} scale={[1,1,1]}>
        <group position={[-14.85, 29.87, -17.21]} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={1}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.beak_top.geometry}
          material={materials['beak_top.001']}
          skeleton={nodes.beak_top.skeleton}
        />
        <skinnedMesh geometry={nodes.body.geometry} material={materials.body} skeleton={nodes.body.skeleton} />
        <skinnedMesh
          geometry={nodes.Mesh013.geometry}
          material={materials['beak_bottom.001']}
          skeleton={nodes.Mesh013.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh013_1.geometry}
          material={materials['Mat.001']}
          skeleton={nodes.Mesh013_1.skeleton}
        />
        <skinnedMesh geometry={nodes.eyes.geometry} material={materials['eyes.001']} skeleton={nodes.eyes.skeleton} />
        <skinnedMesh
          geometry={nodes.leg_left.geometry}
          material={nodes.leg_left.material}
          skeleton={nodes.leg_left.skeleton}
        />
        <skinnedMesh
          geometry={nodes.leg_right.geometry}
          material={nodes.leg_right.material}
          skeleton={nodes.leg_right.skeleton}
        />
        <skinnedMesh
          geometry={nodes.maomao.geometry}
          material={materials['mao.001']}
          skeleton={nodes.maomao.skeleton}
        />
        <skinnedMesh
          geometry={nodes.wing_left.geometry}
          material={nodes.wing_left.material}
          skeleton={nodes.wing_left.skeleton}
        />
        <skinnedMesh
          geometry={nodes.wing_right.geometry}
          material={nodes.wing_right.material}
          skeleton={nodes.wing_right.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/owl-dance-2.glb')