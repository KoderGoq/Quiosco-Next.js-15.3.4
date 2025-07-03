'use client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const ToastNotification = () => {
  return (
    <ToastContainer
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
  )
}

export default ToastNotification