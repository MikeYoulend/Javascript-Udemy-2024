let nome = "Angela";

let FirstChar = nome.slice(0, 1);
let upperCase = FirstChar.toUpperCase();
//con nome.lenght prenderemo sempre l'ultima posizione senza dover contare
let restOfName = nome.slice(1, nome.length);

restOfName.toLowerCase();

let capitalizedName = upperCase + restOfName;

console.log("Hello, " + capitalizedName);

/////////////////////////////////////////////////////////////////

function lifeInWeeks(age) {
	let yearsRemaining = 90 - age;
	let days = yearsRemaining * 365;
	let weeks = yearsRemaining * 52;
	let months = yearsRemaining * 12;

	console.log( "You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

}

lifeInWeeks(27);

/////////////////////////////////////////////////////////////////

function bmiCalculator(weight, height)
{
    let bmi = weight / (height * height)
    
	if(bmi < 18.5)
	{
		return console.log("Your BMI is " + Math.round(bmi) + ", so you are underweight.");
	} else if (bmi > 18.5 && bmi < 24.9)
	{
		return console.log("Your BMI is " + Math.round(bmi) + ", so you have a normal weight.");
	} else ( bmi > 24.9)
	{ 
		return console.log("Your BMI is " + Math.round(bmi) + ", so you are overweight.");
	}
    
}

let bmi = bmiCalculator(67, 1.7);


///////////////////////////////////////////////////

//Se year : 4 ritorna 0 = leap year else not a leap year
//se year : 4 ritorna 0 allora year diviso cento deve ritornare 0
//se anche year : 100 torna 0 deve anche year : 400 tornare 0

function isLeap(year) {
       
		if(year % 4 === 0)
		{ if(year % 100 === 0)
		  { if(year % 400 === 0)
			{
			 return "leap year"
		    } else {
			  return "not a leap"
		    }
			
		  } else
		  {
			 return "leap year"
		  }
			
		} else
		{
			return "not a leap year"
		}
	
	}

console.log(isLeap(2000));

///////////////////////////////////////////////////////////////

let output = [];
let count = 1;

function fizzBuzz1(){
	
	while(count <= 30){
	
	if(count % 3 === 0 && count % 5 === 0){
		output.push("Fizzbuzz")
	} else if(count % 5 === 0){
		output.push("Buzz")
	} else if(count % 3 === 0){
		output.push("Fizz")
	} else{
		output.push(count);
	}
	count++;
}

	console.log(output);
}

fizzBuzz1();


/////////////////////////////////////////////////





function fizzBuzz2(){

	let output = [];
	
	for(let count = 1; count <= 51; count++){
	
	if(count % 3 === 0 && count % 5 === 0){
		output.push("Fizzbuzz")
	} else if(count % 5 === 0){
		output.push("Buzz")
	} else if(count % 3 === 0){
		output.push("Fizz")
	} else{
		output.push(count);
	}
	count++;
}

	console.log(output);
}

fizzBuzz2();




////////////////////////////////////////////////


function whosPaying(names) {
    
		let numberOfPeople = names.length;
		let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
		let randomPerson = names[randomPersonPosition];

		return randomPerson + " is going to buy all lunch";
	}

	console.log(whosPaying(["Michele", "Dani", "Ravi", "TuCheStaiGiudicandoIlMioCodice"]));

///////////////////////////////////////////////////

function BottlesOfBeerSong(){

	let bottleOfBeer = 99;
	let Song = "";
	while(bottleOfBeer >= 0){
		Song += bottleOfBeer + " Bottles of beer on the wall, " + bottleOfBeer + " bottles of beer. Take one down and pass it around, " +  bottleOfBeer + " on the wall                                            "
		bottleOfBeer--;
	}

	return Song;
}

//console.log(BottlesOfBeerSong());

//////////////////////////////////////////////////

function fibonacciGenerator(n){

	let output = [];
	if(n === 1){
		output = [0]; // se n = 1 output[0]
	} else if(n === 2) {
		output = [0, 1]; // se n = 2 output[0, 1]
	}
	else { //per tutti gli altri casi
		output = [0, 1]; 

		for(let i = 2; i < n; i++){ //partendo da 2 finche i è minore di n, aggiungi 1
			//pusha nell'array di output
			//un array di 4 numeri è = a 4 spazi
			//ma siccome si parte da 0 a contare in programmazione
			//il meno 1 serve per prendere quello all'ultimo posto
			//il meno 2 al penultimo
		output.push(output[output.length - 2] + output[output.length - 1]); //[0, 1, 1]
		}
	}
	return output;
}

console.log(fibonacciGenerator(4));