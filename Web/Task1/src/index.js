import {model} from './model'

const $site = document.querySelector('#site')

model.forEach(block => {

 console.log(block.toHTML)
  $site.insertAdjacentHTML('beforeend', block.toHTML)
  
  }
)
