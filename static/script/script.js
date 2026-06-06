  
function btnClick() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "aqua";

  document.getElementById("sun").style.display = "inline";
  document.getElementById("dark").style.display = "none";
  document.getElementById("dark1").style.backgroundColor = "aqua";

  let boxes = document.getElementsByClassName("skill-box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = "aqua";
  boxes[i].style.color = "peru";
}

}

function btnClick1() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";

  document.getElementById("sun").style.display = "none";
  document.getElementById("dark").style.display = "inline";
  document.getElementById("dark1").style.backgroundColor = "white";
  document.getElementById("dark2").style.backgroundColor = "white";

    let boxes = document.getElementsByClassName("skill-box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = "white";
}
}

function downloadResume() {
    window.location.href = "Resume (2).pdf";
}
const words = ['Full Stack Developer', 'Front-End Developer'];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed');
function type() {
  const word = words[wordIndex];
  if (isDeleting) {
    typedEl.textContent = word.substring(0, charIndex--);
    if (charIndex < 0) { isDeleting = false; wordIndex = (wordIndex+1) % words.length; setTimeout(type, 400); return; }
  } else {
    typedEl.textContent = word.substring(0, charIndex++);
    if (charIndex > word.length) { isDeleting = true; setTimeout(type, 1800); return; }
  }
  setTimeout(type, isDeleting ? 60 : 100);
}
type();


