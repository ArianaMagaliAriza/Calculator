let runningTotal=0;
let buffer="0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal=0;
            break;
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator=null;
            buffer = runningTotal;
            runningTotal=0;
            break;
        case '←':
            if(buffer.length ===1){
                buffer='0';
            }
            else{
                buffer.toString(0, buffer.length-1);
            }
            break;
            case '-':
            case '+':
            case 'x':
            case '÷':
    }
}

function handleMath(symbol){

}