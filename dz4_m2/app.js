const count = document.querySelector('.counter')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

let i = 0;

plus.onclick = () => {
    i++
    count.innerText = i
    count.style.color = 'green'
}

minus.onclick = () => {
    if (i > 0){
        i--
        count.innerText = i
        count.style.color = 'red'
    }
}

//2
const box = document.querySelector('.box')
const x = document.querySelector('.x')
const y = document.querySelector('.y')

box.addEventListener('mousemove', (e) => {
    x.innerText = 'X: '+e.screenX
    y.innerText = 'Y: '+e.screenY
})

///3
const greenn = document.querySelector('.green')
const redd = document.querySelector('.red')
const yellow = document.querySelector('.yellow')

const svetofor = (a) => {
    switch (a) {
        case 'yellow':
            yellow.style.background = 'yellow'
            yellow.innerText = 'wait'
            break
        case 'red':
            redd.style.background = 'red'
            redd.innerText = 'stop'
            break
        case 'green':
            greenn.style.background = 'green'
            greenn.innerText = 'Go'
            break
        default:
            alert('Error')
    }
}
const trafic = prompt('Введите цвет').trim()

svetofor(trafic)