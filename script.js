// TASK 1
var name = "Mike";
var time = "19:00";
var place = "Lviv";
var event = prompt("What kind of meeting?", "Dinner");

console.log(name + " has a " + event + " today at " + time + " somwhere in " + place);

alert(name + " has a " + event + " today at " + time + " somwhere in " + place);

//TASK 2
 var euro = 32.2;
var dollar = 27.1;


 var userEuro;
 do {
   userEuro = prompt("Enter ammount of EUR","0");
 } while (userEuro.trim() === "" || isNaN(userEuro)); 

 var userDollar;
 do {
   userDollar = prompt("Enter ammount of $","0");
 } while (userDollar.trim() === "" || isNaN(userDollar)); 
 


 var EurToGrn = userEuro * euro;
 var DolToGrn = userDollar * dollar;
 var EurToDol = euro / dollar;



 alert(userEuro + " Euro equals " + EurToGrn.toFixed(2) + " Grn" + ", " + userDollar + " Dollars equals " + DolToGrn.toFixed(2) + " Grn" + ", one Euro equals " + EurToDol.toFixed(2) + " Dollars");