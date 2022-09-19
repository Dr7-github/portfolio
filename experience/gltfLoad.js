import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from 'three'
import { resolve } from 'styled-jsx/css'

const glbPath = '/stastic/room.glb'
const texturePath = '/stastic/bake.jpg'

export async function gltfLoader(){
    const {receiveShadow,castShadow}=true

    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/draco/")
    gltfLoader.setDRACOLoader(dracoLoader)

    const textureLoader =new THREE.TextureLoader()
    const texture = textureLoader.load(texturePath)
    texture.flipY = false
    texture.encoding = THREE.sRGBEncoding

    const material = new THREE.MeshBasicMaterial({map:texture})

    return new Promise(resolve=>{
        gltfLoader.load(glbPath,(gltf)=>{
            const obj = gltf.scene
            obj.receiveShadow = receiveShadow
            obj.castShadow = castShadow

            obj.traverse((child)=>{
                if(child.isMesh){
                    child.castShadow=castShadow
                    child.receiveShadow = receiveShadow
                    child.material = material
                }
            })
            resolve(obj)
        })
    })
}