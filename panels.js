function login() {
    const panel1 = document.getElementById('panel1');
    panel1.classList.remove('active');
    panel1.classList.add("panel-hidden");

    const panel3 = document.getElementById("panel3");
    panel3.classList.add('active');
}


function activePanel(index) {

    const activePanel = document.getElementsByClassName('active');
    activePanel[0].classList.add('panel-hidden');
    activePanel[0].classList.remove('active');

    const panels = document.getElementsByClassName('panel');
    panels[index].classList.add('active');
}
// walidacja hasła z neta
function checkPassword(passProvided) {
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(passProvided.match(paswd)) 
    { 
    return true;
    }
    else
    { 
    return false;
    }
}
// można było bez delay, ale w razie gdyby potrzebna była kiedyś odpowiedź serwera
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  class User {
    constructor (login,password) {
        this.login = login;
        this.password = password;
    }
}


// LOG
let users = [];

const buttonLogowanie = document.getElementById('buttonLogowanie');
buttonLogowanie.addEventListener('click', () => {
    const loginButton = document.getElementById('logowanieInput');
    const login = loginButton.value;

    const passwordButton = document.getElementById('hasloLogInput');
    const password = passwordButton.value;

    let usersVal = JSON.parse(localStorage.getItem('accounts'))

    for (let i=0; i<usersVal.length; i++) {
        if (usersVal[i].login ==login && usersVal[i].password == password) {
            // czyszczenie pól po logoucie
            loginButton.value= '';
            passwordButton.value= '';
            activePanel(2);
            render();
            return login;
        }
    }
delay(100).then(() => alert('Login lub hasło jest nieprawidłowe, spróbuj ponownie.'));
// czyszczenie pól po złym wpisaniu danych
loginButton.value = '';
passwordButton.value = '';

})

const btnRejestracjaLog = document.getElementById('buttonRejestracjaLog');
btnRejestracjaLog.addEventListener('click', () => {

    const loginButton = document.getElementById('logowanieInput');
    const passwordButton = document.getElementById('hasloLogInput');

    loginButton.value = '';
    passwordButton.value = '';

    activePanel(1)
})

// REJ

const buttonRejestracja = document.getElementById('buttonRejestracja');
buttonRejestracja.addEventListener('click', () => {

    const regLogowanieInput = document.getElementById('regLogowanieInput');
    const regLogowanieInputValue = regLogowanieInput.value;

    const regHasloInput = document.getElementById('regHasloInput');
    const regHasloInputValue = regHasloInput.value;

    checkPassword(regHasloInputValue);

    users = JSON.parse(localStorage.getItem('accounts'));

    if (users == null) {

        users =[];
    }

    let usersVal = JSON.parse(localStorage.getItem('accounts'));

    if (usersVal != null) {
        for (let i=0; i<usersVal.length; i++) {
            if (usersVal[i].login ==regLogowanieInputValue) {

                regLogowanieInput.value = '';
                regHasloInput.value = '';

                return delay(100).then(() => alert('Login jest zajęty przez innego użytkownika.'));
            }
        }
    }

    if (regLogowanieInputValue != '' && checkPassword(regHasloInputValue) == true) {

        regLogowanieInput.value = '';
        regHasloInput.value = '';

        users.push(new User (regLogowanieInputValue, regHasloInputValue));

        localStorage.setItem('accounts', JSON.stringify(users));

        delay(100).then(() => alert('Gratulacje!! Zarejestrowałeś się na FAKTUROWNIA. Teraz możesz się zalogować i dodawać faktury. '));
        activePanel(0);
    }
    else {
        delay(100).then(() => alert('Hasło musi mieć od 7 do 15 znaków. Musi posiadać przynajmniej jedną wielką literę i jeden znak specjalny. '));
    }

})
const powrot = document.getElementById('powrot');
powrot.addEventListener('click', () => {
    const regLogowanieInput = document.getElementById('regLogowanieInput');
    const regHasloInput = document.getElementById('regHasloInput');


    regLogowanieInput.value = '';
    regHasloInput.value = '';

    activePanel(0);
})




const wyloguj = document.getElementById('wyloguj');
wyloguj.addEventListener('click', () => {
    
    activePanel(0);
    
})
const fakturaList = [];
const dodaj = document.getElementById('dodajFakture');
dodaj.addEventListener('click', () => {
    const fakturaNumberInput = document.getElementById('numerFaktury');
    const fakturaNumber = fakturaNumberInput.value;

    const fakturaOpisInput = document.getElementById('opisFaktury');
    const fakturaOpis = fakturaOpisInput.value;

    const fakturaPriceInput = document.getElementById('cenaFaktury');
    const fakturaPrice = fakturaPriceInput.value;

    const fakturaNIPInput = document.getElementById('numberNIP');
    const fakturaNIP = fakturaNIPInput.value;
   // window.localStorage.setItem('Invoices',);
    let fakturaList = JSON.parse(localStorage.getItem('invoices'));
    if (fakturaList == null) {
        fakturaList =[];
    }
        

     //   render();
    
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }

    let id = s4();

    const post = new Post (fakturaNumber, fakturaOpis,fakturaPrice,fakturaNIP, id);
    fakturaList.push(post);
    
    localStorage.setItem('invoices', JSON.stringify(fakturaList));
    // a =[];
    // a.push(new Post (fakturaNumber, fakturaOpis,fakturaPrice,fakturaNIP, id));
    // localStorage.setItem('invoices', JSON.stringify(a));



    render();
});

function render() {

   // debugger
    let get = JSON.parse(localStorage.getItem('invoices'));
    const contentElemnt = document.getElementById('content');
    contentElemnt.innerHTML = '';
    

    if (get == null) {
        get = [];
    }
    get = get.map((x) => {
        return new Post(x.fakturaNumber, x.fakturaOpis, x.fakturaPrice, x.fakturaNIP, x.id);
    })
    
    for(let i=0; i< get.length; i++) {
        const html = get[i].generateHTML();
        contentElemnt.appendChild(html);
    }
}


class Post {
    constructor(fakturaNumber, fakturaOpis,fakturaPrice,fakturaNIP, id) {
        this.fakturaNumber = fakturaNumber;
        this.fakturaOpis = fakturaOpis;
        this.fakturaPrice = fakturaPrice;
        this.fakturaNIP = fakturaNIP;
        this.id = id;
    }

    generateHTML() {
        const container = document.createElement('div');
        const mainP = document.createElement('p');
        const bottomP = document.createElement('p');
        const bottomPP = document.createElement('p');
        const bottomPPP = document.createElement('p');
        const deleteBtn = document.createElement('button');
        mainP.innerText = "Numer Faktury: "+this.fakturaNumber;
        bottomP.innerText = "Opis Faktury: "+this.fakturaOpis; 
        bottomPP.innerText = "Cena: "+  this.fakturaPrice;
        bottomPPP.innerText = "NIP: "+  this.fakturaNIP;
        deleteBtn.innerText = 'delete';
        container.appendChild(mainP);
        container.appendChild(bottomP);
        container.appendChild(bottomPP);
        container.appendChild(bottomPPP);
        container.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => {
            // debugger

            const deleteInvoice = JSON.parse(localStorage.getItem('invoices'));

            for(let i=0; i< deleteInvoice.length; i++) {
                if (this.id == deleteInvoice[i].id) {
                    deleteInvoice.splice(i, 1);
                    
                    localStorage.setItem('invoices', JSON.stringify(deleteInvoice));
                
                    return render();
                }
            }
        })
        

       return container;
       
    }
}

function closeBrowser () {


    const activePanel = document.getElementsByClassName('active')[0].id;


    localStorage.setItem('session', activePanel);

}

if (localStorage.getItem('session') == 'panel2') {
    activePanel(1)
} else if (localStorage.getItem('session') == 'panel3') {
    activePanel(2);
    render ();
}
