import {model} from './model'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {

 console.log(block.toHTML)
  $site.insertAdjacentHTML('beforeend', block.toHTML())
  
  }
)
