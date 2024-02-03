import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark border border-2 border-success ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic"  to="/">Newsify</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link  fs-5"aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fs-5" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fs-5" to="/general">General</Link> </li>
              <li className="nav-item">
                <Link className="nav-link  fs-5" to="/health">Health </Link> </li>
              <li className="nav-item">
                <Link className="nav-link  fs-5" to="/science">Science </Link> </li>
              <li className="nav-item">
                <Link className="nav-link  fs-5" to="/sports">Sports </Link> </li>
              <li className="nav-item">
                <Link className="nav-link  fs-5" to="/technology">Technology</Link>
              </li>





            </ul>

          </div>
        </div>
      </nav>
    </div>
  )

}

export default NavBar


