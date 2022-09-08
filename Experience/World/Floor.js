import * as THREE from 'three'
import Experience from '../experience'

export default class Floor{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setFloor()
    }

    setFloor(){
        this.geometry = new THREE.PlaneGeometry(100,100);
        this.material = new THREE.MeshBasicMaterial({
            color:'#eedddd',
            side:THREE.DoubleSide
        });
        this.plane = new THREE.Mesh(this.geometry,this.material);
        
        this.scene.add(this.plane)
        this.plane.receiveShadow = true;
        this.plane.rotation.x = Math.PI/2;
    }
    
    update(){
    }
}