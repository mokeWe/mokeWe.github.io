import createGlobe from "./cobeglobe/cobe.js";

let phi = 0;
let canvas = document.getElementById("cobe");
let details = document.getElementById("details");
details.appendChild(canvas);

const globe = createGlobe(canvas, {
  devicePixelRatio: 2,
  width: 1000,
  height: 1000,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 1.15,
  scale: 1,
  mapSamples: 16000,
  mapBrightness: 3,
  baseColor: [30 / 100, 0.0, 72 / 100],
  markerColor: [1, 0.5, 1],
  glowColor: [99 / 100, 0.0, 255 / 100],
  offset: [0, 0],
  opacity: 0.6,
  markers: [],
  onRender: (state) => {
    state.phi = phi;
    phi += 0.002;
  },
});

canvas.style.cursor = "grab";
canvas.addEventListener("mousedown", (e) => {
  let x = e.clientX;
  let dragging = true;

  const mousemove = (e) => {
    if (dragging) {
      canvas.style.cursor = "grabbing";
      phi += (e.clientX - x) / 150;
      x = e.clientX;
    }
  };

  const mouseup = (e) => {
    dragging = false;
    canvas.removeEventListener("mousemove", mousemove);
    canvas.removeEventListener("mouseup", mouseup);
  };

  canvas.addEventListener("mousemove", mousemove);
  canvas.addEventListener("mouseup", mouseup);
  canvas.addEventListener("mouseleave", mouseup);
});