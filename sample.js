/*ibm*/ 
var weight=55;
var height=1.82;
var bmi=weight/(height*height);
var category="";
switch(true){
    case bmi <18.5:
        category="underweight";
        break;
        case bmi>=18.5&&bmi <24.9:
            category = "normal weight";
            break;
            case bmi= "overweight":
            break;
            case bmi >= 30:
            category = "invalid Bmi";
}
console.log("bmi :", bmi.toFixed(2),category);

/* what is the month and per day salary*/
var empname ="Sai";
var  empsalary="700000";
var year="2026"
var noofleaves="6"
var month=11;
var monthsal;
var daysal;
 if(month==2){
    if((year%4==0&&!(year%100==0)||year%400==0)){
        perdaysal=Math.floor(700000/366);
        monthsal=perdaysal*28;
        monthsal=monthsal-(perdaysal*noofleaves);
    }
    else{
        perdaysal=Math.floor(700000/365);
        monthsal=perdaysal*29;
        monthsal=monthsal-(perdaysal*noofleaves);
    }
 }

 else if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    perdaysal=Math.floor(700000/365);
    monthsal=perdaysal*31;
    monthsal=monthsal-(perdaysal*noofleaves);
 }
 else if(month==4||month==6||month==9||month==11){
    perdaysal=Math.floor(700000/365);
    monthsal=perdaysal*30;
    monthsal=monthsal-(perdaysal*noofleaves);
 }
 console.log("name:",empname,"monthsalary:",monthsal,"perday salary:",perdaysal);
 /*sum*/
  let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum =", sum);

/* name*/
let name = "Sai";
let age = 22;

console.log(name);
console.log(age);


console.log("hello word!");

let num = 30;
if(num>10) {
    console.log("numder is graterthan 10");
}
else{
    console.log("10 is less than number");
}

let d = 10;
let f = 20;
let g = 15;

if (d > f && d > g) {
    console.log("D is Largest");
} else if (f > g) {
    console.log("F is Largest");
} else {
    console.log("G is Largest");
}
/* while loop */ 
 

/* display below 20 in odd numbers */
 var i=1;
while(i<20){
    if( i %2)
    console.log(i);
    i+= 2;
}



var n1 = 0,n2 = 1;
while(n1<=20){
    console.log(n1);
    var nextnumber = n1 + n2 ;
    n1=n2;
    n2=nextnumber;
}

//do while
var i=1;
var limit=10;
do{
console.log(i);
1<=3;
i++;
} 
while(i< limit);

// 
var i=15;
var limit=10;
do{
if(i < limte){
    console.log(i);
    i++;
  }
   else{
    console.log("i is grater then limit");
}
}while(i< limit);

// 1  to 10 2 numbers add -10-2 numbers display
 var i=1,j;

 while(i < 10){
    j=10;
    while(j>0){
        if(i+j == 10){
            console.log(i,j);

        }
        j--;
    }
    i++;
 }


