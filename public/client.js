import * as THREE from 'three'
import { OrbitControls } from './jsm/controls/OrbitControls.js'
import { OBJLoader } from './jsm/loaders/OBJLoader.js'
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js'


//  ----- SCENE SETUP -----

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer({
})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableZoom = false

// ----- OBJECT LOADER -----

const gltfloader = new GLTFLoader();

let pc2 = new THREE.Object3D();
gltfloader.load( 'models/laptop/scene.gltf',
    function( obj2 ){
        pc2 = obj2;
        pc2.scene.position.set( -1.3, -0.3, 0 )
        pc2.scene.scale.set( 0.3, 0.3, 0.3 )
        pc2.scene.rotation.set( 0, 0, -0.75 )
        scene.add( pc2.scene );
    }
);

//  -----  LIGHTING  -----

const light = new THREE.AmbientLight( 0x404040, 5.0 ); // soft white light
scene.add( light );

const pointLight = new THREE.PointLight( 0x7209b7, 0.4, 3 );
pointLight.position.set( 0.5, 1, 1 );
scene.add( pointLight );

const pointLight2 = new THREE.PointLight( 0x4895ef, 1, 3 );
pointLight2.position.set( -1, -0.2, -2 );
scene.add( pointLight2 );

const sphereSize = 0.0;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );

const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
scene.add( pointLightHelper2 );

// ----- RESIZE HANDLER -----

window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    },
    false
)

// ----- ANIMATE ------

function animate() {
    requestAnimationFrame(animate)
    pc2.scene.rotation.y += 0.005
    controls.update()
    render()
}

function render() {
    renderer.render(scene, camera)
}


scene.background = new THREE.Color( 0x0E0D0E );

animate()


// ----- SCROLL ANIMATE -----
