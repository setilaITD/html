
function Hello() {

	var user = prompt("What is your name");
document.getElementById('here').innerHTML = " Hello " + user +" Welcom to my website";

}
 //and then

function Hello2() {

	var user = prompt("What is your name");
document.getElementById('here2').innerHTML = " Hello " + user +" Welcom to my website";

}


function sum(){


	var numb1 = parseInt(document.getElementById("number1").value);
	var numb2 = parseInt(document.getElementById("number2").value);
	var total1 = numb1 + numb2;

	document.getElementById('total1').innerHTML = total1;

}


function substract(){


	var no1 = parseInt(document.getElementById("no1").value);
	var no2 = parseInt(document.getElementById("no2").value);
	var total2 = no1 - no2;

	document.getElementById('total2').innerHTML = total2;

}



function multiply(){


	var nu1 = parseInt(document.getElementById("nu1").value);
	var nu2 = parseInt(document.getElementById("nu2").value);
	var total3 = nu1 * nu2;

	document.getElementById('total3').innerHTML = total3;

}



function Average(){

	var grade1 = parseInt(document.getElementById("grade1").value);
	var grade2 = parseInt(document.getElementById("grade2").value);
	var grade3 = parseInt(document.getElementById("grade3").value);
	var average = (grade1 + grade2 + grade3 )/3;

	document.getElementById('average').innerHTML =average;

}


	if (result<7) {
		document.getElementById("status").innerHTML = "you failed";

	} else{
		document.getElementById("status").innerHTML = "you are approved";

	}

	{
		document.getElementById("result").innerHTML = "you average is " + result ;

	}




function Rain(){

	var rain = prompt("is it rainning? Yes:1 No:0");

	if (rain == 0) {
			console.log("Don't take your umbrella");
	} else { console.log ("take your umbrella")};
}


















































