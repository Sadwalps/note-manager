import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
    return (
        <>
            {/* nav bar */}
            <Navbar className="bg-light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://png.pngtree.com/png-clipart/20230119/original/pngtree-hand-drawn-black-and-white-spiral-notepad-sticky-notes-png-image_8922253.png"
                            width="40"
                            height="40"
                            className='weblogo'
                        />{' '}

                    </Navbar.Brand>
                    <button className=' btn text-primary' style={{ height: "4rem" }}>
                        <FontAwesomeIcon icon={faPlus} className='fa-2x addbtn' />
                    </button>
                </Container>
            </Navbar>

            {/* Home section */}
            <div className='homepage container-fluid'>
                <div className="row "  style={{ height: "80vh" }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex justify-content-center align-items-center">
                        <div className='d-flex flex-column p-5 bg-light'>
                            <button className='btn btn-lg btn-primary rounded-0 ' style={{fontWeight:"bold"}}>Add Notes</button>
                             <button className='btn btn-lg btn-info rounded-0 mt-3' style={{fontWeight:"bold"}}>All Notes</button>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default Home