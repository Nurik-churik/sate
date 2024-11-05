var score = 0;
var question1 = prompt("Қазақ хандығы қашан құрылды") 

if (question1 == 1465) {
    score++;
    alert("+1 upai")
} else {
    alert ("qate:")
}

var question2 = prompt("Қазақстан астанасы")  

if (question2 == 'astana') {
    score++;
    alert("+1 upai")
} else {
    alert ("qate:")
}



var question3 = prompt("Мектеп ағылшынша қалай") 

if (question3 == "School" || question3 == 'school'){ 
    score++;
    alert("+1 upai")
} else {
    alert ("qate:")
}



var question4 = prompt("сок ағылшынша қалай")

if (question4 == "drink") {
    score++;
    alert("+1 upai")
} else {
    alert ("qate:")
}




var question5 = prompt("5 + 5 неше болады") 



if (question5 == "10") {
    score++;
    alert("+1 upai")
} else {
    alert ("qate:")
}


alert("siz " + score + " Upai zhinadinyz")