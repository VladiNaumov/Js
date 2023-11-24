import {nodes} from "./node.js";

const listElement = document.getElementById('list')
const listElementTime = document.getElementById('name')

function render() {

    listElement.innerHTML = ""

    if (nodes.length === 0) {
        listElement.innerHTML = '<p> Is not elements </p>'
    }

    for (let i = 0; i < nodes.length; i++) {

        if (nodes[i].isIst) {
            listElement.insertAdjacentHTML('beforeend', getNoteTemplate(nodes[i], i))
        }

    }

}


function compareGetTime() {

    const date = new Date()
    let nowTime = date.toLocaleTimeString()

    listElementTime.innerHTML = getName(nowTime)
    console.log(nowTime)

    for (let note of nodes) {
       note.aika > nowTime ? note.isIst = true : note.isIst = false

    }

}



setInterval(() => {

    compareGetTime()
    render()

}, 1000)

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

function getName(time) {
    return ` 
 
  <div class="card">
        <h3> Junan aikataulu ${time} </h3>
   </div>

`
}
