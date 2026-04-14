// avatar
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const renderer = new THREE.WebGLRenderer();

document.body.appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();

loader.load("/assets/models/avatar.gltf", (gltf) => {
  scene.add(gltf.scene);
});