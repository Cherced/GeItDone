import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

function Modal({ children }) {
  const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

  return mounted ?  createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('myportal')
  ) : null
}

export { Modal };
