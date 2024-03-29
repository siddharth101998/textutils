import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <div>
            <nav style={{ backgroundColor: props.mode === "light" ? "rgb(198, 193, 193)" : (props.mode === "red" ? "pink" : "lightblue") }} className="navbar navbar-expand-lg bg-lg">
                <div className="container-fluid" style={{ color: props.mode === "light" ? "black" : "white" }}>
                    <a className="navbar-brand" href="#">{props.title} </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.hometext}</a>
                            </li>

                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        
                        </form> */}

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                            <input className="form-check-input" type="checkbox" onClick={props.redtoggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Dark Mode</label>
                        </div>

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.blacktoggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Black Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    hometext: PropTypes.string,
}
Navbar.defaultProps = {
    title: 'Set title here',
    hometext: 'About text here'
};
