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
    phi += 0.005;
  },
});
