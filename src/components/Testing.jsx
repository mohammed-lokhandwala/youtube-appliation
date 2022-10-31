
import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader"
const Testing = () => {
    
    
 
 const notify = () => toast.success(' Form Submitted', {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: 0,
theme: "dark",
  });

    return (
   <>



 <button onClick={notify}>click me</button>
 <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="dark"
 />

<Loader></Loader>
   
   </>
  )
}

export default Testing