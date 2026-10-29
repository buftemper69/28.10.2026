function capitalize(text){
    let result = text[0].toUpperCase() + text.slice(1);
    return result;
}

let firstPage=document.getElementById('first-page')
let secondPage=document.getElementById('second-page')
let thirdPage=document.getElementById('third-page')

let surname=document.getElementById('surname')
let Personname=document.getElementById('name')
let patronymic=document.getElementById('patronymic')

let inputColor=document.getElementById('input-color')
let submitFirstButton=document.getElementById('submit-first-button')
let submitSecondButton=document.getElementById('submit-second-button')

let inputName = document.getElementById('name_third');
let inputMail = document.getElementById('mail-third');
let inputMess = document.getElementById('mess-third');


submitFirstButton.addEventListener('click', ()=>{
    let personal=document.createElement('p');
    personal.textContent= `${capitalize(surname.value)} ${capitalize(Personname.value)} ${capitalize(patronymic.value)}, ответьте на следующие вопросы: `;
    personal.style.color = inputColor.value;
    secondPage.prepend(personal);

    firstPage.style.display='none';
    secondPage.style.display='block';
})

submitSecondButton.addEventListener('click', ()=>{
    
})