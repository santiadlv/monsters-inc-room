import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer, controls;

init();
animate();

function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);

    scene.add(new THREE.AxesHelper(5));

    camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    
    camera.rotation.set(-Math.PI / 6, -Math.PI / 4, -Math.PI / 9);
    camera.position.set(-90, 60, 90);
		scene.add( camera );

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
		controls.minDistance = 0.5;
		controls.maxDistance = 1000;

    const grid = new THREE.GridHelper(100, 10, new THREE.Color('black'), new THREE.Color('black'));
    scene.add(grid);

    const material = new THREE.MeshNormalMaterial();

    const loader = new STLLoader();
    loader.load(
        './models/toy-basket.stl',
        function (geometry) {
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.1, 0.1, 0.1);
            mesh.rotation.set(-Math.PI / 2, 0, 0);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
  renderer.render(scene, camera)
}
