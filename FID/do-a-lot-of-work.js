let totalWidth = 0

let counterId
function generateId() {
  return String(Math.ceil(Math.random()*10**10))
}
function counterNode() {
  if (counterId === undefined) {
    counterId = generateId()
    const node = document.createElement('div')
    node.setAttribute('id', counterId)
    document.body.appendChild(node)
  }
  return document.getElementById(counterId)
}

let counter = 0
function incCounter() {
  counterNode().innerText = String(counter++)
}

function addNode () {
  const node = document.createElement('span')
  node.textContent = String(totalWidth)
  document.body.appendChild(node)
  totalWidth += node.getBoundingClientRect().width
  incCounter()
}

function clickButtonHandler (btn) {
  btn.style.backgroundColor = "lightblue"
}

function addALotOfNodesSync () {
  for (let i = 0; i < 1000; i++) {
    addNode()
  }
}

function addALotOfNodesAsync () {
  for (let i = 0; i < 1000; i++) {
    setTimeout(addNode, 0)
  }
}


