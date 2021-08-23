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

// Lekcja 3 Zadanie 1
let odwroc =function(str) {
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 = str2 + str[i];
    }
    console.log(str2);
    return str2;
}

odwroc('hello');
odwroc("Trytytka");

// Lekcja 3 Zadanie 2
let usunZnak = function(a,b) {
    let c= a.replaceAll(b,"");
    console.log(c);
}

usunZnak("Hello World","l");
usunZnak("Ala ma psa","a");

// Lekcja 3 Zadanie 3

let firstAndLast = function(a) {
    if (a<0) {
         return console.log("Podana wartość ma być dodatnia");

    }
    if (a<10) {
        return console.log(a);
    }
    else { 
    a=a.toString();
    let b = a[0];
    let c = a[a.length-1];
    let d = parseInt(b,10);
    let e = parseInt(c,10);
    let result = d +e; 
    console.log(result);
    return result;
    }
}
firstAndLast("514");
firstAndLast("19");
firstAndLast("8");
firstAndLast("78965");
firstAndLast("-1");

// Lekcja 3 Zadanie 4
let sumParz = function(tabel) {
    let sum =0;
    for (let i=0; i<tabel.length; i++) {
        if (tabel[i] % 2 ===0) {
            sum+= tabel[i];
            
        }
    } console.log(sum);
}
sumParz([0,1,3,5,7,2,6,4]);
sumParz([11,58,63,1524,19,59,98,131]);

// Lekcja 3 Zadanie 5
let isFirst =function(liczba) {
    if (liczba ===0 || liczba===1) {
        return console.log(false);
    }
    if (liczba===2) return console.log(true);
    else {
        for (let i= 2; i<liczba; i++) {
            if(liczba%i ===0){
                 return console.log(false);
            }
        }
        return console.log(true);
    }

}

isFirst(11);
isFirst(69);
isFirst(111);
isFirst(73);
