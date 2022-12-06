import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock} from './classes/blocks'

const text = `
Крутые видео и уроки по JavaScript Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`
export const model = [
    
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
      tag: 'h2',
  
    }),
    
    new ColumnsBlock([
      'Приложение на чистом JavaScript, без использования библиотек',
      'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
      'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
    ], {

      
    }),
    
    new TextBlock(text,{

    })

    
       
]