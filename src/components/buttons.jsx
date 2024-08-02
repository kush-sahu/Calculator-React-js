import './custome.css'
const Button=( {arr,buttonhandle})=>{
    return <>
    {arr.map((arr,index)=>(
      
      <button key={index}
      className={`btn btn-secondary m-1 clcbutton ${arr === 'C' ? 'btn-danger' : ''}  `}
      onClick={()=>buttonhandle(arr)}
      >{arr}</button>
           
  ))}
    </>
}
export default Button;