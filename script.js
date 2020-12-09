function _load() {

	let rootE = document.getElementById("root");

	let aTextArray = ["alma", "cseresznye", "eper", "szeder", "ribizli", "citrom", "narancs", "mandarin", "datolya", "barack", "kivi", "szilva", "pomelo", "khaki"]; // ezek a primitív változók, a tömbe írhatunk stringet, számot stb.

	// console.log(aTextArray.length);

	for (let index = 0; index < aTextArray.length; index++) {
		
		// console.log(aTextArray[index]);

		rootE.insertAdjacentHTML("beforeend", `
			<div class="fruit">${aTextArray[index]}</div>
		`);

	}

	// console.log(document.getElementsByClassName("fruit"));
	// ilyet nem írunk!, a querySelectort kell használni!
	let fruitDivs = rootE.querySelectorAll(".fruit");

	// console.log(fruitDivs.length);

	for (let index = 0; index < fruitDivs.length; index++) {
		// console.log(fruitDivs[index]);
		
		// fruitDivs[index].classList.add("anotherClass");

		// console.log(index === 1);

		if(index % 2 === 0) {
			fruitDivs[index].classList.add("trueClass");
		
		} else if(index % 5 === 0) {
			fruitDivs[index].classList.add("anotherClass");
		
		} else {
			fruitDivs[index].classList.add("falseClass");
		}
	}



}

window.addEventListener("load", _load);