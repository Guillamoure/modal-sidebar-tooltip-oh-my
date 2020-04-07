window.addEventListener("DOMContentLoaded", () => {

  const modalBtn = document.getElementById('modalBtn')
  const sidebarBtn = document.getElementById('sidebarBtn')
  const tooltipArea = document.getElementById('tooltipArea')
  const body = document.querySelector('body')

  modalBtn.addEventListener("click", e => {
    e.preventDefault();
    let modal = document.createElement('section')
    modal.id = "modal"
    modal.innerHTML = "Sample Modal"
    body.append(modal)
    fadedBackground()
  })

  sidebarBtn.addEventListener("click", e => {
    e.preventDefault;
    let existingSidebar = document.getElementById('sidebar')
    if (existingSidebar){
      removeSidebar(existingSidebar)
    } else {
      let sidebar = document.createElement('section')
      sidebar.id = "sidebar"
      sidebar.className = "slide-in"
      sidebar.innerHTML = "Sample Sidebar"
      body.append(sidebar)

      sidebar.addEventListener("click", () => removeSidebar(sidebar))
    }
  })

  tooltipArea.addEventListener("mouseenter", e => {
    console.log("bottom pixels", e.target.offsetTop + e.target.clientHeight)
    console.log("right-most pixels", e.target.offsetLeft + e.target.clientWidth)
    console.log("center of the element", e.target.offsetLeft + (e.target.clientWidth/2))
    let tooltip = document.createElement('section')
    tooltip.id = "tooltip"
    tooltip.innerHTML ="Sample Tooltip"
    body.append(tooltip)
    tooltip.style.cssText = `top: ${e.target.offsetTop + e.target.clientHeight + 8}px; left: ${e.target.offsetLeft + (e.target.clientWidth/2)-(tooltip.clientWidth/2)}px`
    console.log(tooltip.clientWidth)
  })

  tooltipArea.addEventListener("mouseleave", e => {
    let tooltip = document.getElementById("tooltip")
    tooltip.remove()
  })

  body.addEventListener("click", e => {
    if (e.target.id === "faded-background"){
      // remove modal
      let modal = document.getElementById('modal')
      fadedBackground()
      modal.remove()
    }
  })

  function fadedBackground() {
    let faded = document.getElementById('faded-background')
    if (faded){
      faded.remove()
    } else {
      faded = document.createElement('main')
      faded.id = "faded-background"
      body.append(faded)
    }
  }

  function removeSidebar(sidebar) {
    sidebar.className="slide-out"
    setTimeout(() => sidebar.remove(), 775)
  }

})
