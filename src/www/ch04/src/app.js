const filterElement = document.getElementById('filter')
const listElement = document.getElementById('list')

let USER = []

filterElement.addEventListener('input', (event)=>{
  // console.log('input', event.target.value)

    const value = event.target.value.toLowerCase()
    const filterUser = USER.filter((user)=>{
        return user.name.toLowerCase().includes(value)
    })

    render(filterUser)
})

async function start(){
    listElement.innerHTML= toHtml('Loading.....')
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
         // console.log(resp)
        const data = await resp.json()
         console.log(data)
        setTimeout(()=>{
            USER = data
            render(data)
        }, 1000)

    }catch (err){
        listElement.innerHTML= toHtml(err.message)
    }
}

function render(user = []) {

   const html = user.map(usersNames)
    listElement.innerHTML = html

}

function usersNames(user) {
    return ` 

<table class="table" >

 <th>
           <p>${user.name}</p>
           
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