import SampleColorsArr from './SampleColorArr.js';

let SamplecolorCon = document.querySelector('.Color-Con');
let loader = document.querySelector('#loader');

const setSampleCLR = ()=>{
	SampleColorsArr.map((e)=>{
		return (
			SamplecolorCon.innerHTML += `<div style="background: ${e.color};" class="CLR-Div"></div>`
		)
	})
}

window.onload = ()=>{
	loader.style.display = 'none'
}

setSampleCLR();