let totalWidth = 0

function addNode () {
  const node = document.createElement('span')
  node.textContent = String(totalWidth)
  document.body.appendChild(node)
  totalWidth += node.getBoundingClientRect().width
}

function addALotOfNodes () {
  for (let i = 0; i < 1000; i++) {
    addNode()
  }
}

addALotOfNodes()