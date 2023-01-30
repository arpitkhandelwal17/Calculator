let Screen = document.getElementById("display");
let buttons = document.querySelectorAll('button');
console.log(buttons);
let screenvalue = '';
for(var i in buttons){
    buttons[i].addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='AC'){
            screenvalue = "";
            Screen.value = screenvalue;
        }
        else if(buttonText=='='){
             Screen.value = eval(screenvalue);
        }
        else if(buttonText=='X'){
            screenvalue = screenvalue.slice(0,screenvalue.length-1);
            Screen.value = screenvalue;
        }

        else{
            screenvalue = screenvalue + buttonText;
            Screen.value = screenvalue;
        }
    })
}