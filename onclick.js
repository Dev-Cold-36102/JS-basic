let img = null;
function init() {
    img = document.getElementById('myImage');
    img.style.position = 'relative';
    img.style.left = '0px';
}
function moveRight() {
    img.style.left = parseInt(img.style.left) +50+'px';
}
window.onload = init;



