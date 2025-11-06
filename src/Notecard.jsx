import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Editnotes from './Editnotes'

function Notecard() {
  return (
    <>
      <div className='m-2 notecard d-flex flex-column justify-content-center align-items-center p-3'>
        <h3 className='text-info' style={{ fontWeight: "bold" }}>Title</h3>
        <h5 className='text-light' style={{ fontWeight: "bold" }}>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita libero impedit eligendi nihil in tempore voluptas soluta nemo nobis.</h5>
        <div className='d-flex justify-content-between  w-100'>
          <Editnotes/>
          <button className='btn btn-danger '><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
    </>
  )
}

export default Notecard