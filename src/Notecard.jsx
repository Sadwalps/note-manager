import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Editnotes from './Editnotes'

function Notecard({ allnote }) {
  return (
    <>
      <div className='m-2 notecard d-flex flex-column justify-content-center align-items-center p-3'>
        <h4 className='text-info' style={{ fontWeight: "bold" }}>{allnote?.title}</h4>
        <h6 className='text-light' style={{ fontWeight: "bold" }}>{allnote?.description}</h6>
        <div className=' mt-2 d-flex justify-content-between  w-100'>
          <Editnotes />
          <button className='btn btn-danger '><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
    </>
  )
}

export default Notecard