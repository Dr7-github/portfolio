import Room from './Room';
import Floor from './Floor';
import Enviroment from './Enviroment';
import Experience from "../experience";

export default class World{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resource = this.experience.resource;

        this.resource.on("ok",()=>{
            this.enviroment = new Enviroment();
            this.room = new Room();
            this.floor = new Floor();
            
            let canvas_show = document.getElementById('experience');  
            let page_show = document.getElementById('page-wrapper'); 
            let load_show = document.getElementById('load');
            load_show.style.display = 'none';
            canvas_show.style.display = 'block';
            page_show.style.display = 'block';
        })
    }

    resize(){

    }

    update(){
        if(this.room){
            this.room.update()
        }
    }
}