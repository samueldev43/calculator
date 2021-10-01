const number1 = document.getElementById('n1') 
const operator = document.getElementById('operator') 
const number2 = document.getElementById('n2') 

const finalResult = document.getElementById('final-result') 

const calc = document.getElementById('calc') 


const clear = document.getElementById('clear')

    let n1 = false
    let math = false
    let n2 = false

    number1.onfocus = function(){
        n1 = true
        math = false
        n2 = false
    }
    
    operator.onfocus = function(){
        math = true

        if(math) {
            n1 = false
            n2 = false
        }
    }

   
    number2.onfocus = function(){
        n2 = true

        if(n2) {
            n1 = false
            math = false
        }
    }


    function writeNumber(digit) {
        if(n1) {
            number1.value += digit
        } else if(math) {
            operator.value = digit
        } else if(n2) {
            number2.value += digit
        }

    }

    function clearCalc() {
       number1.value = ''
       operator.value = ''
       number2.value = ''
       finalResult.innerText = ''
    }

    clear.addEventListener('click', clearCalc)

    function calcFinal() {
        switch(operator.value) {
            case '+':
                finalResult.innerText = `${Number(number1.value) + Number(number2.value)}`
            break;
            case '-':
                finalResult.innerText = `${Number(number1.value) - Number(number2.value)}`
            break;
            case 'x':
                finalResult.innerText = `${Number(number1.value) * Number(number2.value)}`
            break;
            case '÷':
                finalResult.innerText = `${Number(number1.value) / Number(number2.value)}`
            break;
            default:
                finalResult.innerText = `Operator must be only: +,  -,  x  or  ÷`
        }
    }

    calc.addEventListener('click', calcFinal)