import {Component} from 'react'
import * as THREE from 'three'

import { gltfLoader } from './gltfLoad'

export default class Experience extends Component{
  constructor(props){
    super(props)

    this.state = false

    this.larp = {
      current:0,
      target:0,
      ease:0.1
    }

    this.worldYAxis = new THREE.Vector3(0,1,0)
    this.target = new THREE.Vector3(-2,0,1.5)
    this.radius = 5
  }

  componentDidMount(){    
    this.init().then(
      this.update(),
      window.addEventListener('resize',this.resize),
      window.addEventListener('mousemove',this.handleMouse)
    )             
  }

  init=async ()=>{
    // init the key size
    this.scH = this.mount.clientHeight
    this.scW = this.mount.clientWidth
    this.aspect = this.scW/this.scH
    this.frustrum = Math.max(5.5*(1/this.aspect),7.5)

    this.renderer = new THREE.WebGLRenderer({
      antialias:true,
      alpha:true
    })
    this.setRenderer()

    this.scene = new THREE.Scene()
    this.renderer.setSize(this.scW,this.scH)
    
    this.mount.appendChild( this.renderer.domElement )

    // init the camera
    this.camera = new THREE.OrthographicCamera(
      (-this.aspect*this.frustrum)/2,
      (this.aspect*this.frustrum)/2,
      this.frustrum/2,
      -this.frustrum/2,
      -10,
      50
    ) 
    this.camera.position.set(4,4,-3)
    this.camera.lookAt(this.target)

    this.room = await gltfLoader()

    if(!this.actualRoom){
      this.actualRoom = this.room

      this.scene.add(this.actualRoom)
      this.renderer.render(this.scene,this.camera)
      this.state = true
    }    
  }

  setRenderer(){
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.CineonToneMapping;
    this.renderer.toneMappingExposure = 1.75;
    this.renderer.shadowMap.enabled = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding
  }

  componentWillUnmount(){
    this.renderer.dispose()
    this.renderer.domElement.remove()
    window.removeEventListener('resize',this.resize)
    window.removeEventListener('mousemove',this.handleMouse)
  }
  

  resize = ()=>{
    this.scH = this.mount.clientHeight
    this.scW = this.mount.clientWidth
    this.aspect = this.scW/this.scH
    this.frustrum = Math.max(5.5*(1/this.aspect),7.5)

    this.handleResize()
  }

  handleResize=()=>{
    // update the renderer size
    this.renderer.setSize(this.scW,this.scH)

    // update the camera
    this.camera.left =  (-this.aspect*this.frustrum)/2;
    this.camera.right = (this.aspect*this.frustrum)/2;
    this.camera.top = this.frustrum/2;
    this.camera.bottom = -this.frustrum/2;
    this.camera.updateProjectionMatrix()
  }

  handleMouse = e =>{
    if(this.state){
      this.larp.target = ((e.clientX-this.scW/2)*2)/this.scW
      let angle = this.larp.target*(Math.PI/8)
      this.actualRoom.rotation.y = angle
    }    
  } 

  update=()=>{
    this.renderer.render(this.scene,this.camera)
    requestAnimationFrame(this.update.bind(this))
  }

  render(){
    return(
      <div
        id='stage'
        style={{padding:'0',height:'80vh'}}
        ref={(mount)=>{this.mount = mount}}
      ></div>
    )
  }
}