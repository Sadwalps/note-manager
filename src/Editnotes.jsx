import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editnotesAPI } from './services/allApi';
function Editnotes({ allnote, setEditstatus }) {
  const [show, setShow] = useState(false);

  const [editdetails, setEditdetails] = useState({
    title: allnote?.title,
    description: allnote?.description
  })


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(allnote);

  const handleEdit = async () => {
    const { title, description } = editdetails
    console.log(title, description);
    if (!title || !description) {
      alert(`Fill the form completely`)
    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("description", description)

      const result = await editnotesAPI(allnote._id, reqBody)
      if (result.status == 200) {
        alert(`Notes successfully updated`)
        setEditstatus(result)
        setTimeout(() => {
          handleClose()
        }, 1000);
      } else {
        alert(`Something went wrong`)
      }
    }
  }


  return (
    <>

      <div>
        <button className='btn btn-primary rounded-0' onClick={handleShow}><FontAwesomeIcon icon={faPen} /></button>
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
          <input value={editdetails.title} onChange={(e) => setEditdetails({ ...editdetails, title: e.target.value })} type="text" className='form-control py-2 text-center bg-primary fs-5 rounded-0 ' placeholder='Title' style={{ fontWeight: "bold", color: "rgba(52, 50, 50, 1)" }} />
          <textarea value={editdetails.description} onChange={(e) => setEditdetails({ ...editdetails, description: e.target.value })} className='form-control py-2 mt-2 text-center bg-primary fs-5 rounded-0' placeholder='Description' style={{ fontWeight: "bold", color: "rgba(52, 50, 50, 1)" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger rounded-0" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => handleEdit(editdetails?._id)} variant="primary rounded-0">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editnotes