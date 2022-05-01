import React from 'react'

function Part5() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-5' style={{height:"70vh"}}>
  
      
      <p className='text-center p-2 display-2 fw-bold'>Stay up to date</p>
      <div className='p-2'>
        <a className='m-2' href="#tg">
          <img width="30px" src="assets/banana.webp" alt="" />
        </a>
        
        <a className='m-2' href="#twitter">
          <img width="30px" src="assets/banana.webp" alt="" />
        </a>

        <a className='m-2' href="#medium">
          <img width="30px" src="assets/banana.webp" alt="" />
        </a>

      </div>
      <img width="100px" src="assets/apeimage2.png" alt=""  className='p-2'/>
      <p className='p-2'>Probably Something.</p>
    </div>
  )
}

export default Part5