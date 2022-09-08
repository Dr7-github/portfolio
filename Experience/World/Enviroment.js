import * as THREE from 'three'
import Experience from '../experience'

export default class Enviroment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resource = this.experience.resource;

        this.setSunLight();
    }

    setSunLight(){
        this.sunLight = new THREE.DirectionalLight('#cc00cc',3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1024,1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(7,7,-3);

        // this.helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(this.helper)

        this.scene.add(this.sunLight)

        this.ambientLight = new THREE.AmbientLight("#ffffff",1);
        this.scene.add(this.ambientLight)
    }
}