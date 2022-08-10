import React from 'react';
import {useNavigate} from "react-router-dom"

export const Navbar = (props) => {
    const navigate = useNavigate();
    const onclick =() =>{
        navigate("/");
        localStorage.removeItem('userID');
    }
  return (
    <div><nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#0">ToDo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
         <form className="d-flex" role="search">
          {props.signOut ? <button className="btn btn-outline-success" onClick={onclick} type="submit">SignOut</button>:null}
        </form> 
      </div>
    </div>
  </nav></div>
  )
}
