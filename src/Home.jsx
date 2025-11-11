import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { addnotesAPI } from './services/allApi';

function Home() {
    const [show, setShow] = useState(false);
    const [notedetails, setNotedetails] = useState({
        title: "",
        description: ""
    })
    console.log(notedetails);

    const handleCancel = () => {
        setNotedetails({
            title: "",
            description: ""
        })
    }

    const handleAdd = async () => {
        const { title, description } = notedetails
        console.log(title, description);
        if (!title || !description) {
            alert(`Fill the form completely`)
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("description", description)

            const result = await addnotesAPI(reqBody)
            if (result.status == 200) {
                alert(`Notes successfully added`)
                setTimeout(() => {
                    handleClose()
                }, 1000);

            } else if (result.status == 406) {
                alert(result.response.data)
            } else {
                alert(`Something went wrong`)
            }
        }

    }


    const handleClose = () => {
        handleCancel()
        setShow(false);
    }
    const handleShow = () => setShow(true);
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
                    <button onClick={handleShow} className=' btn text-primary' style={{ height: "4rem" }}>
                        <FontAwesomeIcon icon={faPlus} className='fa-2x addbtn' />
                    </button>
                </Container>
            </Navbar>

            {/* Home section */}
            <div className='homepage container-fluid'>
                <div className="row " style={{ height: "80vh" }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex justify-content-center align-items-center">
                        <div className='d-flex flex-column justify-content-center align-items-center p-5 bg-light'>
                            <button onClick={handleShow} className='btn btn-lg btn-primary rounded-0 ' style={{ fontWeight: "bold" }}>Add Notes</button>
                            <Link to={'/addednotes'}><button className='btn btn-lg btn-info rounded-0 mt-3' style={{ fontWeight: "bold" }}>All Notes</button></Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            {/* Modal for add notes */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-primary' style={{ fontWeight: "bold" }}>Add Notes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={notedetails.title} onChange={(e) => setNotedetails({ ...notedetails, title: e.target.value })} type="text" className='form-control py-2 text-center bg-primary fs-5 rounded-0' placeholder='Title' style={{ fontWeight: "bold", color: "rgba(52, 50, 50, 1)" }} />
                    <textarea value={notedetails.description} onChange={(e) => setNotedetails({ ...notedetails, description: e.target.value })} className='form-control py-2 mt-2 text-center bg-primary fs-5 rounded-0' placeholder='Description' style={{ fontWeight: "bold", color: "rgba(52, 50, 50, 1)" }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger rounded-0" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="success rounded-0" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Home