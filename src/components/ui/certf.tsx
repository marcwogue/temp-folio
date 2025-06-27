import { ArrowRightCircleIcon, GraduationCap, Link, X } from 'lucide-react';
import { useRef } from 'react';

const Certif = (props:{children?: React.ReactNode, link: string}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };
  const closeModal = ()=>{
    dialogRef.current?.close();
  }

  return (
    <div>
      <button className="btn " onClick={openModal}>
        <GraduationCap/>
      </button>
      <dialog ref={dialogRef} className=" modal">
        <div className="modal-box">
          <form method="dialog " className=' pt-4 pb-4  justify-between flex'>
            <h2 className='text-secondary text-3xl'><Link className="inline-block mx-auto"/> voir la certification</h2>
          </form>
            <p className='text-center text-[1rem]'>
            vous serez redirigé vers <br /> "{props.link}" <br /><br />
            </p>
          <p className='text-center'>veuillez confirmer pour continuer</p>
          <div className='flex justify-between'>
          <button  className='btn btn-secondary text-base-100' onClick={closeModal}>
                anuler <X/>
            </button>
            <a href={props.link} className='btn btn-primary m-2' target='_blank'>proceder <ArrowRightCircleIcon className="inline-block mx-auto" /></a>
            
          </div>
            
        </div>
      </dialog>
    </div>
  );
};

export default Certif;
