import EventEmitter from "events";
import * as THREE from 'three'
import Experience from "../experience";

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import { LoadingManager } from "three";

export default class Resource extends EventEmitter{
    constructor(assets){
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;

        this.assets = assets;
        this.items = {};

        this.setLoaders();
        this.startLoading();
        this.loadingManager = new LoadingManager();
    }

    setLoaders(){
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);

        this.loaders.textureLoader = new THREE.TextureLoader()
    }

    startLoading(){ 
        for (const asset of this.assets){
            if (asset.type === 'glbModel'){
                this.loaders.gltfLoader.load(
                    asset.path,
                    (file)=>{
                        this.items[asset.name] = file;                
                        this.emit("ok");
                        console.log('load success')
                    }
                );
            }else{
                this.loaders.textureLoader.load(
                    asset.path,
                    (file)=>{
                        this.items[asset.name] = file;
                        console.log('load texture success')
                    }
                )
            }
        }
    }
}