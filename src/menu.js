import React from 'react'

function Menu() {
    return (
        <div className="menu">
        <div className="container">
          <div className="row">
            <div className=" col-md-12 col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark mt-lg-4">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="#"><img src="logo.png" width="100px" height="40px" /></a><br />
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav  mt-2 mt-lg-0 ml-auto ">
                    <li className="nav-item active">
                      <a className="nav-link" href="#" /></li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">COMPANY</a></li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">SERVICES</a></li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">BLOG</a></li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">CAREER</a></li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">CONTACT US</a></li>
                  </ul>
                </div>             
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Menu
