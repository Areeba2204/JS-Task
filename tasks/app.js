//**** Chapter 1 (Alerts)

//1.

// var name= "Areeba";

// var lastname="Akhlaque";

// var email= "areeba.akhlaque@gmail.com";

// var phone = 123456789;

// var password = "*********";

// alert("First Name : " + name);
// alert("Last Name : " + lastname);
// alert("Email : " + email);
// alert("Phone Number : " + phone);
// alert("Password : " + password);



//2.

// alert("You're learning JavaScript");



//3.

// alert("JavaScript says, Hello World");






//*********Chapter 2 (Variables for string)

//1.
// var a= "JavaScript";
// console.log(a);



//2.
// var b;
// b= "myName";
// console.log(b);



//3.
// var  teamName;





//4.
// var bestMan = "Charlie";
// bestMan= "Areeba";
// console.log(bestMan);








//**********Chapter 3 (Variables for numbers) */

//1.

// var s = "caseQty";



//2.
// caseQty=144;


//3.
// var num = 9;




//4.
// var x;
// x= 3+6;
// console.log(x);


 
//5.
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// console.log(orderTotal);



//6.
// var c=6;
// c=c+5;
// console.log(c);









//*********Chapter 4 (Variable names Legal and Illegal)

//1.
var product_cost = 3.45;

//2.
var nameOfBand;

//3.
var a10 = 10;

//4.
var areebaAkhlaque;


//5.
/*Legal Variable Names:

a123
abc
helloWorld
s_234

Illegal Variable Names:

#abc
$abc
hello world
*/








//******Chapter 5 (Math Expression I)


// 1. 
//Modulus Operator (%)


// 2. 
var num = 20 % 6;
console.log(num);



// 3.
var largeNum;
largeNum = (1000 * 2000);
console.log(largeNum);


//4. 
var a = 134;
var b = 89;
var sub = a - b;
console.log(sub);




// 5.
var r;
r = (9 % 2);
console.log(r);



//6. 
// alert(24*42);







///**********Chapter 6 (Math Expression II)


//1.
// x +=  1;



//2.
// x=100;
// x -= 1;
// console.log(x);




//3.
var x = 50;
var y = x++;
console.log(y)





//4.
var y = 50;
var z = --y;
console.log(z);



//5.
num = 45;
newNum = num -= 1;
console.log(newNum);




//6.
var number = 98;
n = number += 1;
console.log(n);





//7.
var m = 65;
// alert(m+1) ;









//*********Chapter 7 (Math Expression III) */

//1.
// var calculatedNum = 2 + (2 * 6);
// console.log(calculatedNum);

//2.
// var calculatedNum2 = (2 + 2) * 6;
// console.log(calculatedNum2);

//3.
// var calculatedNum3 = (2 + 2) * (4 + 2);
// console.log(calculatedNum3);

//4.
// var calculatedNum4 = ((2 + 2) * 4) + 2;
// console.log(calculatedNum4);



//5.
cost = (2 + 2) * (4 + 10);
console.log(cost);


//6.
units = 2 + (2 * 4) + 10;
console.log(units)



//7.
pressure = (4 / 2) * 4;
console.log(pressure)




//**********Chapter 8 (Concatenating Text Strings)

//1.
var num = "2" + "2";
console.log(num);


//2.
var message = ("Hello," + "Dolly");
// alert(message);


//3.
// alert("33" + 3);


//4.
var p = "Pakistan";
var z = "Zindabad";
// alert((p+" "+z));


//5.
var concat = "st" + 5;
console.log(concat);




//6.
var a = "Areeba ";
var b = "Akhlaque";
var c = (a + " " + b);
console.log(c);










// *************Chapter 9 (Prompts)


//1.
// prompt("enter first name");


//2.
// var country = prompt("Country ? ", "China");


//3.
// var yourName = prompt("Enter Your Name");


//4.
// prompt("Favourite Dish ? ", "Biryani");


//5.
// var country="Country ? ";
// var p="Pakistan";
// var ans=prompt(country,p);


//6.
// var country="Country ? ";
// var p="Pakistan";
// var ans=prompt(country,p);
// alert("Country : " + ans);









// *********************Chapter 10 (if statments)


//1.
var city = "Karachi";
if (city == "Karachi") {
    console.log("The City OF Lights");
}



//2.
// x=5;
// y=5;

// if (x === y) {
//     z = prompt("enter the value of z")
//     console.log(z);
// }




//3.
// var zipcode = 10011;
// if (zipcode===10010){
//     alert("Karachi"); 
// }
// else {
//     alert("Please write correct city");
// }




//4.
var x = 1;
if (x === 1) {
    x = 7;
}
console.log(x);






// ***************Chapter 11 (Comparison Operators)

//1.
var a = 23;
var b = '23';
a != b;




//2.
var x = 3;
var y = 4;
if (y >= x) {
    console.log("hello");
}


//3.
if (x != 4) {
    x = 4;
    console.log(x);
}




//4.
// var x =1;
// var y = 2;
// if (x != y) {
//     alert("congratulations");
// }






//5.
// var first= "Areeba";

// var first_name = prompt("Enter First Name");

// if (first != first_name){
//     alert ("No Match") ;
// }








// *************Chapter 12 (if…else and else if statements)

//1.
// if (x >= 3) {
//     alert("x is greater or equal to 3");
// } 
// else{
//     alert("x is less than 3")
// };



//2. Marksheet

// var marks= +prompt("Enter Your Marks");

// var percentage = (marks/100) *100;

// if (percentage >= 80) {
//     alert('Your Grade is A');
// }
// else if (percentage >= 70) {
//     alert ('Your grade is B');
// }    
// else if(percentage >= 60) {
//     alert ('your grade is C');
// }
// else {
//     alert( 'F')}


//3.
// var a = 12;
// if (a === 10) {
//     alert("a is 10");
//    }
// else{
//     alert("The correct value of a is " + a)
// }


//4.
// var city = prompt("Enter a city");

// if (city == "Karachi") {
//     alert("It is Karachi");
// }

// else if( city == "Lahore"){
//     alert ("it is Lahore"); }
// else{
//     alert("I don't know this place");}










// **********************Chapter 13 (Testing sets of conditions)

//1.
var a = 5;
var b = 10;
var c = 10;
var d = 10;

if (b && c === 10) {
    console.log("both b and c are equal to d");
}


//2.
if ((a === b) || (c != d)) {
    console.log('some conditions are true');
}
else {
    console.log('false');
}





//3.
// var name1 = "Hamza";
// var name2 = "Arsalan";
// var name= prompt("enter name");
// var age = +prompt("enter age");

// if ((name1 || name2 === name) && (age < 60)){
//     console.log("name : " + name + "\n age : " + age)
// }
// else{
//     console.log("try again") ;
// }




//4.
// if ((a<b) || (a>b)){
//     alert(true);
// }




//5.
// var first_name= "Areeba";
// var last_name= "Akhlaq";

// var f= prompt("Enter First Name");
// var l= prompt ("Enter Last Name");

// if ((f == first_name) && (l == last_name))
// {
//     alert ("Hello I'm Areeba")
// }







// **************Chapter 14 (If statements nested)

//1.
// var password = prompt("enter password");

// if (password != ""){
//     if (password.length <= 5){

//         alert("Password must be greater than 5" );

//     }
//     else if (password > 5){
//         alert("OK");
//     }
// }





//2.
var a = 1, c = "Max";

// if (a === 1) {
//     if (c === "Max") {
//    alert("OK");
//     }
// }  


//3.
// if ((a === 1) &&  (c === "Max")){
//    alert("OK");
//     }




//4.
// var m = 7;
// var n = 7;

// if (m == n){
//     if (m <= n){
//         alert('true');
//     }
// }









// *****************Chapter 15 (Array I)

//1.
var ar = [];


//2.
var ary = [1];


//3.
var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]); 



//4.
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
console.log(alphabet.length);



//5.
// var arr= [1];
// arr[0] = 2;
// alert(arr);









// ****************Chapter 16 (Array II)


//1.
// var aryy= [3];
// aryy.push(4);

// alert(aryy[1]);


//2.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(3);


//3.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(4);




// **********Chapter 16 (Array III)

//1.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();


//2.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift("P", "Q", "R");


//3.
var s = ["t"];
s.unshift("s");
// alert(s[0]);


//4.
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// alert(sizes);


//5.
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// regSizes = sizes.slice(2);
// alert(regSizes);



//6.
// var pets = ["dog", "cat", "ox", "duck", "frog"];

// pets.splice(1, 3, "mouse", "rat", "fish");
// alert(pets);



//7.
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,2);
// alert(pets);



//8.
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

pets = pets.slice(3, 5);
// alert(pets);








// *********************Chapter 17 - 20 (for Loops)


//1.
// for (i=1; i<=10; i++){
//     document.write(i ,"<br>");
// }


//2.
// for (a=0; a<=12; a++){
//     document.write(a ,"<br>");
// }


//3.
// for (var i = 0; i <= 4; i++){
// }


//4.
// for (n=0; n<101; n++){
//     document.write(n, "<br>");
// }


//5.
// for (a=9; a>0; a -= 3){
//     document.write(a,"<br>");
// }



//6.
// var a=[0,1,2,3,4,5,6];
// for (i=0; i< a.length; i ++){
//     document.write(a[i], "<br>");
// }


//7.
var flag = true;



//8.
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
//  for (i=0; i< pets.length; i++)
//  {
//     console.log(pets[i]);
//  }




//9.
// for (i=0; i<=10; i++){
//     if (i=1){
//         alert(i);
//         break;
//     }

// }



//10.
// var firstname =prompt("enter first name");
// var namz=["a","b","c","d"];


// for (x in namz){
//     if(firstname == namz[x]){
//         alert("enter");
//         break;
//     }

//     else
//         {alert("please write correct user name");
//     break;} 
// }



//11.
// var userInput = prompt("enter name");
// var list = ["Areeba", "Azalfa", "Nabeegh"];
// var matchFound = false;

// for (i=0; i<= list.length; i++){
//     if (userInput === list[i]){
//         matchFound = true;
//         alert("Match Found");


//     }
// }
// if(matchFound === false){ 
//         alert("No Match Found");



//12.
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (i in firstArr){
//     for (j in secondArr){
//         console.log((firstArr[i]) + (secondArr[j]));

//     }

// }







//***********************Chapter 21 (Changing Case) */

//1.
// var userInput = prompt("");
// var allLower = userInput.toLowerCase();
// console.log(allLower);


//2.
x = ("Hello World!");
x = x.toLowerCase();
console.log(x);


//3.
y = ("pakistan");
y = y.toUpperCase();
console.log(y);


//4.
z = y.toLowerCase();
console.log(z);



//5.
a = ["CAT", "DOG", "FISH"];
for (i in a) {
    c = a[i].toLowerCase();
    console.log(c);
}


//6.
r = "hello! how are you?"
// alert(r.toUpperCase());


//7.
// var cityName = "kaRacHi";
// first = cityName.slice(0,1);
// first = first.toUpperCase();

// second = cityName.slice(1,7);
// second = second.toLowerCase();

// cityName = first+second;
// console.log(cityName);









// ***************Chapter 22 - 25 (Strings)


//1.
// var sameWords ="captain";
// one= sameWords.slice(0,1);
// two= sameWords.slice(3,7);
// sameWords = one+two ;
// console.log(sameWords );


//2.
var sameWords = "captain";
sameWords = sameWords.length;
console.log(sameWords);


//3.
var animal = "elephant";
f1 = animal.slice(0, 2);
f2 = animal.slice(6, 8);
seg = f1 + f2;
console.log(seg);


//4.
var str = "Areeba";
st = str.length;
console.log(st);



//5.
var animal = "elephant";
x = animal.length;
y = animal.slice(0, 1);
z = animal.slice(5, 8);
var n = y + z;
console.log(n);



//6.
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx);


//7.
var text = "This is the go-to place to go when you need to go."
var indx = text.lastIndexOf("g");
console.log(indx);



//10.
h = "abcde";
console.log(h.charAt(2));



//11.
var text = "To be or not to be.";
cha = text.charAt(10);
console.log(cha);



//12.
str = "hello";
x = str.charAt(str.length - 1);
console.log(x);



//13.
// var user=prompt("enter string");
// cha = user.charAt(5);
// alert(cha);


//14.
strg = "hello_world";
if (strg.charAt(3) == 'l') {
    console.log('true');
}
else {
    console.log('false');
}


//15.
reply = "no";
for (x in reply) {
    var revisedReply = reply.replace("no", "yes");
    console.log(revisedReply);
}


//16.
str = [1, 2, 3];
for (i in str) {
    var newstr = i.replace(1, "one");
    console.log(newstr);
}




//17.
x = "aza";
y = x.replace(/a/g, "z");
console.log(y);





//***********Chapter 26 (Rounding Numbers) */

//1.
var num = Math.round(37890.45);
console.log(num);


//2.
var origNum = 234.567;
var roundNum = Math.floor(origNum);
console.log(roundNum);


//3.
var origNum = 234.567;
var roundNum = Math.ceil(origNum);
console.log(roundNum);


//5.
var origNum = 124.5;
var roundNum = Math.floor(origNum);
console.log(roundNum);



// ***************** Chapter 27 (Random Numbers)

//1.
console.log(Math.random() * 50);



//2.
x = Math.random() * 100;
y = Math.floor(x);
console.log(y);



//3.
a = Math.random() * 6;
b = Math.floor(a);
// alert(b);



//4.
// x= Math.random()*10;
// if (x>=5){
//     alert("Head");}
//     else{alert("Tail");}




// ***************Chapter 28, 29 (Converting Strings)

//1.
var x = "23";
console.log(parseInt(x));



//2.
var y = "123";
y = parseInt(y);
console.log(typeof (y));



//3.
var z = "45.7";
console.log(parseFloat(z));



//6.
var a = 6;
console.log(String(a));

var a = 42;
a = a.toString;
console.log(a);


//7.
var str = "3.14";
console.log(parseFloat(str));




// **********************Chapter 30 (Controlling the length of decimals)


//1.
var num = 45645.34564564;
num = num.toFixed(4);
var newNum = String(num);
console.log(newNum);



//2.
var a = (2345.234535).toFixed(2);
a = String(a);
console.log(a);
a = parseFloat(a);
console.log(a);



//3.
var num = 45645.34564564;
if (num.toFixed(2).toString().length > 4) {
    console.log(" value " + num);
}
else {
    console.log("Change the value");
}



//4.
// var num= 45645.34564564;
// alert(num.toFixed(2).toString());






// ******************Chapter 31 - 34 (Date & Time)

//1.
var dObj = new Date();
// alert('Today ' +dObj );


//2.
var dStr = dObj.toDateString();
// alert ('Date today : '+ dStr);



//3.
var d = dObj.getDay();
console.log('day : ' + d + ' of 7');
//4.
var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// alert('Today : ' + week[d] + week[d].indexOf());





//5.
var dObj = new Date();
console.log(dObj);

var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var d = dObj.getDay();
console.log("Day  : " + week[d])

var mnth = dObj.getMonth();
var m = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log("Month : " + m[mnth]);

var yr = dObj.getFullYear();
console.log("Year: " + yr);

// var tm= dObj.getTime();
// console.log(dObj.toLocaleTimeString());

var sec = dObj.getSeconds();
var mint = dObj.getMinutes();
var hour = dObj.getHours();

console.log(hour + ":" + mint + ":" + sec);




//6.
var date1 = new Date(2020, 11, 31);
console.log("Last Day Of Last Month is" + date1);

var last_day = date1.getDay();
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
last_day = week[last_day];
console.log(last_day);

var last_month = date1.getMonth();
var m = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
last_month = m[last_month];
console.log(last_month);

console.log("Last Month : " + last_month + "  \nLast Day of 2020 is " + last_day);





//7.
var date2 = new Date(1992, 1, 2);
console.log(date2);
var mon = m[date2.getMonth()];
var da = week[date2.getDay()]
console.log("Second day of second Month 1992 : " + da + "  \n Second month of 1992 : " + mon);



//8.
// var j = new Date();
// var dj = new Date(1980, 1,1);
// var mili= j-dj;
// alert(mili);



//9.
// j = new Date();
// console.log(j);
// j.setYear(2022) ;
// console.log(j);




//10.
// function mth(dte) {
//     dte.setMonth(0);

//     return dte;
//   }

//   var current_date = new Date();
//   var updated = mth(current_date);
//   console.log(updated);







//11.
j = new Date(2022, 3, 22);
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
j.setDate(11);
dj = j.getDay();
// alert("The Day is "+week [dj]);



//12.
// j= new Date();
// var gt= +prompt("Enter Minute value");

// gt = j.setMinutes(gt);
// alert ("New date" + j);



//13.
// j= new Date();
// var gt= +prompt("Enter Hour value");

// gt = j.setHours(gt);
// alert ("New date" + j);







//14. // Age Calculator//

// var c= new Date();

// var yob= +prompt("Enter Your Birth Year");
// var mob= +prompt("Enter your Birth Month");
// var dob= +prompt("Enter Your Birth Date");

// var cd= new Date(yob, mob, dob);

// var y= cd.getFullYear();
// var m= cd.getMonth();
// var d= cd.getDate();


// var cy = c.getFullYear();
// var cm = c.getMonth();
// var cd = c.getDate();

// year= Math.abs(cy-y);
// month= Math.abs(cm-m);
// day= Math.abs(cd-d);
// alert("You are  " + year + " Years " + month  +" Months and " + day +" Days old")










// *************************Chapter 35 - 37 (Functions)


//1.
// function displayAlert() {
//     alert('Hello World');

// }
// displayAlert();


//2.
// function askName(){
//     var userName= prompt ("Enter Name");
// }
// var user =askName ();



//3.
function one() {
    console.log("Function 1");
}
function two() {
    console.log("Function 2");
}

function three() {
    one();
    two();
}
three();




//4.
// function call(){
//     var pr=prompt("Enter Name");
//     return pr;
// }
// calling=call () ;
// alert(calling);


//5.
function conCat(a, b, c) {
    return b;
}
co = conCat(1, 2, 3);
console.log(co);



//6.
function add(a, b) {
    var result = a + b;
    return result;
}
d = add(2, 3);
console.log(d);




//7.
function mul(u, v, w) {
    var m = u * v * w;
    return m;
}
var ml = mul(2, 3, 4);
console.log(ml)





//10.
// function aryy([a,b,c,d]){

//     var z=[a,b,c,d];
//     return z;
// }
// var a= +prompt("Enter number");
// var b= +prompt("Enter number");
// var c= +prompt("Enter number");
// var d= +prompt("Enter number");    
// var e = [a ,b,c,d];

// var f= aryy (e );
// f= (a+b+c+d)/f.length
// alert ("The array is " +f );




//11.
// function t(d){

//     return 4;
// }
// v=t();
// alert("Stored value is "+v);




//12.
function se(word, letter) {
    var b = 0;
    var a = 0;
    for (a; a < word.length; a++) {
        if (word.charAt(a) == letter) {
            b += 1;
        }
    }
    return b;
}

console.log(se("areeba", 'b'));





//13.
function dd(v) {
    var d = new Date();
    d.setYear(v);
    return d;

}
cv = dd(2016);
console.log('Today date ' + cv);






//14.
function dob(years) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var years = Math.abs((currentYear - years));

    return years;
}
var yrs = dob(2003, 2, 1);
console.log('You are ' + yrs + ' Years old');



//15.
function aryy(array, word) {

    if (array.includes(word)) {
        console.log("true");
    }

    else {
        console.log("false");
    }

    return word;

}
var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];

aryy(array, 'raza');




//16.
function def(letter) {
    l = letter.repeat(10);
    return l;
}
console.log(def('abcd'));






//17.
function rev(array) {
    r = array.reverse();
    return r;

}
array = ['a', 'b', 'c', 'd', 'e'];
console.log(rev(array));






// ************Chapter 38 (Local vs. Global Variables)


//1.
function local() {
    var localvar = [1, 2, 3];
    console.log(localvar)
}
local();



//2.
var globally = "global variable";

function global() {
    console.log(globally);
}
global();






// *********************Chapter 39, 40 (Switch Statements)


//1.
var sub = "Computer";
city = city.toLowerCase();

switch (sub) {
    case "Chemistry":
        console.log("Chemistry");
        break;
    case "Physics":
        console.log("Physics");
        break;
    case "Computer":
        console.log("Computer");
        break;

    default:
        console.log("Not Avaiable");
}






//2.
// var city = prompt(" Enter Your City Name");
// city= city.toLowerCase();

// switch (city) {
//     case "karachi":
//         alert("City of Light");
//         break;
//     case "lahore":
//         alert("Second Largest city of Pakistan");
//         break;
//     case "hyderabad":
//         alert("City of Peace");
//         break;
//     case "islamabad":
//         alert("Capital of Pakistan");
//         break;
//     default:
//         alert("It is very Beautiful City");
// }





// ****************** Chapter 41, 42 (while loops, do…while loops)


//1.
// var i=0;
// while (i<=2){
//     i++;
//     alert(i);

// }


//2.
// var animals=["horse", "ox", "cow", "pig", "duck"];

// var a=0;

// while (a < animals.length){
//     if (animals[a] =="pig"){

//         alert ("found it") ;
//         break;
//     }
//     a++;
// }




//3.
//     var i=0;
// ;
// do{
//     document.write(i + "<br>");
//     i++
// }
// while(i<=10);



//4.
// var i = +prompt("enter number");

// while(parseInt(i)){

//     alert("You Entered" + i);
//     break ;

// }



//5.
// var num = +prompt('Enter any Number');

// while(num % 2 == 0){
//     alert ('Even' );
//     break;
// }
// if (num % 2 != 0){
//     alert ('Odd')
// }






//6.
// var guess = +prompt("Guess the Number between 1 to 100");

// var rndom = Math.random()*100;
// rndom= Math.floor(rndom);
// a=0;
// console.log(rndom);

// while(a<5){

//     if(guess === rndom){
//         alert ("Congratulations you WON");
//         break;
//     }

//     else{
//         alert("Wrong Answer.. Try Again");
//         alert("Correct answer is : " + rndom);
//         break;
//     }
// }


//7.
// var c=10;
// alert("Countdown Begins")

// do{    
//     alert(c);
//     c--;

// }
// while(c>=0){
// }







//**************Chapter 46, 48 (Events) */


//1.
function clickme() {
    alert("Welcome to my web");
}


//2.
function hiding() {
document.getElementById("peratwo").style.display= "none";
}


//3.
var col = document.getElementsByTagName("a");
col[0].style.color = 'blue';

function Over() {
    col[0].style.color = "orange";
}
function Out() {
    col[0].style.color = "blue";
}


//4.
function topp() {
    var t = document.getElementById("btntop");
    window.scrollTo({ top: "25%", behavior: "smooth" });

}


//5.
function play() {
    var audio = new Audio('click_sound.mp3');
    audio.play();
}


//6.
function opening() {
    window.open('../tasks/index.html ', target = 'popup', '/');

}


//7.
function hey(){
    alert("Hello! How can I help you?");
}



//8.
var btn= document.getElementById('mybtn');
btn.style.color='Black';
function Over() {
    btn.style.backgroundColor = "grey";
    btn.style.color='white'
}
function Out() {
    btn.style.backgroundColor="White";
    btn.style.color = "black";
}


//9.
function startplay() {
    var aud = new Audio('btn_click.wav');
    aud.play();
}


//10.
var p2= document.getElementById('peratwo');



//11.
function Over(){
    alert("You can hide the pera by click on Hide button")
}



//12.
function openwindow() {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    window.open('../tasks/index.html ', target = 'popup', '/', 'width=' + mouseX + ', height=' + mouseY);

}
function closewindow() {
    window.close('../tasks/index.html ', target = 'popup', '/');
}





// **************************Chapter 49, 50 (Reading and Setting field values)

//1.
function submit(){
    var i= document.getElementById("inputfield").value;
    console.log(i);
}




//2.
function chk(){
    var c=document.getElementsByName("Programming language");
    for (x of c ){
        if(x.checked==true){
            console.log(x.value);}
            }
}


//3.
function selectbox(){
    
    var le=document.getElementById('levels');
    for (m of le){
        if (m.selected==true){
            console.log(m.value)}

    }
}


//4.
function enters(){
    var t=document.getElementById('text1');
    console.log(t.value);
}



//5.
function m_status(){
    var ss = document.getElementById("status");
    for (m of ss){
        if(m.selected==true){
            if (m.innerHTML === "Single"){
                m.value = "Avaiable";
                console.log(m.value);
            }
            else{
                console.log ("Not Available")
            }
        }}
}


//6.
function emty(){
    var empt=document.getElementById("inp");
        if(!empt){
            empt="Unknown person";
            console.log(empt)
        }
    
}



//7.
function subj(){
    
    var username = document.forms["registration"]["username"].value;
    var email = document.forms["registration"]["email"].value;
    var password = document.forms["registration"]["password"].value;
    var number = document.forms["registration"]["phone"].value;
    var address = document.forms["registration"]["adres"].value;
    
    if (!username) {
        alert("Please enter a username");
        return ;
    }
    
    if (!email) {
    alert("Please enter an email");
    return ;
    }

    if (!password) {
    alert("Please enter a password");
    return ;
    }
    
    
    if (!number){
        alert ("please enter a phone no.") ;
        return ;
    }
    
    if (!address){
        alert ("please enter an address") ;
        return ;
    }

alert("Registration successful!");
return true;
  
}






//************Chapter 51 (Reading and Setting paragraph text) */

//1.
function reading(){
    var r= "Unde amet magnam eum? Ipsam nesciunt voluptatibus repudiandae alias aliquid, eveniet a laboriosam doloremque deserunt. Praesentium harum sint totam temporibus eum? Nesciunt, et. Quas vel odit officia fugit iusto repellat nemo commodi, earum nam debitis placeat tenetur beatae nihil exercitationem blanditiis illo possimus consequatur cum et dolor tempore magnam. Placeat, deserunt. Assumenda officia nostrum quo beatae possimus distinctio repellat qui cum a quod aspernatur expedita recusandae, voluptas, totam ad. Neque quisquam sapiente molestiae alias ex, libero quidem omnis optio amet iste?";
    var para= document.getElementById("p1").innerHTML;  
    document.write(para + r);
    
    var b=document.getElementById("bt");
    b.style.display='none';
    return true;
}



//2.
var para= document.getElementById("p1").textContent;
var words= para.split(" ");
var searching= 'ipsum';
for (i = 0, len = words.length; i <len; ++i ) {
    console.log (words[i].indexOf(searching));
};





//3.
var para= document.getElementById("p1").textContent;

var word = para.split(" ");
var longest_word = "";

for (i = 0; i < word.length; i++) {
  if (word[i].length > longest_word.length) {
    longest_word = word[i];
  }
}
console.log("The longest word of this paragraph is: " + longest_word);





//4.
function field(){
    var t=document.getElementById("textfield").value;
    var para= document.getElementById("p1");
    
    if(t !== " "){
            para.textContent= t;

    }
    else{
                alert ("Please enter a text in the box.");
    }         
}





//5.
function specific(){
    var t=document.getElementById("textid").value;
    t=t.toLowerCase();
    var par= document.getElementById("p3");
    var search= 'welcome';
    
        
    if(t  == search){
        par.innerHTML= t;
    }

    else{
        alert("value does not match");
    }
}
      



//6.
function lenth(){
    var t=document.getElementById("text4").value;
    t=t.toLowerCase();
    var par= document.getElementById("p4");


    i=0;
        if (t.length < 20 && t.length > 0) {
            par.innerHTML = t;
            console.log("The length of this text is: " + t.length);
            
        }
        else{
            alert('please enter less than twenty characters');
        }  
    
}











/// *********************Chapter 52 (Manipulating Images and Text)

//1.
function boldpera(){
    var p= document.getElementById("p5");
    p.style.fontWeight='900';
    
}




//2.
var img1= document.getElementById("img1") ;
var para6 = document.getElementById('p6');
para6.style.display='none';

function mouseout(){
    var doc=document.getElementById('imagetext');
    img1.style.display='block';
    para6.style.display='none';
    

}
function mouseover(){
    var doc=document.getElementById('imagetext');
    img1.style.display='none';
    para6.style.display='block';

}



//3.
var head= document.getElementById("newd");
head.style.color='lightgrey';

function mover(){
    head.style.backgroundColor='black';
}
function mout(){
    head.style.backgroundColor='white';
}





//4.
var para7=document.getElementById("p7");
function mver(){
    para7.style.textDecoration='underline';
}
function mut(){
    para7.style.textDecoration='none';
}












//  **************Chapter 52 (Swapping Images)

//1.
// function swapImages() {
//     var image1 = document.getElementById("image1");
//     var image2 = document.getElementById("image2");
    
//     var tempSrc = image1.src;
//     image1.src = image2.src;
//     image2.src = tempSrc;
//   }
  

var img1= document.getElementById('image1');
var img2= document.getElementById('image2');


function before(){
    // var img1= document.getElementById('image1');
    img1.style.display='block';
    img2.style.display='none';
}

function after(){
    // var img2= document.getElementById('image2');
    img1.style.display='none';
    img2.style.display='block';
}