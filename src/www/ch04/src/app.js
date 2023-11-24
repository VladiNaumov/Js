const nodes = [
    {isIst: true, deu: 'der Hunger', rus: 'голод'},
    {isIst: true, deu: 'die Costen', rus: 'покупать'},
    {isIst: true, deu: 'jetzt', rus: 'сейчас'},
    {isIst: true, deu: 'spät', rus: 'поздно'},
    {isIst: true, deu: 'ainkaufen', rus: 'покупать'},
]

const inputElement = document.getElementById('title')
const createBtm = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)


function render() {

    listElement.innerHTML = ""

    if (nodes.length === 0) {
        listElement.innerHTML = '<p> Is not elements </p>'
    }

    for (let note of nodes) {
        console.log(note)
        if (note.isIst) {
            listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
        }
    }


}

createBtm.onclick = function () {

    if (inputElement.value.length !== 0) {

        const newNode = {
            isIst: 1,
            deu: inputElement.value,
            rus: '',
            isTranslate: 0

        }
        nodes.push(newNode)
    }

    inputElement.value = ''

    render()
}

render()

function getNoteTemplate(node, index) {
    return ` 
        <div class="card">
              <span>${node.deu} - ${node.rus}</span>
         </div>`
}