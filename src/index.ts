function getTutureTutorialsInfo<T extends Info>(info: T): T {
    console.log(info)
    return info
}
interface Info {
    length: number
}
getTutureTutorialsInfo('123123')
function alertMyName<T extends Info>(firstName: T, lastName?: Info): void {
    if (lastName) {
        alert(`hello ${firstName} ${lastName}`)
    } else {
        alert(`hello Mr ${firstName}`)
    }
}
let button = document.createElement('button');
button.textContent = "Say Hello";
// let button = document.querySelector('button')
// console.log(button, 'button');
button.onclick = function () {
    console.debug(this, 'this');
    alertMyName("Zhang", 'Qing')

}
document.body.appendChild(button);
// alertMyName('Zhang')