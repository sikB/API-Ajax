// 3.23.16
// My version
// var myArray[
// function myArray(city, population, state, sqfeet, density){
// 	this.cityName = city;
// 	this.population = population;
// 	this.state = state;
// 	this.sqfeet =  sqfeet;
// 	this.density = density;
// }
// {

// }]

// Robs version
function City(name, population, state, sqMiles, popDensity){
	this.name = name;
	this.population = population;
	this.state = state;
	this.sqMile = sqMiles;
	this.popDensity = popDensity;
}

City.prototype.calcPop = function(testPop){
	if(testPop > this.population){
		alert('The city of' +this.name + ' has fewer than' + testPop + ' people.');
	}else{
		alert('The city of' +this.name + ' has more than' + testPop + ' people.');
	}
}

var cities = [];
cities.push(new City("Atlanta", 447841,'GA',134, 3360));
cities.push(new City("NYC", 8491079,'NY',127857, 3360));

for(i=0; i<cities.length; i++){
	console.log(cities[i].calcPop(500000));
}