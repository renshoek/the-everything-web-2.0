setTimeout(function(){
  var mousePos = {},
      shipPos = { x: window.innerWidth * .5, y: window.innerHeight * .5},
      vector = {},
      angle,
      b_speed = 1,
      ast_speed = 1,
      kills = 0,
      impacts = 0,
      planet_life = 999999,
      ast_attack_damage = 0.1

  function randomCorner() {
    return Math.random() * 50 + '%'
  }

  function addAsteroid() {
    var a = document.createElement('div')
    a.className = 'asteroid'
    a.style.borderRadius =  randomCorner()+' '+randomCorner() +' '+randomCorner() +' '+randomCorner()
    a.style.left = Math.floor(Math.random() * window.innerWidth) + 'px'
    a.style.top = Math.random() < .5 ? window.innerHeight + 'px' : '-100px'
    document.body.appendChild(a)
  }

  function updateGame() {
    // fireBullet()
    // var t = new Date()
    // if(t % 30 === 0 && document.querySelectorAll('.asteroid').length < 10) {
    //   addAsteroid()
    // }
    
    if(Math.random() < 0.001 ) {
      addAsteroid()
    }



    // update asteroids

    if(document.querySelector('.asteroid')) {
      var ass = document.querySelectorAll('.asteroid')
      ass.forEach(function(elm){
        var elm_loc = elm.getBoundingClientRect(),
            elm_point = document.elementFromPoint(elm_loc.x + 25, elm_loc.y + 25),
            new_x = 0,
            new_y = 0

        if(elm_point && elm_point.classList.contains('earth')) {        
          elm.classList.add('explode')
          elm.onanimationend = function(){
            impacts++
            planet_life -= ast_attack_damage            
            elm.remove()
          }
          screenShake()

        }

        if(!elm.classList.contains('explode')) {
          if(elm_loc.x < shipPos.x - 25) {
            new_x = ast_speed
          } else {
            new_x = -ast_speed
          }
          if(elm_loc.y < shipPos.y - 25) {
            new_y = ast_speed
          } else {
            new_y = -ast_speed
          }

          elm.style.left = parseInt(elm.style.left) + new_x + 'px'
          elm.style.top = parseInt(elm.style.top) + new_y + 'px' 
        }
      })
    }
    if(planet_life < 1) {
     planet_life += .1  
    }    
    ship.style.filter = 'saturate('+planet_life+'%)'
    hits.innerText = Math.round(planet_life)
    kills_counter.innerHTML = kills
  }

  setInterval(updateGame,1000/60)

  window.addEventListener('mousemove', rotateShip)
  window.addEventListener('click', fireBullet)  
},2000)

