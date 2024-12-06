console.log("start")
let karty = [
    {
        src: 'https://art.pixilart.com/3eecb987eef30b3.png'
    },
    {
        src: ''
    },
    {
        src: ''
    },
]


let pole = [0, 2, 1, 2, 0, 1]
let el = dokument.getElementById('pexeso')

el.innerHTML = ""

pole.forEach((prvek) => {
    const newEl = document.createElement('img')
    newEl.src = karty[prvek].src
    el.appendChild(newEl)
})
console.log('END')