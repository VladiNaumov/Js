import {nodes} from "./node.js";

const listElement = document.getElementById('list')

// console.log(inputElement.value)

function render() {

    listElement.innerHTML = ""

    if (nodes.length === 0) {
        listElement.innerHTML = '<p> Is not elements </p>'
    }

    for (let i = 0; i < nodes.length; i++) {
       // console.log('  ', nodes[i].isIst)
      //  console.log('  ', nodes[i].aika)
        if (nodes[i].isIst) {
            listElement.insertAdjacentHTML('beforeend', getNoteTemplate(nodes[i], i))
        }

    }

    /*
    for (let note of nodes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }

     */

}

function OnOffIsIst() {

    const time = 1000

    for (let note of nodes) {

        note.aika > time ? note.isIst = true : note.isIst = false

    }
}

OnOffIsIst();

render()

function getNoteTemplate(node, index) {
    return ` 

<table class="table" >

 <th>
           <p> id: ${index} ${node.liikenne} Mista: ${node.matkaa} kello: ${node.aika}</p>
          
 </th>
 
<br>
</table>

`
}