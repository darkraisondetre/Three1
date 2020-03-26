import SceneInit from "./app";
import * as THREE from "three";
import img1 from "./res/r1/mB1.jpg";

class Sphere extends SceneInit{
  constructor(scene, imgPath, imgLoader, sphGeometry, sphMaterial, sphereMesh, addSphere, sphScene) {
    super(scene);
    this.imgPath = imgPath;
    this.imgLoader = imgLoader;
    this.sphGeometry = sphGeometry;
    this.sphMaterial = sphMaterial;
    this.sphereMesh = sphereMesh;
    this.addSphere = addSphere;
    this.sphScene = sphScene;
  }
  create() {
    this.imgPath = img1;
    this.imgLoader = new THREE.TextureLoader().load(this.imgPath);
    this.sphGeometry = new THREE.SphereGeometry(1, 32, 32);
    this.sphMaterial = new THREE.MeshBasicMaterial({
      map: this.imgLoader,
      side: THREE.BackSide
    });
    this.sphereMesh = THREE.Mesh(this.sphGeometry, this.sphMaterial);
  }
  addToScene() {
    // this.sphScene.add(this.sphereMesh);
    this.scene.add(this.sphereMesh);  
  }
}

export default Sphere;
