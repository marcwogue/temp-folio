
import fig from '../assets/react.svg';

const Showcase = () => {
 

 
  return (
    <div>

<ul className="timeline timeline-vertical">
    <li>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end timeline-box">First Macintosh computer</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <img src={fig} alt="react" className='rounded-[50%] border-2 p-2 border-solid' />
        
      </div>
      <div className="timeline-end timeline-box">
            <div className='flex justify-space-between '>
                <p>
                    coco
                </p>
                <p >
                    currentColor
                </p>
            </div>
            <div>
                <span>
                    vfhfbvf,cinubzneujv  if
                </span>
            </div>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nulla consequuntur veniam sunt est recusandae voluptatum quos nobis, error dicta sed architecto adipisci vitae veritatis. Facilis quisquam enim quia excepturi?
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum corrupti beatae sequi. Voluptates saepe veniam non omnis vel autem provident debitis aperiam sit laboriosam est, ducimus aliquid quae reiciendis praesentium.
                </p>
            </div>

      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <img src={fig} alt=""  className='rounded-[50%] border-2 p-2 border-solid'/>
      </div>
      <div className="timeline-end timeline-box">iPod</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end timeline-box">iPhone</div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end timeline-box">Apple Watch</div>
      <hr />
    </li>
    <li>
        <hr />
        <div className='timeline-middle'>
            <div className='w-6 h-6 rounded-[50%] border-solid border-2'>

            </div>
        </div>
        <div className="timeline-start timeline-box mb-10 md:text-end">
      <div className="text-lg font-black">First Macintosh computer</div>
      The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
      personal computer. It played a pivotal role in establishing desktop publishing as a general
      office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
      in a beige case with integrated carrying handle; it came with a keyboard and single-button
      <img src={fig} alt="" />
      mouse.
    </div>
    </li>
  </ul>






      {/* ... Timeline content ... */}

   
    </div>
  );
};

export default Showcase;
