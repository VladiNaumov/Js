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
      const {tag = 'h1'} = this.options
      return row(col(`<${tag}>${this.value}</${tag}>`))
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
      console.log(row(col(`<p>${this.value}</p>`)))
      return row(col(`<p>${this.value}</p>`))
    }
  
  }
 


/* FILE modul.js  */

const text = `JavaScript`

const model = [
  
  
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
    
      }),
      
      new ColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
      ]),
      
      new TextBlock(text)
         
]


/* END */


 /* utils.js */

  function row(content) {
  return `<div class="row">${content}</div>`
}

function col(content) {
  return `<div class="col-sm">${content}</div>`
}

/* END */


/*index.js*/


const $site = document.querySelector('#site')

model.forEach(block => {

  console.log(block.toHTML)

  $site.insertAdjacentHTML('beforeend', block.toHTML)
  
})



/* END */

