/* FILE modul.js  */
import {TextBlock, TitleBlock, ColumnsBlock} from './block'

const text = `JavaScript`

export const model = [
  
  
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


