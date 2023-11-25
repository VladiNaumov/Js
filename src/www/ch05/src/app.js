import {nodes} from "./node.js";

const filterElement = document.getElementById('filter')
const listElement = document.getElementById('list')

filterElement.addEventListener('input', (event)=>{
  // console.log('input', event.target.value)

    const value = event.target.value.toLowerCase()
    const filterUser = nodes.filter((nodes)=>{
        return nodes.deu.toLowerCase().includes(value)
    })

    render(filterUser)
})


function start(){
    listElement.innerHTML= toHtml('Loading.....')
       setTimeout(()=>{
           console.log(nodes)
           render(nodes)
        }, 2000)

}

function render(nodes) {
   const html = nodes.map(worterbuch)
    listElement.innerHTML = html
    console.log(html)
}

function worterbuch(nodes) {
    return ` 
<table class="table" >

 <th>
           <p>${nodes.deu} - ${nodes.rus}</p>
           
 </th>
 
<br>
</table>

`
}
function toHtml(text) {
    return ` 

<table class="table" >

 <th>
           <p>${text}</p>
           
 </th>
 
<br>
</table>

`
}

start()