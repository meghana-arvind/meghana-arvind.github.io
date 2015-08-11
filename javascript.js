var greeting = 'Hello ';
var name = 'Meghana';
var message = ', please check your order:';

var welcome = greeting + name + message;

var sign = 'Meghana is awesome';
var tiles = sign.length;
var subTotal = tiles*5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('usersign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textConent = tiles;

var elSubTotal = document.getElementById('subtotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

var msg = "sign up to recieve our newsletter for 10% off!";
function updateMsg(){
	var el = document.getElementById('message');
	el.textContent = msg;
}
updateMsg();

var example = "This is an example";
function updateEx(){
	var elEx = document.getElementById('example');
	elEx.textContent = example;
}
updateEx();

function getSize(width, height. depth){
	var area = width*height;
	var volume = width*height*depth;
	var sizes = [area, volume];
	return sizes;
}

function updateSize(){
	var geo = document.getElementById('geometry');
	geo.textContent = getSize(3,2,3);
}
updateSize();