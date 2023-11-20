const nodes = [
    { isIst: true, deu: 'der Hunger', rus: 'голод', isTranslate: false },

    { isIst: true, deu: 'die Costen', rus: 'покупать', isTranslate: false },

    { isIst: true, deu: 'jetzt', rus: 'сейчас', isTranslate: false },

    { isIst: true, deu: 'spät', rus: 'поздно', isTranslate: false },

    { isIst: true, deu: 'ainkaufen', rus: 'покупать', isTranslate: false },
]

const inputElementRus = document.getElementById('deu')
const inputElementDeu = document.getElementById('rus')
const createBtm = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)


function render() {

    listElement.innerHTML = ""

    if(nodes.length===0){
        listElement.innerHTML = '<p> Is not elements </p>'
    }

    for(let i = 0; i < nodes.length; i++){
        if(nodes[i].isIst){
            listElement.insertAdjacentHTML('beforeend', getNoteTemplate(nodes[i], i))
        }

    }

    /*
    for (let note of nodes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }

     */

}

createBtm.onclick = function () {

    if (inputElementRus.value.length !== 0 ) {

        const newNode = {
            isIst: 1,
            deu: inputElementRus.value,
            rus: inputElementDeu.value,
            isTranslate: 0

        }
        nodes.push(newNode)
    }

    inputElementRus.value = ''
    inputElementDeu.value = ''
    render()
}

listElement.onclick = function (event){
    //console.log(event.target)
    //console.log(event.target.dataset)
    //console.log(event.target.dataset.index)

    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === 'toggle'){
         //  console.log('toggle: ', index)
          nodes[index].isTranslate = !nodes[index].isTranslate
        }
        if (type === 'remove'){
            console.log('remove: ', index)
            nodes[index].isIst = !nodes[index].isIst
        }
    }

    render()

}

render()

function getNoteTemplate(node, index) {
    return ` 
        <div class="card">
              <span>${node.isTranslate ? node.rus : node.deu}</span>
              
                    <span>
                         <!-- Write your comments here -->
                        <span class= "${ !node.isTranslate ? 'btn' : 'btm-danger' }" data-index="${index}" data-type="toggle" >Check</span> 
                        <span class="btm-danger" data-index="${index}" data-type="remove" >Delete</span>
           
                    </span>
         </div>`
}