// import {model} from './model'


/* FILE modul.js  */
const model = [
    { 
        type: 'title', 
        value: 'конструктор сайтов на чистом JS', 
        options: {
                tag: 'h2',
                styles: {
                    backgraund: 'linear-gradient(to right, #ff0099, #493240',
                    color: '#fff',
                    padding: '1.5rem',
                    'text-aling': 'center'

                } 
            }
    },

    { 
        type: 'columns', 
        value: [
            'Приложение на чистом JavaScript, без использования библиотек ',
            'JavaScript - это просто, интересно. Научись создавать любые UI своими руками. ',
            'badabadabda',
            'habababababa'
        ], 
        options: {
                styles: {
                    backgraund: 'linear-gradient(to right, #ff0099, #493240',
                    padding: '2rem',
                    color: '#fff',
                    'text-weiting': 'bold'

                } 
        }
        
    },

    {
        type: 'text', 
        value: [
            'Крутые видео и уроки по JavaScript тут: ', 
            'Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам,',
            'такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!'

        ], 
        options: {
                styles: {
                    background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                    padding: '1rem',
                    'font-weight': 'bold'

            } 
        }
    }
    
]

/* END */



/* utils.js */

function row(content, styles = ''){
    return `<div class="row" styles ="${styles}">${content}</div>`
}

function col(content){
    return `<div class="col-sm">${content}</div>`
}

function css(styles = {}){
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

/* END */



/* FILE template.js*/

function title (block){
    const {tag = 'h1', styles} = block.options
    //console.log(styles)
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text (block){
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}



function columns(block){
    const html = block.value.map(item => col(item)).join('')
   // console.log(html)
    return row(html,css(block.options.styles))
}

const templates ={
    title: title,
    text: text,
    columns: columns
}

/* END */


/*index.js*/

const $site = document.querySelector('#site')

model.forEach(block => {

   const toHTML = templates[block.type]

    if(toHTML){
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
   
})

/* END */

