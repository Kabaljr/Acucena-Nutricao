window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  navOnScroll()
  backToTopOnScroll()
  activateMenuAtCurrentSelection(home)
  activateMenuAtCurrentSelection(services)
  activateMenuAtCurrentSelection(about)
}

function navOnScroll() {
  if (scrollY > 0) {
    navig.classList.add('scroll')
    document.getElementById('logo-nav').src = 'img/logo4.png'
    document.getElementById('icon-nav').src = 'img/icon-h.png'
  } else {
    navig.classList.remove('scroll')
    document.getElementById('logo-nav').src = 'img/logo5.png'
    document.getElementById('icon-nav').src = 'img/icon-h2.png'
  }
}

function backToTopOnScroll() {
  if (scrollY > 500) backToTopButton.classList.add('show')
  else backToTopButton.classList.remove('show')
}

function openMenu() {
  document.body.classList.add('menu-expanded')
  document.getElementById('logo-nav').src = 'img/logo4.png'
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
  document.getElementById('logo-nav').src = 'img/logo5.png'

  onScroll()
}

/*ANIMAÇÃO DE CARDS*/
window.sr = ScrollReveal({ reset: true })

if ($(window).width() < 1024) {
  sr.reveal('.digestivo', {
    duration: 2000,
    scale: 0.4,
    rotate: {
      x: 0,
      y: 500,
      z: 0
    }
  })

  sr.reveal('.digestivo p', {
    duration: 3000,
    scale: 0.4,
    rotate: {
      x: 50,
      y: 0,
      z: 0
    }
  })

  sr.reveal('.hormonal', {
    duration: 2000,
    scale: 0.4,
    rotate: {
      x: 0,
      y: 500,
      z: 0
    }
  })
  sr.reveal('.hormonal p', {
    duration: 3000,
    scale: 0.4,
    rotate: {
      x: 5,
      y: 0,
      z: 0
    }
  })

  sr.reveal('.mente', {
    duration: 2000,
    scale: 0.4,
    rotate: {
      x: 0,
      y: 500,
      z: 0
    }
  })
  sr.reveal('.mente p', {
    duration: 3000,
    scale: 0.4,
    rotate: {
      x: 50,
      y: 0,
      z: 0
    }
  })

  sr.reveal('.crianca', {
    duration: 2000,
    scale: 0.4,
    rotate: {
      x: 0,
      y: 500,
      z: 0
    }
  })
  sr.reveal('.crianca p', {
    duration: 3000,
    scale: 0.4,
    rotate: {
      x: 50,
      y: 0,
      z: 0
    }
  })

  sr.reveal('.autoimune', {
    duration: 2000,
    scale: 0.4,
    rotate: {
      x: 0,
      y: 500,
      z: 0
    }
  })
  sr.reveal('.autoimune p', {
    duration: 3000,
    scale: 0.4,
    rotate: {
      x: 50,
      y: 0,
      z: 0
    }
  })

  sr.reveal('.coracao', {
    duration: 2000,
    scale: 0.4,
    rotate: {
      x: 0,
      y: 500,
      z: 0
    }
  })

  sr.reveal('.coracao p', {
    duration: 3000,
    scale: 0.4,
    rotate: {
      x: 50,
      y: 0,
      z: 0
    }
  })
}

/*function onScroll() {
  if (scrollY > 2000) {
    Visibility.onVisible(function () {
      setTimeout(function () {
        $('.digestivo').addClass('animate__animated animate__fadeInDown')
      }, 4000)
    })
  }}*/

/*ANIMAÇÃO EQUIPE*/

// Defining event listener function

function activateMenuAtCurrentSelection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais dados vou precisar

  //topo da seção
  const sectionTop = section.offsetTop

  //a altura da seção
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou ou ultrapassou a linha alto

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop



  //verificar se a base esta abaixo da linha alvo



  const sectionEndAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine


  //limite da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine


  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
