let arrowRight = false;
let arrowLeft = false;
let arrowUp = false;
let arrowDown = false;
let worm = document.getElementById("worm");
let field = document.getElementById("field");
let viz = 0;
let fug = 0;
let m = 50;
let x = 0;
let y = 0;
let width = Math.trunc((document.body.clientWidth * .8) / m) * m;
let height = Math.trunc((document.body.clientHeight * .8) / m) * m;
field.style.maxWidth = width + "px";
field.style.maxHeight = height + "px";
field.style.width = width + "px";
field.style.height = height + "px";
let leftEdge = 0;
let rightEdge = width / m;
let bottomEdge = 0;
let topEdge = height / m;
document.onkeydown = function (e) {

  if (e.key == "ArrowRight") {
    arrowRight = true;
    arrowLeft = false;
    arrowUp = false;
    arrowDown = false;

  } else if (e.key == "ArrowLeft") {
    arrowRight = false;
    arrowLeft = true;
    arrowUp = false;
    arrowDown = false;

  } else if (e.key == "ArrowUp") {
    arrowRight = false;
    arrowLeft = false;
    arrowUp = true;
    arrowDown = false;

  } else if (e.key == "ArrowDown") {
    arrowRight = false;
    arrowLeft = false;
    arrowUp = false;
    arrowDown = true;

  }
  console.log(e.key);
}


let timer = setInterval(function () {

  if (arrowRight) {
    if (x < rightEdge - 1) {
      viz += m;
      worm.style.left = viz + "px";
      x += 1;
    } else {
      viz = 0;
      worm.style.left = viz + "px";
      x = 0;
    }
  } else if (arrowLeft) {
    if (x > leftEdge) {
      viz -= m;
      worm.style.left = viz + "px";
      x -= 1;
    } else {
      x = rightEdge;
      worm.style.left = viz + "px";
      viz = x * m;
    }
  } else if (arrowUp) {
    if (y < topEdge - 1) {
      fug += m;
      worm.style.bottom = fug + "px";
      y += 1;
    } else {
      fug = 0;
      worm.style.bottom = fug + "px";
      y = 0;
    }
  } else if (arrowDown) {
    if (y > bottomEdge) {
      fug -= m;
      worm.style.bottom = fug + "px";
      y -= 1;
    } else {
      y = topEdge;
      worm.style.bottom = fug + "px";
      fug = y * m;
    }

  }
}, 1000)