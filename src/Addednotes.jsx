import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Notecard from './Notecard';
import Footer from './Footer';
import { getnotesAPI } from './services/allApi';

function Addednotes() {
  const [allnotes, setAllnotes] = useState([])
  const [deletestatus, setDeletestatus] = useState({})
  const [editstatus, setEditstatus] = useState("")


  const getallnotes = async () => {
    const result = await getnotesAPI()
    console.log(result);
    setAllnotes(result.data)
  }
  console.log(allnotes);



  useEffect(() => {
    getallnotes()
  }, [deletestatus, editstatus])
  return (
    <>
      {/* navbar */}
      <Navbar className=" ">
        <Container >

          <Link to={'/'} className='ms-auto'><button className='btn btn-primary rounded-0 fs-4' style={{ float: "right" }}><FontAwesomeIcon icon={faHouse} /></button>
          </Link>

        </Container>
      </Navbar>

      {/*  */}
      <div className='bg-primary' id='addednotesection1' >
        <div className='container-fluid '>
          <div className="row pt-5">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-light">
              <h2 style={{ fontWeight: "bold" }}>Note Manger</h2>
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
      <div className='addednotesection2 pb-4'>
        <h2 className='text-center pt-5 pb-3' style={{ fontWeight: "bold" }}>Added Notes</h2>

        {/* For search notes */}
        {/* <div className='container-fluid mt-3 mb-5'>
          <div className="row m-2">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <input  onChange={(e) => setSearchKey(e.target.value)} type="text" className='form-control  text-center py-3 rounded-0 bg-primary text-dark' placeholder='Search Notes' style={{ fontWeight: "bold" }} />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div> */}

        {allnotes.length > 0 ? <div className='container-fluid'>
          {allnotes?.map((item) => (<div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Notecard allnote={item} setDeletestatus={setDeletestatus} setEditstatus={setEditstatus} />
            </div>
            <div className="col-md-2"></div>
          </div>))}
        </div> :


          <div className='d-flex justify-content-center align-items-center m-2' style={{ minheight: "90vh" }}>
            <div className='row'>
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20221005/pngtree-note-write-note-paper-photo-image_6880654.jpg" alt="" className='w-100' />
                <h3 className='text-center mt-4' style={{ fontWeight: "bold" }}>No Notes added yet !!!</h3>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>}
      </div>

      {/* Footer */}
      <Footer />

    </>
  )
}

export default Addednotes