console.log('hello world')

let pressedKey = 0;

document.addEventListener('keydown',(e) => {
    if(e.code == pressedKey) return
    pressedKey = e.code
    console.log(e.code)
})