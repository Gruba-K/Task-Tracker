
const Button = ({color,text,cleve}) => {
  return (
    <button 
    style={{backgroundColor:color}} 
    className="btn"
    onClick={cleve}
    >{text}</button>
  )
}

export default Button;