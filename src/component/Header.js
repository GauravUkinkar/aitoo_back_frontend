import React from 'react'
import "./header.scss"
const Header = () => {
  return (
    <>
      <div className="header-parent parent">
        <div className="header-cont container">
            <div className="header-logo">
                <h3></h3>
            </div>
            <div className="header-menu">
              <div className="btn">LogOut</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
