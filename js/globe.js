globe = new ENCOM.Globe(
  window.innerWidth,
  window.innerHeight - (main.clientTop + main.clientHeight),
  {
    font: "Inconsolata",
    data: [],
    tiles: grid.tiles,
    baseColor: "#000000",
    markerColor: "#5936d8",
    pinColor: "#5936d8",
    satelliteColor: "#aacfd1",
    scale: 0.99,
    dayLength: 14000,
    introLinesDuration: 2000,
    maxPins: 10,
    maxMarkers: 4,
    viewAngle: 0.2,
  }
);

document.getElementById("details").appendChild(globe.domElement);

function animate() {
  if (globe) {
    globe.tick();
  }
  requestAnimationFrame(animate);
}

let initGlobe = () => {
  globe.init();
  animate();
  fetch("https://ip-api.io/json")
    .then((r) => r.text())
    .then((r) => {
      let loc = JSON.parse(r);
      let name = "YOU: " + loc.ip
      globe.addMarker(loc.latitude, loc.longitude, name);
    });
  var constellation = [];
  var opts = {
    coreColor: "#5936d8",
    numWaves: 8,
  };
  var alt = 1;

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
      constellation.push({
        lat: 50 * i - 30 + 15 * Math.random(),
        lon: 120 * j - 120 + 30 * i,
        altitude: alt,
      });
    }
  }

  setInterval(function () {
    var lat = Math.random() * 180 - 90,
      lon = Math.random() * 360 - 180,
      name = "" + Math.floor(Math.random() * 100);

    globe.addPin(lat, lon, name);
  }, 2500);

  globe.addConstellation(constellation, opts);
};

window.addEventListener("resize", () => {
  let h = window.innerHeight - (main.clientTop + main.clientHeight);
  globe.camera.aspect = window.innerWidth / h;
  globe.camera.updateProjectionMatrix();
  globe.renderer.setSize(window.innerWidth, h);
});
