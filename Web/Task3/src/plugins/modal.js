// создание модального окна 
function _createModal(options) {
  console.log(options)
  const modal = document.createElement('div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">Modal title</span>
          <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="modal-footer">
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  `)

  //помещаем модальное окно в DOM дерево 
  document.body.appendChild(modal)
  return modal
}


// управление модальным окном
$.modal = function(options) {
  console.log(options)
  const ANIMATION_SPEED = 200
  // вызов модального окна
  const $modal = _createModal(options)
  console.log(options)
  let closing = false

  return {
    
    open() {
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
    },

    destroy() {}
  }
}
