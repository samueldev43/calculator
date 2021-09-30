const h2 = document.querySelector('h2') 

const container = document.querySelector('.container')

const c = document.getElementById('clear')

    let arr = []

    function writeNumber(digit) {
        arr.push(digit)        

        let n1 = arr[0]
        let n2 = arr[1]
        let n3 = arr[2]


       if(arr.length >= 3) {
        if(n2 === '+') {
            h2.innerText = `${n1}  ${n2}  ${n3} =  ${Number(n1 + n3)}`
        } else if(n2 === '-') {
            h2.innerText = `${n1}  ${n2}  ${n3} =  ${Number(n1- n3)}`
        } else if(n2 === '÷') {
            h2.innerText = `${n1}  ${n2}  ${n3} =  ${Number(n1 / n3)}`
        }else {
            h2.innerText = `${n1}  ${n2}  ${n3} =  ${Number(n1 * n3)}`
        }
       }
        
    }

    function clearCalc() {
        arr = []
        h2.innerHTML = ''
    }

    c.addEventListener('click', clearCalc)