// import {model} from './model'


/* FILE modul.js  */
const model = [
    { type: 'title', value: 'Hello World from JS'},
    { type: 'text', value: 'here we go with some text'},
    { type: 'columns', value: [
        '1111111',
        '2222222',
        '3333333'
    ]}
    
]

/* END */

/* utils.js */

function row(content){
    return `<div class="row">${content}</div>`
}

function col(content){
    return `<div class="col-sm">${content}</div>`
}

/* END */

/* FILE template.js*/

function title (block){
  
    return row(col(`<h1>${block.value}</h1>`))
}

function text (block){
  
    return row(col(`<p>${block.value}</p>`))
}



function columns(block){
    const html = block.value.map(item => col(item)).join('')
    return row(html)
}

const templates ={
    title: title,
    text: text,
    columns: columns
}

/* END */


/*index.js*/

const $site = document.querySelector('#site')

model.forEach(block => {

   const toHTML = templates[block.type]

    if(toHTML){
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
   
})

/* END */

