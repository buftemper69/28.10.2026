let firstPage=document.getElementById('first-page')
let secondPage=document.getElementById('second-page')
let thirdPage=document.getElementById('third-page')

let surname=document.getElementById('surname')
let Personname=document.getElementById('name')
let patronymic=document.getElementById('patronymic')

let inputColor=document.getElementById('input-color')
let submitFirstButton=document.getElementById('submit-first-button')
let submitSecondButton=document.getElementById('submit-second-button')


submitFirstButton.addEventListener('click', ()=>{
    let personal=document.createElement('p')
    personal.textContent= `${surname.value} ${Personname.value} ${patronymic.value}, ответьте на следующие вопросы`
    personal.style.color=inputColor.value;
    secondPage.append(personal)

    firstPage.style.display='none';
    secondPage.style.display='block';
})

submitSecondButton.addEventListener('click', ()=>{
    
})