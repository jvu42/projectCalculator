let operand1,operand2 = 0;
let operator = 0;
let opType = 0;
let currentDigit = 0;
let digitString = `0`;
let finishCalc = false;
let enterclick = false;

//////Main Function//////

function getInput() {

    console.log(currentDigit);
    switch (currentDigit){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
                if (!finishCalc){
                    if(digitString == 0){
                        digitString = currentDigit;
                    }
                    else{
                        digitString += currentDigit;
                    }
                }
                else{
                    digitString = currentDigit;
                    finishCalc = false;
                }
            break;
        case  '/':
        case  '*':
        case  '-':
        case  '+':
            if (!opType){
                if (operator == 0){
                    console.log('operator ' + currentDigit.charCodeAt(0));
                    operator = currentDigit.charCodeAt(0);
                    operand1 = digitString;
                    clearScreen();
                    }
                else {
                    operand2 = digitString;
                    digitString = displayResult();
                    operator = currentDigit.charCodeAt(0);
                    finishCalc = true;
                    operand1 = digitString;
                }
            }
            else {
                operand2 = digitString;
                operator = currentDigit.charCodeAt(0); // operator is applied after result
                digitString = displayResult();
                finishCalc = true;
                operand1 = digitString; // keep result
            }
            break;
        case  'ENTER':
            if (!opType){
                console.log('CALCULATE');
                operand2 = digitString;
                digitString = displayResult();
                operator = 0;
                finishCalc = true;
            }
            else{
                operand1 = digitString;
                // clearScreen();
                finishCalc = true;
            }
            break;
        case  'CE':
            console.log('RESET');
            clearCalc();
            break;
        case  'RPN':
        case  'INFIX': //SWITCH between infix and rpn
            console.log('SWITCHMODE');
            opType = (opType? 0 : 1);
            document.getElementById('operType').innerHTML = (opType? 'RPN' : 'INFIX');
            clearCalc();
            break;
        default:
            console.log('error');
            break;
    }
    document.getElementById('output').innerHTML = digitString;
    console.log(operand1,operand2);
    console.log(opType);
}
function currentValue(e){
    var event = e || window.event;
    var target = event.target || event.srcElement;
    
    currentDigit = target.innerHTML;
}

function clearCalc(){
    digitString = `0`;
    operand1 = 0;
    operand2 = 0;
}

function clearScreen(){
    digitString = `0`;
}

function displayResult(){
 //42 *, 43 +, 45 -,47 /
 let result;
    try {
        console.log(operator);
    switch (operator){
        case 42:
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case 43:
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case 45:
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case 47:
             result = parseFloat(operand1) / parseFloat(operand2);
             break;
        default:
            console.log("error");
            break;
    }
    return result;
    }
    catch(error){
        console.log(`error`);

    }
}