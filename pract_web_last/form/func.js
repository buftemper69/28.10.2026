export function capitalize(text){
    let result = text[0].toUpperCase() + text.slice(1);
    return result;
}

export function checking (inputName,inputMail , inputMess , arr_gmail , thirdPage){
    

    let oldMessages = thirdPage.querySelectorAll('p.error, p.success'); 
    oldMessages.forEach(msg => msg.remove());

    let text = document.createElement('p');
    
    if (!inputName.value){
        text.innerText = `ВВЕДИТЕ ИМЯ!`;
        text.className = 'error';
        text.style.color = 'red';
        thirdPage.append(text); 
        return 0;}
    if (!inputMail.value){
        text.innerText = `ВВЕДИТЕ ПОЧТУ!`;
        text.className = 'error';
        text.style.color = 'red';
        thirdPage.append(text);
    return 0 ;}
    if (!inputMess.value){
        text.innerText = `ВВЕДИТЕ СООБЩЕНИЕ(не менее 10 символов)!`;
         text.className = 'error';
        text.style.color = 'red';
        thirdPage.append(text);
    return 0;}

    let domen = ((inputMail.value).split('@'))[1];
    if (!arr_gmail.includes(domen)){
        text.innerText = `ВВЕДИТЕ КОРРЕКТНУЮ ПОЧТУ!`;
        text.className = 'error';
        text.style.color = 'red';
        thirdPage.append(text);
    return 0 ;}

    let text_mess = (inputMess.value).split('');
    if (text_mess.length < 10){
        text.innerText = `ВВЕДИТЕ СООБЩЕНИЕ(не менее 10 символов)!`;
        text.className = 'error';
        text.style.color = 'red';
        thirdPage.append(text);
    return 0;}

    let success = document.createElement('p');
    success.innerText = `Форма успешно отправлена!`;
    success.className = 'success';
    success.style.color = 'green';
    thirdPage.append(success);
    return 1;
}