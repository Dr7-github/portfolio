import * as THREE from 'three'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'

import Resource from './Utils/Resource'
import Assets from './Utils/Assets'

import Camera from './Camera'
import Renderer from './Renderer'

import World from './World/World'

export default class Experience{
    static instance

    constructor(canvas){        
        console.log('vite running');

        if (Experience.instance){
            return Experience.instance
        }

        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.time = new Time();

        this.camera = new Camera();
        this.renderer = new Renderer();

        this.resource = new Resource(Assets);
        
        
        this.world = new World();

        this.time.on('update',()=>{
            this.update();
        })
        this.sizes.on('resize',()=>{
            this.resize()
        })
    }
    
    update(){
        this.camera.update();
        this.renderer.update();
        this.world.update()
    }

    resize(){
        this.camera.resize();
        this.renderer.resize();
    }
}