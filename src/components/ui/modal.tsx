import React, { useRef } from 'react'
/**
 * 
 * @param props {btn-c:string,title:string,image:string,children:React.ReactNode}
 * @returns 
 */
const modal = (props:{btnc:string,title:string,image:string,children:React.ReactNode}) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
      modalRef.current?.showModal();
    };
    const closeModal = () => {
        modalRef.current?.close();
      };
      
   
    
  return (
    <>
    
    <button type="button" className="btn btn-info" onClick={openModal}>
        {props.btnc}
      </button>

      <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom transition-all duration-1000 sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.title}</h3>
          <div>
            {props.children}
          </div>
          <img src={props.image} alt="React logo" />
          <div className="modal-action">
            <form method="dialog">
              <button type="submit" className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    
    </>
  )
}

export default modal