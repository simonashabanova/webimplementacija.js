// for (var i = 0; i < 10; i ++) {
//     console.log(i);
// }

// for (var i = 50; i <= 100; i++) {
//     console.log(i);
// }

// function sayHello(name, lastName) {
//     console.log("Hello " + name + " " + lastName);
// }

// sayHello("Amsterdam");

function Mountain () {

    var result = "";

    var Flat = function(size) {
        for(i = 0; i <= size; i++) {
            result += "_";
        }
    }

    var Peak = function(size) {
        result += "/";
        for (var i = 0; i <= size; i++) {
            result += "'";
        }
        result += "\\";
    }

    Flat(5);
    Peak(4);
    Flat(15);
    Peak(7);
    Flat(2);
    Peak(7);
    Flat(9);
    Peak(3);
    Flat(5);

    return result;
}

console.log( Mountain () ); 

var count = 6; 

for (var i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

var colors = ["red", "green", "blue"];

console.log(colors[0]);

// for (var i=0; i < colors.length; i++) {
//     console.log(colors[i]);
// }


var count = -1;
for (i= 0; i <= 100; i++) {
    if (i % 2 == 1) {
        count++;
        if (count % 3 ==0) {
            console.log(i);
        }
    }
}