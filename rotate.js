const rotatingCircle = document.getElementsByClassName('circle')[0]

const lastPoint = {x: null, y: null}
let rotation = 3

window.addEventListener('mousemove', e => {
  rotation += (
    e.clientY > lastPoint.y ? -1
    : e.clientY < lastPoint.y ? 1
    : 0
  )
  
  rotatingCircle.style = `transform: rotate(${rotation}deg);`

  lastPoint.x = e.clientX
  lastPoint.y = e.clientY
})