export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    this.$el.innerHTML = ''
    model.forEach(block => {
      console.log(block)
      this.$el.insertAdjacentHTML('beforeend', block.toHTML())
    })
  }
}