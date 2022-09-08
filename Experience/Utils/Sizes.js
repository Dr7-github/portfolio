import EventEmitter from "events";

export default class Sizes extends EventEmitter{
    constructor(){
        super();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.width/this.height;        
        this.frustrum=Math.max(8*(1/this.aspect),9);
        this.pixelRatio = Math.min(window.devicePixelRatio,2);

        window.addEventListener('resize',()=>{
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.aspect = this.width/this.height;
            this.frustrum= Math.max(8*(1/this.aspect),9) ;
            this.pixelRatio = Math.min(window.devicePixelRatio,2);
            console.log(this.frustrum)
            this.emit('resize')
        })
    }
}