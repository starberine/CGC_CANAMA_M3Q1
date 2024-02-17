const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight("#FBFCD6");
ambientLight.intensity = 1;
scene.add(ambientLight);

const light3 = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light3 );

const light = new THREE.DirectionalLight('#FFFFFF');
light.position.set(0, 0, 0);
light.castShadow = true;
light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 200;
scene.add(light);

// Adding PointLight
const pointLight = new THREE.PointLight("#FFFF00", 1, 100);
pointLight.position.set(0, 10, 5);
scene.add(pointLight);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

camera.position.z = 15;

//textures
const textureLoader = new THREE.TextureLoader();
const textureUrl = 'https://cdn.polyhaven.com/asset_img/renders/painted_plaster_wall/clay.png?height=760';
const texture = textureLoader.load(textureUrl);

const textureLoader2 = new THREE.TextureLoader();
const textureUrl2 = 'https://t4.ftcdn.net/jpg/03/49/90/05/360_F_349900577_ZxtfjfaZXd3zk2XvdRwJNaGUCeMbbog1.jpg';
const texture2 = textureLoader2.load(textureUrl2);

const textureLoader3 = new THREE.TextureLoader();
const textureUrl3 = 'https://cdn.polyhaven.com/asset_img/primary/concrete_tiles.png?height=760';
const texture3 = textureLoader3.load(textureUrl3);

//sphere
const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );

light1 = new THREE.PointLight( 0xff0040, 1000 );
				light1.add( new THREE.Mesh( sphere, new THREE.MeshToonMaterial( {color:  0xff0040} ) ) );
        light1.position.x = 19.5;
        light1.position.y = 7.5;
        light1.position.z = -5;
				scene.add( light1 );
light2 = new THREE.PointLight( 0x0040ff, 1000 );
				light2.add( new THREE.Mesh( sphere, new THREE.MeshPhongMaterial( { color: 0x0040ff } ) ) );
        light2.position.x = -19.5;
        light2.position.y = 7.5;
        light2.position.z = -5;
				scene.add( light2 );        

const geometry = new THREE.BoxGeometry(1, 15.5, 10);
const material = new THREE.MeshStandardMaterial({ map: texture });
const wall = new THREE.Mesh(geometry, material);
wall.position.y = 0;
wall.position.x = -20.3;
wall.position.z = 0.1;
wall.receiveShadow = true;
scene.add(wall);

const geometry1 = new THREE.BoxGeometry(1, 15.5, 10);
const material1 = new THREE.MeshStandardMaterial({ map: texture });
const wall1 = new THREE.Mesh(geometry1, material1);
wall1.position.y = 0;
wall1.position.x = 20.3;
wall1.position.z = 0.1;
wall1.receiveShadow = true;
scene.add(wall1);

const geometry4 = new THREE.BoxGeometry(43, 1, 15.7);
const material4 = new THREE.MeshStandardMaterial({  map: texture });
const wall2 = new THREE.Mesh(geometry4, material4);
wall2.rotation.x = Math.PI / 2;
wall2.position.z = -5.7;
wall2.position.y = 0;
wall2.receiveShadow = true;
scene.add(wall2);

const geometry2 = new THREE.BoxGeometry(1, 14, 43);
const material2 = new THREE.MeshStandardMaterial({  map: texture });
const ceiling = new THREE.Mesh(geometry2, material2);
ceiling.rotation.y = Math.PI / 2;
ceiling.rotation.x = Math.PI / 2;
ceiling.position.y = 8.9;
ceiling.position.z = 0.4;
scene.add(ceiling);

const geometry3 = new THREE.BoxGeometry(1, 14, 43);
const material3 = new THREE.MeshStandardMaterial({ map: texture3 });
const floor = new THREE.Mesh(geometry3, material3);
floor.rotation.y = Math.PI / 2;
floor.rotation.x = Math.PI / 2;
floor.position.y = -8.9;
floor.position.z = -0.4;
scene.add(floor);

const sphere1 = new THREE.SphereGeometry(5, 32, 16);
light4 = new THREE.PointLight(0xff0000, 1, 100);
				light4.add( new THREE.Mesh( sphere1, new THREE.MeshStandardMaterial({map: texture2})));
        light4.position.x = 0;
        light4.position.y = 4;
        light4.position.z = -7;

				scene.add( light4 );        

function animate() {
  light4.rotation.y += 0.01;

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}



animate();
