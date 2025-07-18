import { ArrowRightCircleIcon, Link, X } from 'lucide-react';
import { useRef } from 'react';

const Popup = (props:{children?: React.ReactNode, link: string ,classname? : string}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };
  const closeModal = ()=>{
    dialogRef.current?.close();
  }

  return (
    <div>
      <button className={`btn scale-75 ` + props.classname}onClick={openModal}>
        {props.children}
      </button>
      <dialog ref={dialogRef} className= " modal">
        <div className="modal-box scale-200">
          <form method="dialog " className=' pt-4 pb-4  justify-between flex'>
            <h2 className='text-secondary text-3xl'><Link className="inline-block mx-auto"/> ouvrir le lien?</h2>
          </form>
            <p className='text-center text-[1rem]'>
            vous serez redirigé vers <br /> "{props.link}" <br /><br />
            </p>
          <p className='text-center'>veuillez confirmer que vous voulez ouvrir le lien</p>
          <div className='justify-between  flex'>
            <button className='btn btn-neutral m-2' onClick={closeModal} >anuler <X /></button>
            <a href={props.link} className='btn btn-primary m-2' target='_blank'>proceder <ArrowRightCircleIcon className="inline-block mx-auto" /></a>
          </div>
            
        </div>
      </dialog>
    </div>
  );
};

export default Popup;
