'use strict'
let inputt = document.getElementsByClassName('result')[0]
let oper = Array.from(document.getElementsByClassName('oper'))


// function insert(arr , oper){
//     let result = 0;
//     switch (oper){
        
//         case "+":
//             for (let i = 0 ; i < arr.length ; ++i){
//                 result += parseFloat(arr[i])
//             }
//             return result;

//         case "-" :
//             result = parseFloat(arr[0]);
//             for (let i = 1 ; i < arr.length ; ++i){
//                 result -= parseFloat(arr[i]);
//             }
//             return result;
        
//         case "*":
//             result = 1;
//             for (let i = 0 ; i < arr.length ; ++i){
//                 result *= parseFloat(arr[i]);
//             }
//             return result;

//         case "/" :
//             result = parseFloat(arr[0]);
//             for (let i = 1 ; i < arr.length ; ++i){
//                 result /= parseFloat(arr[i]);
//             }
//             return result;
//     }
// }

//function calc(str , oper){
//     str = str.trim()
//     let numbers = str.split(' ')
//     if(numbers.length === 0){return "EROARRRRR";}
//     switch (oper){
//         case "+" : return insert(numbers , "+");
//         case "-" : return insert(numbers , "-");
//         case "*" : return insert(numbers , "*");
//         case "/" : return insert(numbers , "/");
        
//     }
    
// }

function calculate(str){
    str = str.trim();
    let result = 0;

    if( str.includes("+")){
        let numbers = str.split('+');

        numbers.forEach(val => {
            result += parseFloat(val);
        })

        inputt.value = result;}

    if( str.includes("-")){
        let numbers = str.split('-');
        result = numbers[0];
        numbers.splice(0 , 1); 

        numbers.forEach(val => {
            result -= parseFloat(val);
        })
        inputt.value = result; }

     if( str.includes("*")){
        let numbers = str.split('*');
        result = 1;
        

        numbers.forEach(val => {
            result *= parseFloat(val);
        })

        inputt.value = result ;}

     if( str.includes("/")){
        let numbers = str.split('/');
        result = numbers[0];
        numbers.splice(0 , 1); 

        numbers.forEach(val => {
            result /= parseFloat(val);
        })

        inputt.value = result;}


}


oper.forEach(butt => {
    butt.addEventListener('click' , function(){
        let symbol = this.innerText;

        if (symbol === '='){
            calculate(inputt.value);
        }
        else if (symbol !== '=' && inputt.value ==='( . )( . )'){
            inputt.value = '';
            inputt.value += symbol;
        }
        else if(symbol === "del") {
            inputt.value = inputt.value.slice(0 , -1);
        }
        else if(symbol === "C") {
            inputt.value = '';
        }
        else{
            inputt.value += symbol;
        }
    })
})

window.addEventListener('keydown', function(event) {

    if (event.key === '=' || event.key === 'Enter') {
        event.preventDefault(); 
        calculate(inputt.value); 
    }
});