const container = document.querySelector('.container #container');
const input = document.querySelector('.imgInput')
const ner = document.querySelector('.ner')
const btn = document.querySelector('input[type="button"]')
const backdrop = document.querySelector('.backdrop');
const names = document.querySelector('#name')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const images = [];
let openIndec;
/**
 * 
 * {
 *    ner: "Max",
 *    zurag: "https://photo.jpg"
 * }
 * 
 */

btn.addEventListener('click', function () {
  if (input.value.trim() !== '' && ner.value.trim() !== "") {
    images.push({
      zurag: input.value,
      ner: ner.value
    })
    updateUI()
  } else {
    alert('Өгөгдөл дутуу байна')
  }
})

function updateUI() {
  container.innerHTML = '';
  images.forEach(function (object, index) {
    container.insertAdjacentHTML('beforeend', `
            <div id="zurag-${index}" class="box">
                <img src=${object.zurag} alt="">
                <div class="delete">
                    <i id="delete" class="fas fa-times"></i>
                </div>
            </div>
        `)
  })
  input.value = '';
  ner.value = ''
}


document.addEventListener('click', function (e) {
  if (e.target.id === "delete") {
    const deleteIndex = +e.target.parentNode.parentNode.id.split('-')[1];
    images.splice(deleteIndex, 1)
    updateUI()
  }
  if (e.target.classList.contains('box')) {
    openIndec = +e.target.id.split('-')[1];
    backdrop.classList.add('open');
    backdrop.children[0].children[1].src = images[openIndec].zurag;
    backdrop.children[0].children[0].innerHTML = images[openIndec].ner;

  }
  if (e.target.id === 'right') {
    openIndec++;
    if (openIndec === images.length) {
      openIndec = 0;
    }

    backdrop.children[0].children[1].src = images[openIndec].zurag;
    backdrop.children[0].children[0].innerHTML = images[openIndec].ner;
  }
  if (e.target.id === 'left') {
    openIndec--;
    if (openIndec < 0) {
      openIndec = images.length - 1;
    }

    backdrop.children[0].children[1].src = images[openIndec].zurag;
    backdrop.children[0].children[0].innerHTML = images[openIndec].ner;
  }

  if (e.target.classList.contains('open')) {
    backdrop.classList.remove('open');
  }
})
document.addEventListener('keydown', (e) => {
  if (e.keycode === 39) {
    openIndec++;
    if (openIndec === images.length) {
      openIndec = 0;
    }
  }
})
document.addEventListener('keydown', (e) => {
  if (e.keycode === 37) {
    openIndec--;
    if (openIndec < 0) {
      openIndec = images.length - 1;
    }
  }
})
