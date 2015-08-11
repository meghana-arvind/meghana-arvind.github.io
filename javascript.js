var msg = "Sign up for the newsletter!";
function updateMsg(){
	var el = document.getElementById('message');
	el.textContent = msg;
}
updateMsg();

function getSize(width, height, depth){
	var area = width*height;
	var vol = width*height*depth;
	var sizes = [area, vol];
	return sizes;
}

var wallSize = getSize(2,3,5);

function exampleMsg(){
	var ex = document.getElementById('example');
	ex.textContent = getSize(3,2,3);
}
exampleMsg();

document.write(wallSize);

var hotel = {
	name: 'Quay',
	rooms: 40,
	booked: 25,
	gym: true,
	roomTypes: ['twin','double','suite']
	checkAvailability: function(){
		return this.rooms-this.booked;
	}
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;