
function wyczysc() {
    document.getElementById("result").value = "";
   }
   

   function wyswietl(value) {
    document.getElementById("result").value += value;
   }

   function oblicz() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }