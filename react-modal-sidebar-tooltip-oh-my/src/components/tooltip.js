import React from 'react'

const Tooltip = props => {

  const [tooltipWidth, changeTooltipWidth] = React.useState(0)

  const adjustWidth = () => {
    let tooltip = document.getElementById('tooltip')
    changeTooltipWidth(tooltip.clientWidth)
  }

  React.useEffect(adjustWidth, [])
  window.addEventListener("resize", () => props.toggleTooltip ? adjustWidth : null)

  const howFarElementIsFromTop = props.elementWithTooltip.offsetTop
  const heightOfElement = props.elementWithTooltip.clientHeight
  const howFarElementIsFromLeft = props.elementWithTooltip.offsetLeft
  const widthOfElement = props.elementWithTooltip.clientWidth
  
  const style = {
    top: `${ howFarElementIsFromTop + heightOfElement + 8 }px`,
    left: `${ howFarElementIsFromLeft + (widthOfElement / 2) - ( tooltipWidth / 2 ) }px`
  }

  return (
    <React.Fragment>
      <section id='tooltip' style={style}>Sample Tooltip</section>
    </React.Fragment>
  )
}

export default Tooltip
