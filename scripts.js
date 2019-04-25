let element = document.querySelector(".banner");
element.addEventListener("click", goToSomePage);

document.addEventListener("load", setTimeout(reloadPage, 60000));

function reloadPage() {
	location.reload();
}

function goToSomePage(){
	window.open("http://www.somePage.dk", '_blank');
	
}
/*

let element = document.querySelector(".banner");
document.addEventListener("load", setTimeout(reloadBanner, 1200));

function reloadBanner() {
	location.reload();
}
*/