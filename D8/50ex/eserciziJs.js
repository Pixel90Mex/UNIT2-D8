//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
function vari() {
    let x = "John"
    let y = "Doe"
    console.log(x + "<>" + y)
}
vari()

//Crea un oggetto con le seguenti proprietà: name, surname, email
/*function utente(name, surname, email){
    this.name = name;
    this.surname = surname;
    this.email = email;
}*/

const persona = {
    name: "Marco",
    surname: "Garavaglia",
    email: "gara@gmail.com"
}

console.log(persona)

//cancella la proprietà email dell'oggetto appena creato
delete persona.email
console.log(persona)

//Crea un array contenente 10 stringhe
let arr = ["ciao", "mi", "chiamo", "Andrea!", "piacere", "di", "conoscerti!", "Acqua", "sapone", "sale"]

//Mostra in console ogni stringa del precedente array
for (ele of arr) {
    console.log(ele);
}

//Crea un array con 100 numeri random
let array = []

for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 100)
    array[i] = random
}
console.log(array);

//Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato

function MaxMin(arr) {
    const min = arr => arr.reduce((x, y) => Math.min(x, y));
    const max = arr => arr.reduce((x, y) => Math.max(x, y));

    console.log("Min:", min(arr));
    console.log("Max:", max(arr));
}

MaxMin(array)

//Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random
function padreFigli() {

    let padre = [
        figlioUno = [],
        figlioDue = [],
        figlioTre = []
    ]

    for (let j = 0; j < 10; j++) {
        padre[figlioUno[i]].push(Math.floor(Math.random() * 10));
        padre[figlioDue[i]].push(Math.floor(Math.random() * 10));
        padre[figlioTre[i]].push(Math.floor(Math.random() * 10));
    }

}

console.log(padreFigli())

//Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi

function arrLength(arrUno, arrDue) {
    let max;

    if (arrUno.length > arrDue.length) {
        max = arrUno;
    } else {
        max = arrDue
    }
    return max;
}

console.log(arrLength([1, 2, 3, 4, 5], [1, 2, 3, 4]))

//Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore
function arrSum(arrUno, arrDue) {
    let sumUno = 0;
    let sumDue = 0;

    for (element of arrUno) {
        sumUno += element
    }
    for (element of arrDue) {
        sumDue += element
    }

    return sumUno > sumDue ? sumUno : sumDue
}

console.log(arrSum([1, 2, 16], [3, 3, 4]))

//ESERCIZI SUL DOM

//31) Seleziona l'elemento con id "container" nella pagina
//32) Seleziona tutti gli elementi di tipo <td> nella pagina
//33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina

function selec() {
    document.getElementById("container");
    const tagTd = document.querySelectorAll("td")
    for (element of tagTd) {
        console.log(element);
    }
}
selec()
//34) Scrivi una funzione per cambiare il titolo della pagina
function changeTitle() {
    const title = document.getElementsByTagName('h1')[0];
    title.classList.add("myHeading");

}
//35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina
function addRow() {
    const row = document.querySelectorAll("table")[0];
    const newRow = document.createElement("tr");
    row.appendChild(newRow);
}
//36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
function addClass() {
    const rowTwo = document.querySelectorAll("tr");
    rowTwo.classList.add("test")
}
//37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina
function sfondo() {
    let link = document.querySelectorAll("a");
    for (let i = 0; i < link.length; i++) {
        link[i].style.color = "red";
    }
}
//38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi
function ready(){
    alert('DOM is ready');
}

document.addEventListener("DOMContentLoaded", ready);
//39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina

const addEvent= function (content) {
   
    const Unlist = document.querySelectorAll('ul')[0];
    const newli = document.createElement("li");
    
    newli.innerText = content;
    secondList.appendChild(newli);
  }
  addToTheSecond("Sei");

//40) Scrivi una funzione per svuotare una lista nella pagina
function svuota() {  
    const Unlist = document.getElementsByClassName('nascosto');
    UnList.target.innerText = " "
  }

//41) Aggiungi un event listener in modo che compaia un alert quando il cursore passa sopra un link; l'alert deve mostrare la sua proprietà href
const anch = document.getElementsByTagName('a')

for (ele of anch){
    ele.addEventListener('mouseover', (event) => {
        
        alert(event.currentTarger.href)
    })
}

//42) Crea un bottone che una volta cliccato nasconde ogni immagine nella pagina
function but(){
    const butt = document.getElementsByTagName('button')[0]

        butt.addEventListener('click', (event) => {
            document.getElementsByTagName('img').target.style.visibility = "hidden"
        })
    }

//43) Crea un bottone che una volta cliccato nasconde o mostra la tabella nella pagina
//44) Crea una funzione per calcolare la somma di ogni numero contenuto in tutte le celle della tabella (se il contenuto è un numero)
//45) Cancella l'ultima lettera dal titolo della pagina ogni volta che l'utente ci clicca sopra
//46) Aggiungi un event listener in modo che cliccando un <td> nella pagina, questo cambi colore di sfondo
//47) Aggiungi un bottone che una volta cliccato elimini un <td> a caso nella tabella
//48) Aggiungi automaticamente un bordo rosa ad una cella della tabella quando il cursore ci passa sopra
//49) Scrivi una funzione per creare una tabella con 4 righe e 3 colonne e aggiungerla alla fine della pagina
//50) Scrivi una funzione per rimuovere l'ultima tabella presente nella pagina