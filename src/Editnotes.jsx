import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Editnotes() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <div>
        <button className='btn btn-primary ' onClick={handleShow}><FontAwesomeIcon icon={faPen} /></button>
      </div>
      
      {/* modal for edit notes */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-primary' style={{ fontWeight: "bold" }}>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className='form-control py-2 text-center bg-primary fs-5 ' placeholder='Title' style={{ fontWeight: "bold", color: "rgba(52, 50, 50, 1)" }} />
          <textarea className='form-control py-2 mt-2 text-center bg-primary fs-5 ' placeholder='Description' style={{ fontWeight: "bold", color: "rgba(52, 50, 50, 1)" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editnotes