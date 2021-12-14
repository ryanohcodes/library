let myLibrary = [];

function Books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 

}

Books.prototype.read = function (){
    if (this.read == 'Read'){
        this.read = 'Not Read';
    } else if (this.read == 'Not Read'){
        this.read = 'Read';
    }
}

function readUpdate(buttonsReads){
    for (let i = 0; i < myLibrary.length; i++){
        buttonsReads[i].addEventListener('click', ()=>{
                if (myLibrary[i].read == 'Read'){
                    myLibrary[i].read = 'Not Read';
                    updateLibrary ();
                } else if (myLibrary[i].read  == 'Not Read'){
                    myLibrary[i].read  = 'Read';
                    updateLibrary ();
                }
            });
    };
}


function deleteLibrary(){
    for (let i =0; i <= myLibrary.length; i++){
        table.deleteRow(-1);
    };
};

const button = document.createElement('BUTTON');


function updateLibrary (){
    deleteLibrary();
    for (let i = 0; i < myLibrary.length; i++){
        row = table.insertRow(-1); //creates tr 
        row.classList.add('box'); // because this creates tr you have to add a class here!
        const button = document.createElement('BUTTON');
        const buttonRead = document.createElement('BUTTON');
        buttonRead.textContent ="Toggle Read"
        button.classList.add('button');
        buttonRead.classList.add('read');
        button.dataset.id = i;
        button.textContent = "DELETE";
        row.appendChild(button);
        row.appendChild(buttonRead);
        for (property in myLibrary[i]){
            cell = row.insertCell(-1);
            cell.textContent=`${property}: ${myLibrary[i][property]}`;
        }
    }
};






function deleteButton(buttons){
    for (let i = 0; i < myLibrary.length; i++){
            buttons[i].addEventListener('click', ()=>{;
            console.log(buttons[i].dataset.id);
            let dataiD = parseInt(buttons[i].dataset.id);
            myLibrary.splice(dataiD,1)
            updateLibrary ();
        });
    };
}


//creates table
const table = document.createElement('table');
const body = document.querySelector('body');
body.appendChild(table);
//creates table header
const tableSelect = document.querySelector('table');

const tableRowTwo = document.createElement('tr');
const tableHeaderSelect = document.querySelector('thead');
const th = document.createElement('th');


const tBody = document.createElement('tbody');
tableSelect.appendChild(tBody);


tBody.classList.add('row');
tableRowTwo.classList.add('box');


const tbodySelector = document.querySelector('tbody');
tbodySelector.appendChild(tableRowTwo);
const tableRowSelector = document.querySelectorAll('tr');

let row = '';
let cell = '';

const example = new Books('Lord of the Rings', 'The Man', '300', 'Read');
const exampleTwo = new Books('Lord of the Rings', 'The Man', '200', 'Read');
myLibrary.push(example);
myLibrary.push(exampleTwo);
updateLibrary ();

const myForm = document.getElementById("myForm");
let temp = [];
let temp2 = '';

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length-1; i++){
        console.log(e.target[i].value);
        temp.push(e.target[i].value)
    }
    temp2 =new Books(...temp);
    myLibrary.push(temp2);
    temp =[];
    temp2 ='';
    updateLibrary ();
    let buttons = document.querySelectorAll('.button');
    deleteButton(buttons)
    let buttonsReads = document.querySelectorAll('.read')
    readUpdate(buttonsReads);
    
});



let buttons = document.querySelectorAll('.button');
deleteButton(buttons);

document.addEventListener("click",()=>{
    let buttons = document.querySelectorAll('.button');
        deleteButton(buttons)
    let buttonsReads = document.querySelectorAll('.read')
        readUpdate(buttonsReads);
    });

let buttonsReads = document.querySelectorAll('.read')
readUpdate(buttonsReads);




