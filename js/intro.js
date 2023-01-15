let header = document.querySelector("#intro");
let anim = [
  { t: "//", ms: 600 },
  { t: "/ /", ms: 300 },
  { t: "/_/", ms: 300 },
  { t: "/ /", ms: 300 },
  { t: "/_/", ms: 300 },
  { t: "/ /", ms: 300 },
  { t: "/_/", ms: 300 },
  { t: "/ /", ms: 300 },
  { t: "/_/", ms: 300 },
  { t: "/ /", ms: 300 },
  { t: "/m/", ms: 200 },
  { t: "/mo/", ms: 200 },
  { t: "/mok/", ms: 200 },
  { t: "/moke/", ms: 200 },
  { t: "/moke/", ms: 500 },
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
    }, 500);
    window.localStorage.stepDenominator = 2;
  }
};
update();
