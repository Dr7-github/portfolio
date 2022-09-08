import * as THREE from 'three'
import Experience from '../experience'

export default class Room{
    constructor(){
        // init
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resource = this.experience.resource;
        this.time = this.experience.time;

        this.setPath();
    }

    setPath(){
    }
}