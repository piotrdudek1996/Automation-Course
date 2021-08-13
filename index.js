console.log('Hello!');

var str = 'Jestem stringiem.';
let str2 = ' Też jestem stringiem.';
const str3 = ' Ale super, ja też.';
console.log(str+str2+str3);
let number1 = 4;
let number2 = 7;
let bigInt3 = 56456456546464;
let number4 = 324424242;
let number5 = 10;
let number6 = 6764;
let number7 = 3;
console.log(number1+number2);
let result = number2 * number1;
console.log(result);
console.log(typeof result);
console.log(bigInt3/number6);
console.log(number1+number2*number5-number7); 



// tu sobie wpiszę komentarz w jednej linijce
/* tu też komentarz w jednej linijce */
/*szaleństwo 
tu
komentarz 
w kilku
linijkach 
*/
let min = function(a,b,c) {
    if (a<=b && a<=c) {
        console.log(a + ' jest najmniejszą wartością')
        return a;
    }
    if (b<=a && b<=c) {
        console.log(b + ' jest najmniejszą wartością')
        return b;
    }
    else
        console.log(c + ' jest najmniejszą wartością')
        return c;
}

min(10,15,20);
min(69,1931,28355);
min(76,567,1);
min(5,9,3);
min(-1,-6,-7.84);
min(1/2, 3/4, 5/6);
min(5,5,6);
min(6,6,5);

let calc = function(d,e,f) {
    if (f == '+') {
        let res1 = d+e;
        console.log("Wynik dodawania wynosi " +res1);
        return res1;
    }
    if (f == '-') {
        let res2 = d-e;
        console.log("Wynik odejmowania wynosi " +res2);
        return res2;
    }
    if (f == '/') {
        let res3 = d/e;
        console.log("Wynik dzielenia wynosi " +res3);
        return res3;
    }
    if (f == '*') {
        let res4 = d*e;
        console.log("Wynik mnożenia wynosi " +res4);
        return res4;
    }    
    else {
        let undef;
        console.log(typeof undef +" operator jest niepoprawny");
    }
}

calc(2,4,'+');
calc(4,6,'-');
calc(7,3,'/');
calc(9,8,'*');
calc(9,7,'f');
calc(8,5,4);
