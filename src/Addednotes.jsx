import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Notecard from './Notecard';

function Addednotes() {
  return (
    <>

      <Navbar className=" ">
        <Container >
          <Navbar.Brand href="#home" className='ms-auto' >
            <Link to={'/'}><button className='btn btn-primary  fs-4' style={{ float: "right" }}><FontAwesomeIcon icon={faHouse} /></button>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* navbar */}


      {/*  */}
      <div className='bg-primary' id='addednotesection1' >
        <div className='container-fluid '>
          <div className="row pt-5">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-light">
              <h2 style={{fontWeight:"bold"}}>Note Manger</h2>
             <p className='fs-3 text-center' >
                Its a simple yet powerful tool designed to keep your ideas organized. Whether it's your daily tasks, creative thoughts, or study notes - save everything safely and access it anytime, anywhere
             </p>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center pt-4">
              <img src="https://www.astrobrights.com/-/media/images/astrobrightsstorefront/inspiration/articles/easy-paper-notebooks-backtoschool-lined-notebook.ashx?la=en" alt="" className='w-100 shadow' />
            </div>
          </div>

        </div>
      </div>

      {/* Added notes section 2 */}
      <div className='addednotesection2'>
      <h2 className='text-center'>Added Notes</h2>
      <div className='container-fluid'>
        <Notecard/>

      </div>

      </div>



    </>
  )
}

export default Addednotes