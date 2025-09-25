const body = document.getElementsByTagName("body")[0];
const mysterybutton = document.getElementById("my");
const slider = document.getElementById("slider");
const summerbreakcounter = document.getElementById("summerbreakcounter");
const thesummer = new Date("2026-06-26");

let jumper = null;

window.addEventListener("load", WindowLoad);
mysterybutton.addEventListener("click", JumpscareJump);
mysterybutton.addEventListener("click", JumpscareMove);

function WindowLoad(){
		let currentDate = new Date();
		if(currentDate.getMonth() == 11 && currentDate.getDay() == 10){
				body.style.background = "black";
		}
		
		let remainingDate = thesummer.getTime() - currentDate.getTime();
		summerbreakcounter.innerText = "Yaz tatilin3 " + remainingDate + " milisaniye kaldu";
		
		SliderMove(slider);
}

function JumpscareJump(){
		jumper = document.createElement("img");
		jumper.src = "FNAF-freddy-jumpscare.jpg";
		jumper.style.display = "block";
		jumper.style.height = "10%";
		jumper.style.left = "45%";
		jumper.style.position = "fixed";
		jumper.style.top = "45%";
		jumper.style.width = "10%";
		
		body.appendChild(jumper);
		jumper.addEventListener("click", () => {body.removeChild(jumper)});
}

function JumpscareMove() {
		let timer = null;
		let size = 10;
		let pos = 45;
		
		clearInterval(timer);
		timer = setInterval(animate, 2);
		
		function animate() {
			if(pos > 0){
					size += 2;
					pos -= 1;
					jumper.style.height = size + "%";
				jumper.style.width = size + "%";
				jumper.style.left = pos + "%";		
				jumper.style.top = pos + "%";
			} else {
				clearInterval(timer);
			}
		}
}

function SliderMove(elem){
		let timer = null;
		let pos = 0;
		
		clearInterval(timer);
		timer = setInterval(animate, 200);
		
		function animate(){
				++pos;
				if(pos >= 125){
					pos = -25;
				}
			elem.style.left = pos + "%";
		}
}
