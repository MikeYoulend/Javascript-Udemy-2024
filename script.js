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

	console.log( "You have " + days + " days, " + weeks + " weeks, and " + months + "months left.");

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