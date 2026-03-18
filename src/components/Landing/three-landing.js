import * as THREE from "three";

export function startLanding3D() {
  const canvas = document.getElementById("canvas3d");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  camera.position.z = 5;

  // Geometry — lighter, visible on dark background
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });

  const torus = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.3, 16, 100), material);
  const octa = new THREE.Mesh(new THREE.OctahedronGeometry(1), material);
  const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9), material);

  torus.position.set(-3.5, 2, 0);
  octa.position.set(3.5, -1, 0);
  ico.position.set(0, -2.5, -2);

  scene.add(torus, octa, ico);

  // Lighting
  const pointLight = new THREE.PointLight(0xffffff, 1.5);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  const ambient = new THREE.AmbientLight(0x8899aa, 0.8);
  scene.add(ambient);

  // Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.008;
    torus.rotation.y += 0.004;

    octa.rotation.x += 0.004;
    octa.rotation.y += 0.008;

    ico.rotation.x += 0.006;
    ico.rotation.z += 0.006;

    camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.03;
    camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.03;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
