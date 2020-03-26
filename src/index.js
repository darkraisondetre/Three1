import SceneInit from "./app";
import * as THREE from 'three';
import Sphere from "./sphere";
import img1 from './res/r1/mB1.jpg';
import Button from "./buttons";

let test = new SceneInit();
test.init();
test.animate();

// let imgPath = img1;
// let imgLoader = new THREE.TextureLoader().load(imgPath); 
// let sphGeometry = new THREE.SphereGeometry(1, 32, 32);
// let sphMaterial = new THREE.MeshBasicMaterial({
//     map: imgLoader,
//     side: THREE.BackSide
// });
// let sphMesh = new THREE.Mesh(sphGeometry, sphMaterial);
// test.scene.add(sphMesh);

let sphere1 = new Sphere();
sphere1.create();
sphere1.addToScene();
// test.scene.add(sphere1);


let button1 = new Button('.button');
button1.click();



console.log("I'm the entry point");
