import { X, Link, NotebookIcon } from 'lucide-react';
import { useRef } from 'react';

const Popup = (props:{children?: React.ReactNode,title : string, source : string}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };
  const closeModal = ()=>{
    dialogRef.current?.close();
  }
  return (
    <div>
      <button className="btn" onClick={openModal}>
        <NotebookIcon/>
      </button>
      <dialog ref={dialogRef} className="  modal" onClick={closeModal}>
        <div className="h-[80vh] scale-150  gap-4 modal-box">
          <form method="dialog " className='justify-between flex'>
            <h2><Link className="inline-block mx-auto"/>{props.title} </h2>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"></button>
          </form>
          <h1 className='text-4xl font-medium'>{props.title}</h1>
          <img src={props.source} alt="" />
            {props.children}
            <div className='w-full text-center justify-around '>
              <button onClick={closeModal} className='btn btn-secondary '>
              <X />
              </button>
            </div>
        </div>
      </dialog>
    </div>
  );
};

export default Popup;
