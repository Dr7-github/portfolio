import * as THREE from 'three'
import Experience from '../experience'

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resource = this.experience.resource;

        // add the model
        this.room = this.resource.items.room;
        this.actualRoom = this.room.scene; 
        console.log(this.actualRoom)

        // add the texture
        this.texture = this.resource.items.texture;
        this.texture.flipY = false;
        this.texture.encoding = THREE.sRGBEncoding;

        this.material = new THREE.MeshBasicMaterial({map:this.texture})

        this.lerp = {
            current:0,
            target:0,
            ease:0.1
        }

        this.setModel();
        this.onMouseMove()
    }

    setModel(){
        this.actualRoom.castShadow = true;
        this.actualRoom.children.forEach((child)=>{
            child.castShadow = true;
            console.log(child)
        })
        this.actualRoom.traverse((child)=>{
                child.material = this.material
        })
        this.scene.add(this.actualRoom);
        console.log(this.actualRoom)
    }

    onMouseMove(){
        window.addEventListener('mousemove',(e)=>{
            this.rotation = ((e.clientX - window.innerWidth/2)*2)/window.innerWidth;
            this.lerp.target = this.rotation*0.2;
        })
    }
    
    update(){
        this.actualRoom.rotation.y = this.lerp.target
    }
}