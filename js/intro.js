let header = document.querySelector("#intro");
let anim = [
  { t: "//", ms: 400 },
  { t: "/m/", ms: 300 },
  { t: "/mo/", ms: 300 },
  { t: "/mok/", ms: 300 },
  { t: "/moke/", ms: 200 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
  stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
  let step = anim[i];
  header.innerText = step.t;
  i++;

  if (i < anim.length) setTimeout(update, step.ms / stepDenominator);
  else {
    header.classList.add("top");
    setTimeout(() => {
      document.getElementById("main").style.opacity = 1;
      initGlobe();
    }, 500);
    window.localStorage.stepDenominator = 2;
  }
};
update();
