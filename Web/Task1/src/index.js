//import {model} from './model'
import './styles/main.css'


/* FILE block.js */

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
}

toHTML() {
  throw new Error('Метод toHTML должен быть реализован')
  }
}


class TitleBlock extends Block {
constructor(value, options) {
  super(value, options)
}

toHTML() {
  const tag = 'h2'
  const html = row(col(`<${tag}>${this.value}</${tag}>`))
  return html
  }
}


class ColumnsBlock extends Block {
constructor(value, options) {
  super(value, options)
}

toHTML() {
  const html = this.value.map(col).join('')
  return row(html)
  }
}

class TextBlock extends Block {
constructor(value, options) {
  super(value, options)
}

toHTML() {
  const html = row(col(`<p>${this.value}</p>`))
  return html
  }
}


function row(content) {
return `<div class="row">${content}</div>`
}

function col(content) {
return `<div class="col-sm">${content}</div>`
}

/* END */

/* FILE modul.js  */


const text = `JavaScript`

const model = [
  
  
    new TitleBlock('Конструктор сайтов на чистом JavaScript TASK 1', {
        tag: 'h1',
    
      }),
      
      new ColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
      ]),
      
      new TextBlock(text)
         
]


/* END */



const $site = document.querySelector('#site')

model.forEach(block => {

 console.log(block.toHTML)
  $site.insertAdjacentHTML('beforeend', block.toHTML())
  
  }
)
