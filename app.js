function stars() {
  let cont = 50;
  let scene = document.querySelector(".scene");
  let i = 0;

  while (i < cont) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);

    let tiempo = Math.random() * 1;
    let alto = Math.random() * 100;

    star.style.left = `${x}px`;
    star.style.width = `${1}px`;
    star.style.height = `${alto}px`;
    star.style.animationDuration = `${tiempo}s`;

    scene.appendChild(star);
    i++;
  }
}
stars();
