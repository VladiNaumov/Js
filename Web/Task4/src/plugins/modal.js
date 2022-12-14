// работа с прототипами
Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

// создание Footer на плагине
function _createModalFooter(buttons = []) {

  if (buttons.length === 0) {
    return document.createElement('div')
  }

  const wrap = document.createElement('div')
  wrap.classList.add('modal-footer')

  // отрисовка кнопок
  buttons.forEach(btn => {
    const $btn = document.createElement('button')
    $btn.textContent = btn.text
    $btn.classList.add('btn')
    $btn.classList.add(`btn-${btn.type || 'secondary'}`)
    $btn.onclick = btn.handler || noop

    wrap.appendChild($btn)
  })

  return wrap
}

// создание модального окна и передаю в неё объект $.modal({})
function _createModal(options) {
  console.log(options)
  const DEFAULT_WIDTH = '600px'
  const modal = document.createElement('div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
      <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
        <div class="modal-header">
          <span class="modal-title">${options.title || 'Окно'}</span>
          ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
        </div>
        <div class="modal-body" data-content>
          ${options.content || ''}
        </div>
      </div>
    </div>
  `)
  const footer = _createModalFooter(options.footerButtons)
  footer.appendAfter(modal.querySelector('[data-content]'))
  //помещаем модальное окно в DOM дерево 
  document.body.appendChild(modal)
  // console.log(modal)
  return modal
}


// управление модальным окном
$.modal = function(options) {
  const ANIMATION_SPEED = 200
  // вызов модального окна
  const $modal = _createModal(options)
  // console.log(options)
  let closing = false
  let destroyed = false

  const modal = {
    open() {
      if (destroyed) {
        return console.log('Modal is destroyed')
      }
      !closing && $modal.classList.add('open')
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      // управление временем анимации
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
      }, ANIMATION_SPEED)
    }
  }

  // вспомогательный метод
  const listener = event => {
    if (event.target.dataset.close) {
      modal.close()
    }
  }

  // обработка клика (события) по плагину
  $modal.addEventListener('click', listener)

  // расширение Object.assign
  return Object.assign(modal, {
    // удаление модального окна 
    destroy() {
      // удаление NOD из DOM дерева 
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click', listener)
      destroyed = true
    },
    // динамическое изменение контента модального окна   
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html
    }
  })
}
