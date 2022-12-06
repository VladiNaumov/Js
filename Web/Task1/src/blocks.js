//import {col, row} from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
}

toHTML() {
  throw new Error('Метод toHTML должен быть реализован')
  }
}


export class TitleBlock extends Block {
constructor(value, options) {
  super(value, options)
}

toHTML() {
  const tag = 'h2'
  const html = row(col(`<${tag}>${this.value}</${tag}>`))
  return html
  }
}


export class ColumnsBlock extends Block {
constructor(value, options) {
  super(value, options)
}

toHTML() {
  const html = this.value.map(col).join('')
  return row(html)
  }
}

export class TextBlock extends Block {
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

