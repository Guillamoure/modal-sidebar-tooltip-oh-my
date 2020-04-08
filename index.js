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
    let tooltip = document.createElement('section')
    tooltip.id = "tooltip"
    tooltip.innerHTML ="Sample Tooltip"

    body.append(tooltip)

    const howFarElementIsFromTop = e.target.offsetTop
    const heightOfElement = e.target.clientHeight
    const howFarElementIsFromLeft = e.target.offsetLeft
    const widthOfElement = e.target.clientWidth
    const widthOfTooltip = tooltip.clientWidth

    tooltip.style.cssText = `top: ${howFarElementIsFromTop + heightOfElement + 8}px; left: ${howFarElementIsFromLeft + (widthOfElement/2)-(widthOfTooltip/2)}px;`
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
