import * as THREE from 'three'
import Experience from "./experience";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        
        this.createPerspectiveCamera();
        this.createOthographicCamera();
        this.setOrbitControls()
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        )

        this.perspectiveCamera.position.set(9,7,-6);

        this.scene.add(this.perspectiveCamera);
    }

    createOthographicCamera(){
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect*this.sizes.frustrum)/2,
            (this.sizes.aspect*this.sizes.frustrum)/2,
            this.sizes.frustrum/2,
            -this.sizes.frustrum/2,
            -10,
            50
        )

        this.scene.add(this.orthographicCamera);
        this.orthographicCamera.position.set(4,4,-3);
        this.orthographicCamera.lookAt(-2,0,1.5)

        // this.helper = new THREE.CameraHelper(this.orthographicCamera);
        // this.scene.add(this.helper)
    }

    setOrbitControls(){
        this.controls = new OrbitControls(
            this.perspectiveCamera,this.canvas
        )

        this.controls.enableDamping = true;
    }

    resize(){
        // update perspective camera on resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
        
        // update orthographic camera on resize
        this.orthographicCamera.left =  (-this.sizes.aspect*this.sizes.frustrum)/2;
        this.orthographicCamera.right = (this.sizes.aspect*this.sizes.frustrum)/2;
        this.orthographicCamera.top = this.sizes.frustrum/2;
        this.orthographicCamera.bottom = -this.sizes.frustrum/2;
        this.orthographicCamera.updateProjectionMatrix()
    }

    update(){
        this.controls.update();
    }
}