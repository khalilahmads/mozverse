
// TypeWriter

let i = 0;
let speed = 40;
let els = [document.getElementById("first"), document.getElementById("second")]
let texts = [els[0].innerHTML, els[1].innerHTML]
let current = 0

function typeWriter() {
  if(current < 2) {
    if (i < texts[current].length) {
      els[current].innerHTML += texts[current].charAt(i);
      i++;
    } else {
      i = 0
      current++
    }
    setTimeout(typeWriter, speed);
  }
}
setInterval(() => {
	i = 0
  current = 0
  els[0].innerHTML = ''
  els[1].innerHTML = ''

	typeWriter()
},speed * (els[0].innerHTML.length + els[1].innerHTML.length) + 100)