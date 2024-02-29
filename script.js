problem = document.getElementById("problem");
submitbutton = document.getElementById("submitbutton");
input = document.getElementById("input");
coi = document.getElementById("coi");
streakelm = document.getElementById("streakelm");
hselm = document.getElementById("hselm");
title = document.getElementById('title');
header = document.getElementById('header');

operation = localStorage.getItem("operation");
falsestreak = 0;
streak = 0;
hs = 0;
range = localStorage.getItem("range");
var delayInMilliseconds = 2000; //2 seconds

if (operation == "+") {
	title.innerHTML = "Addition Game";
	header.innerHTML = "Addition Game";
} else if (operation == "-") {
	title.innerHTML = "Subtraction Game";
	header.innerHTML = "Subtraction Game";
} else if (operation == "x") {
	title.innerHTML = "Multiplication Game";
	header.innerHTML = "Multiplication Game";
} else if (operation == "/") {
	title.innerHTML = "Division Game";
	header.innerHTML = "Division Game";
}

try {

	function newProblem(){
		if(operation == "+"){
			num1 = Math.floor(Math.random() * range);
			num2 = Math.floor(Math.random() * range);
			ans = (num1+num2);
			problem.innerHTML = (`What is ${num1} ${operation} ${num2}?`);
		}else if(operation == "-"){
			num1 = Math.floor(Math.random() * range);
			num2 = Math.floor(Math.random() * range);
			ans = (num1-num2);
			while(true){
				if(ans > 0){
					break
				}
				num1 = Math.floor(Math.random() * range);
				num2 = Math.floor(Math.random() * range);
				ans = (num1-num2);
			}
			problem.innerHTML = (`What is ${num1} ${operation} ${num2}?`);
		}else if(operation == "x"){
			num1 = Math.floor(Math.random() * range);
			num2 = Math.floor(Math.random() * range);
			ans = (num1*num2);
			problem.innerHTML = (`What is ${num1} ${operation} ${num2}?`);
		}else if(operation == "/"){
			num1 = Math.floor(Math.random() * range);
			num2 = Math.floor(Math.random() * range);
			ans = (num1/num2);
			while(true){
				if(ans % 1 == 0){
					break
				}
				num1 = Math.floor(Math.random() * range);
				num2 = Math.floor(Math.random() * range);
				ans = (num1/num2);
			}
			problem.innerHTML = (`What is ${num1} &#247 ${num2}?`);
		}
	}

	function checkAns(){
		if(Number(input.value) == Number(ans)){
			coi.innerHTML = ("Correct!");
			newProblem();
			input.value = null;
			streak+=1;
			falsestreak = 0;
		} else{
			coi.innerHTML = ("Incorrect, please try again...")
			streak=0;
			falsestreak+=1;
		}
		streakelm.innerHTML=(`Streak: ${streak}`)
		if(falsestreak == 5){
			coi.innerHTML = (`The answer was ${ans}, heres another problem`);
			newProblem();
			input.value = null;
			falsestreak = 0;
		}
		if(streak > hs){
			hs = streak;
		}
		hselm.innerHTML = (`Highscore: ${hs}`)

		setTimeout(function() {
		  coi.innerHTML = null;
		}, delayInMilliseconds);
	}

	newProblem();

	// Execute a function when the user presses a key on the keyboard
	input.addEventListener("keypress", function(event) {
	  // If the user presses the "Enter" key on the keyboard
	  if (event.key === "Enter") {
	    // Cancel the default action, if needed
	    event.preventDefault();
	    // Trigger the button element with a click
	    document.getElementById("submitbutton").click();
	  }
	});
} catch (error) {

}
