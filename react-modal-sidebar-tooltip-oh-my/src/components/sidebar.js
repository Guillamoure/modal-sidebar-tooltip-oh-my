import React from 'react'

const Sidebar = props => {


  return (
    <React.Fragment>
      <section id='sidebar' className={props.animationClassName} onClick={props.renderSidebarClick}>Sample Sidebar</section>
    </React.Fragment>
  )
}

export default Sidebar
