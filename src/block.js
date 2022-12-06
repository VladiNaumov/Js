import {col, row} from './util'

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


export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {tag = 'h1'} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`))
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
    console.log(row(col(`<p>${this.value}</p>`)))
    return row(col(`<p>${this.value}</p>`))
  }

}

