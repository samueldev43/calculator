const number = document.getElementById('n1') 

const finalResult = document.getElementById('final-result') 

const calc = document.getElementById('calc') 

const clear = document.getElementById('clear')

const clearEntry = document.getElementById('clear-entry')
   
    let arr = []

    let operator = ''

    function writeNumber(digit) {
        number.value += digit !== '+' && digit !== '-' && digit !== 'x' && digit !=='÷' ? digit : ''

        if(digit === '+' || digit === '-' || digit === 'x' || digit === '÷') {
            arr.push(Number(number.value.replaceAll('.', '')))
            number.value = ''
            operator = digit
        }
       
    }

    function clearCalc() {
       arr = []
    }


    clear.addEventListener('click', clearCalc)


    function clearE() {
        number.value = ''
    }


    clearEntry.addEventListener('click', clearE)


    function calcFinal() {
        switch(operator) {
            case '+':
                number.value = `${arr.reduce((total, current) => (
                    total + current + Number(number.value)
                ))}`
            break;
            case '-':
                number.value = `${arr.reduce((total, current) => (
                    total - current - Number(number.value)
                ))}`
            break;
            case 'x':
                number.value = `${arr.reduce((total, current) => (
                    total * current * Number(number.value)
                ))}`
            break;
            case '÷':
                number.value = `${arr.reduce((total, current) => (
                    total / current / Number(number.value)
                ))}`
            break;
            default:
                number.value = ``
        }
    }

    calc.addEventListener('click', calcFinal)