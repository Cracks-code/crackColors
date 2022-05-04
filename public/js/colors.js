import colorarr from './ColorArr.js';

let allCLRContainer = document.querySelector('.CLR-container');
let loader = document.querySelector('#loader');
let sctopbtn = document.querySelector('#ScTop');

const setAllCLR = async ()=>{
	await colorarr.map((e)=>{
		return (
			allCLRContainer.innerHTML += `
			<div class="color-con">
				<div style="background: ${e.color};" class="color"></div>
				<div class="value-copy">
					<h3 class="value">${e.color}</h3>
					<button class="copy flex-center"><img src="./public/images/icons/copy.svg" alt=""></button>
				</div>
				<h2 class="name">${e.name}</h2>
			</div>`
		)
	});
}

sctopbtn.onclick = ()=>{
	window.scrollTo(0, 0);
}

window.onload = ()=>{
	loader.style.display = 'none';
}
setAllCLR();