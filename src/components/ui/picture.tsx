

const picture = (props:{src:string,className?:string}) => {
  return (
    <div >
        <img src={props.src} className={`${props.className}  border-secondary border-4 border-solid rounded-2xl object-cover`} alt="" />
    </div>
  )
}

export default picture