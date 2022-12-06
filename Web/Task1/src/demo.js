/* FILE block.js */

class Block {
    constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    console.log('TEST LOG')
    throw new Error('Метод toHTML должен быть реализован')
  }
}


const f = new Block('w', 'g')
console.log(f.toHTML)


