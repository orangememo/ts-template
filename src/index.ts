function getTutureTutorialsInfo<T extends Info>(info: T): T {
    console.log(info)
    return info
}
interface Info {
    length: number
}
document.title = '学习。。'
getTutureTutorialsInfo('123123')
function alertMyName<T extends Info>(firstName: T, lastName?: Info): void {
    if (lastName) {
        alert(`hello ${firstName} ${lastName}`)
    } else {
        alert(`hello Mr ${firstName}`)
    }
}
enum obj {
    '处理中' = 1,
    '完成' = 2,
}
let button = document.createElement('button')
let input = document.createElement('input')
button.textContent = 'Say Hello'

let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
function randomString(len?: number): string {
    let index: number
    if (len) {
        index = len
    } else {
        index = Math.floor(Math.random() * 100)
    }
    let str = ''
    for (let i = 0; i < index; i++) {
        str += arr[Math.round(Math.random() * (arr.length - 1))]
    }
    return str
}
function buttonClick() {
    let value: string | number = input.value
    // if (value) {

    // }
    // alertMyName(randomString(value))
}
button.onclick = buttonClick
document.body.appendChild(input)
type HTMLInputEvent = {
    target: HTMLInputElement & EventTarget
}
input.onchange = (e: Event) => {
    console.log(input.value)
    console.log((<HTMLInputElement>e.target).value, '2234234')
}

document.body.appendChild(button)
// alertMyName('Zhang')
// https://th.orangebaba.com/api/getStory
