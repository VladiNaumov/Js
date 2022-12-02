const model = [
    { type: 'title', value: 'Hello World from JS'},
    { type: 'text', value: 'here we go with some text'},
    { type: 'columns', value: [
        '1111111',
        '2222222',
        '3333333'
    ]}
    
]

const $site = document.querySelector('#site')

model.forEach(block => {
let html = ''

    if(block.type === 'titetl'){
        html = ` 
        div class="row">
         <div class="col-sm">
            <h1>${block.value}</h1>
        </div>
    </div>`
    }

    if(block.type === 'text'){
        html = ` 
        <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>`
    }

    if(block.type === 'columns'){
        
    }

    $site.insertAdjacentHTML('beforeend', html)

})