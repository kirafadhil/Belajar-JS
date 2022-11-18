const btnUbahWarna = document.getElementById("btnUbahWarna");
btnUbahWarna.addEventListener("click", function () {
  // document.body.style.backgroundColor = 'salmon';
  // document.body.setAttribute('class','biru-muda');
  document.body.classList.toggle("biru-muda");
});

const btnAcakWarna = document.createElement("button");
const teksBtn = document.createTextNode("Acak Warna");
btnAcakWarna.appendChild(teksBtn);
btnAcakWarna.setAttribute("type", "button");

btnUbahWarna.after(btnAcakWarna);

btnAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const sRed = document.querySelector("input[name=sRed]");
const sGreen = document.querySelector("input[name=sGreen]");
const sBlue = document.querySelector("input[name=sBlue]");

sRed.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sGreen.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sBlue.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

document.body.addEventListener("mousemove", function (e) {
  // posisi mouse
  // ukuran browser
  // console.log(window.innerWidth);
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
