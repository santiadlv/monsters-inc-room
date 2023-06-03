import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

let rad = Math.PI / 180;
let camera, scene, renderer, controls;

init();
animate();

function createMaterial() {
    // create a texture loader.
    const textureLoader = new THREE.TextureLoader();

    // load a texture
    const texture = textureLoader.load(
        './src/textures/500.jpeg'
        // 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s125-ake7011-a.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e0614d01434b0078435c9c9b6463c9c1',
    );

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new THREE.MeshPhongMaterial({
        map: texture,
    });

    return material;
}

function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);

    camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );


    // const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    // scene.add(ambientLight);

    // const pointLight = new THREE.PointLight(0xffffff, 0.8);
    // camera.add(pointLight);
    // scene.add(camera);

    camera.rotation.set(-90 * rad, -45 * rad, -20 * rad);
    camera.position.set(0, 60, 90);
    scene.add(camera);


    const map = new THREE.TextureLoader().load('../src/textures/Carbon.png');
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 16;
    map.colorSpace = THREE.SRGBColorSpace;

    const material2 = new THREE.MeshPhongMaterial({ map: map, side: THREE.DoubleSide });

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 0.5;
    controls.maxDistance = 1000;

    const grid = new THREE.GridHelper(
        100,
        10,
        new THREE.Color('black'),
        new THREE.Color('black')
    );
    scene.add(grid);

    const material = new THREE.MeshNormalMaterial();


    const texture = new THREE.TextureLoader().load('../src/textures/500.jpeg');
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.NearestFilter;


    const texture2 = new THREE.TextureLoader().load('../src/textures/500.jpeg');
    const materialeees = new THREE.MeshPhongMaterial({ map: map, side: texture2 });


    // const mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { map: texture, side: THREE.DoubleSide } ) );

    const loader = new STLLoader();
    const loader2 = new OBJLoader();
    loader.load(
        './models/toy-basket.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material2);
            mesh.scale.set(0.05, 0.05, 0.05);
            mesh.rotation.set(-90 * rad, 0, 75 * rad);
            mesh.position.set(-25, 2, -20);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/toy-basket.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.05, 0.05, 0.05);
            mesh.rotation.set(-90 * rad, 0, 0);
            mesh.position.set(40, 10, -4.5);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/rocking-chair.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.4, 0.4, 0.4);
            mesh.rotation.set(-90 * rad, 0, -45 * rad);
            mesh.position.set(40, 8.5, -40);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/bedside-lamp.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.4, 0.4, 0.4);
            mesh.rotation.set(-90 * rad, 0, 0);
            mesh.position.set(-5, 9, -40);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/bed.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.15, 0.18, 0.1);
            mesh.rotation.set(-90 * rad, 0, 0);
            mesh.position.set(10, 8, -25);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/bookshelf.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.2, 0.2, 0.2);
            mesh.rotation.set(-90 * rad, 0, 0);
            mesh.position.set(10, 25, -47);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/table.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material2);
            mesh.scale.set(0.2, 0.2, 0.2);
            mesh.rotation.set(-90 * rad, 0, 30 * rad);
            mesh.position.set(-20, 3.5, 5);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/chair.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.3, 0.3, 0.3);
            mesh.rotation.set(-90 * rad, 0, -100 * rad);
            mesh.position.set(-22, 5, 15);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/chair.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.3, 0.3, 0.3);
            mesh.rotation.set(-90 * rad, 0, 100 * rad);
            mesh.position.set(-20, 5, -5);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/tea-cup.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.025, 0.025, 0.025);
            mesh.rotation.set(-90 * rad, 0, 100 * rad);
            mesh.position.set(-15, 8.3, 0);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/tea-cup.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.025, 0.025, 0.025);
            mesh.rotation.set(-90 * rad, 0, 10 * rad);
            mesh.position.set(-15, 8.3, 10);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/tea-pot.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.25, 0.25, 0.25);
            mesh.rotation.set(0, -75 * rad, 0);
            mesh.position.set(-20, 8.8, 5);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/beach-ball.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.15, 0.15, 0.15);
            mesh.rotation.set(-90 * rad, 0, 100 * rad);
            mesh.position.set(15, 1.5, -4);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/teddy-bear.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.04, 0.04, 0.04);
            mesh.rotation.set(20 * rad, 30 * rad, 0);
            mesh.position.set(5, 2, 10);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/bucket.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.3, 0.3, 0.3);
            mesh.rotation.set(-90 * rad, 0, 60 * rad);
            mesh.position.set(-20, 3.5, 35);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/spinner.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.04, 0.04, 0.04);
            mesh.rotation.set(-65 * rad, 15 * rad, 0);
            mesh.position.set(0, 1.5, 25);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/cube.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.1, 0.1, 0.1);
            mesh.rotation.set(0, 30 * rad, 0);
            mesh.position.set(20, 1.35, 25);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/cube.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.1, 0.1, 0.1);
            mesh.rotation.set(0, 75 * rad, 0);
            mesh.position.set(15, 1.35, 23);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/cube.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.1, 0.1, 0.1);
            mesh.rotation.set(0, 15 * rad, 0);
            mesh.position.set(17.5, 1.35, 18);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/toy-box.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.4, 0.3, 0.4);
            mesh.rotation.set(-90 * rad, 0, -90 * rad);
            mesh.position.set(43, 8, 20);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/shelf.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.5, 0.5, 0.5);
            mesh.rotation.set(-90 * rad, 0, 90 * rad);
            mesh.position.set(40, 5, 0);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/shelf.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.5, 0.5, 0.5);
            mesh.rotation.set(-90 * rad, 0, 90 * rad);
            mesh.position.set(40, 5, -20);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/painting-canvas.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.25, 0.25, 0.25);
            mesh.rotation.set(-90 * rad, 0, 60 * rad);
            mesh.position.set(30, 7, 40);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    const texture3 = new THREE.TextureLoader().load( './src/textures/500.jpeg' );
    texture3.wrapS = map.wrapT = THREE.RepeatWrapping;
	texture3.colorSpace = THREE.SRGBColorSpace;
	texture3.flipY = false;
    const material3 = new THREE.MeshBasicMaterial( { map: texture3 } );
    
    loader2.load(
        './models/tinker.obj',
        function () {
            // STL 
            // geometry.center();
            // const mesh = new THREE.Mesh(geometry, materialess);
            // mesh.scale.set(0.3, 0.3, 0.75);
            // mesh.rotation.set(-90 * rad, 0, -90 * rad);
            // mesh.position.set(10, 0, 15);

            // .OBJ 
            // geometry.traverse(function (child) {
            //     if (child instanceof THREE.Mesh) {
            //         child.material = material3;
            //     }
            // });

            const texture = new THREE.TextureLoader().load( './src/textures/500.jpeg' );
			texture.colorSpace = THREE.SRGBColorSpace;

			const geometry = new THREE.BoxGeometry( 20, 20, 20 );
			const material = new THREE.MeshBasicMaterial( { map: texture } );

			let mesh = new THREE.Mesh( geometry, material );
			scene.add( mesh );
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader2.load(
        './models/tinker.obj',
        function (geometry) {
            // STL 
            // geometry.center();
            // const mesh = new THREE.Mesh(geometry, materialess);
            // mesh.scale.set(0.3, 0.3, 0.75);
            // mesh.rotation.set(-90 * rad, 0, -90 * rad);
            // mesh.position.set(10, 0, 15);

            // .OBJ 
            geometry.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = material3;
                }
            });
            geometry.computeFaceNormals()
			scene.add( geometry );

        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/door.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(2.25, 2, 2);
            mesh.rotation.set(-90 * rad, 0, 0);
            mesh.position.set(-25, 17.5, -48.5);
            scene.add(mesh);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (err) => {
            console.log(err);
        }
    );

    loader.load(
        './models/room.stl',
        function (geometry) {
            geometry.center();
            const mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(0.5, 0.5, 0.3);
            mesh.rotation.set(-90 * rad, 0, -90 * rad);
            mesh.position.set(0, 21.9, 0);
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
    renderer.render(scene, camera);
}