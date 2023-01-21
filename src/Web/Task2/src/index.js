import {model} from './model'
import './styles/main.css'

 
  function render() {
    const $site = document.querySelector('#site')
    $site.innerHTML = ''

    model.forEach(block => {
      console.log(block)
      $site.insertAdjacentHTML('beforeend', block.toHTML())
    })}

render()
