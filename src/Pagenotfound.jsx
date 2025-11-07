import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <div className='container-fluid'  >
      <div className="row d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-3"></div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" >
          <h1 id='pnfhead1'>
            404
          </h1>
          <h4 id='pnfhead2'>Page not found</h4>
          <img src="https://img.freepik.com/premium-photo/book-with-question-mark_1029469-33999.jpg" alt="" className='w-75 mt-2' id='pagenotfoundimg' />
          <Link to={'/'}><button className='btn btn-primary mt-4 fs-4' style={{ float: "right" }}><FontAwesomeIcon icon={faHouse} /></button>
          </Link>
        </div>
        <div className="col-md-3"></div>
      </div>

    </div>
  )
}

export default Pagenotfound