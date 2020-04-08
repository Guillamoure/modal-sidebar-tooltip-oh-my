import React from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from './components/modal'
import Sidebar from './components/sidebar'
import Tooltip from './components/tooltip'

function App() {

  const [activeModal, toggleModal] = React.useState(false)
  const [activeSidebar, toggleSidebar] = React.useState(false)
  const [animationClassName, toggleAnimationClassName] = React.useState('slide-in')
  const [activeTooltip, toggleTooltip] = React.useState(false)
  const [elementWithTooltip, toggleElementWithTooltip] = React.useState(null)

  const renderSidebarClick = () => {
    if (activeSidebar){
      toggleAnimationClassName('slide-out')
      setTimeout(() => toggleSidebar(false), 775)
    } else {
      toggleAnimationClassName('slide-in')
      toggleSidebar(true)
    }
  }

  const renderMouseEnter = (e) => {
    toggleTooltip(true)
    toggleElementWithTooltip(e.target)
  }

  const renderMouseLeave = () => {
    toggleTooltip(false)
    toggleElementWithTooltip(null)
  }

  return (
    <React.Fragment>
      <h1>Hello World</h1>

      <button id='modalBtn' className='btn' onClick={() => toggleModal(true)}>Modal</button>
      <br/>
      <button id='sidebarBtn' className='btn' onClick={renderSidebarClick}>Sidebar</button>
      <p id='tooltipArea' className='textarea' onMouseEnter={renderMouseEnter} onMouseLeave={renderMouseLeave}>Tooltip Area</p>

      {activeModal && <Modal toggleModal={toggleModal}/>}
      {activeSidebar && <Sidebar toggleSidebar={toggleSidebar} animationClassName={animationClassName} renderSidebarClick={renderSidebarClick}/>}
      {activeTooltip && <Tooltip toggleTooltip={toggleTooltip} elementWithTooltip={elementWithTooltip}/>}
    </React.Fragment>
  );
}

export default App;
