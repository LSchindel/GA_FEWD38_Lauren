var images = ["img/camping.jpg", "img/flower.jpg", "img/flower2.jpg", "img/cobb.jpg" ]
var currentImage = 0;

function changePicture(whichNum) {
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

function nextImage() {
	currentImage++;
	if(currentImage==images.length){
		currentImage = 0;
	}
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}

function prevImage() {
	currentImage--;
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}