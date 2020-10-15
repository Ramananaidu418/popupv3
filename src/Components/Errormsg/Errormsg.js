import React ,{useState}from "react";
import "./Errormsg.css";

const Errormsg =(props)=> {
    // const [errormessage,setErrormessage] = useState("Errormessage");
    const [button,setButton] = useState("button");
    const [onhover,setOnhover] = useState(false);

  const onMouseEnter = () => {
    setOnhover(true);
  }
   const onMouseLeave = () => {
    setOnhover(false );
   }
  

  const alertMessage = () => {
    alert(props.errorId);
  };
 
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={
          onhover ? "error-message mouseOverBg" : "error-message"
        }
      >
        <div className="error-details">
          <div className="logo">
          <input  onClick = {()=>props.Selection(props.errorId)} type="checkbox" className="myCheck"></input>
            <span class="material-icons">text_rotation_angleup</span>
          </div>
          <div className="error">
            <p className="message-header">{props.nodename}</p>
            <p className="message-id">{props.errorId}</p>
          </div>
          {/* <div>
            <input  onClick = {()=>this.props.Selection(this.props.errorId)} type="checkbox" className="myCheck"></input>
          </div> */}
          {onhover ? (
            <div className={button}>
              <p onClick={alertMessage}>open</p>
            </div>
          ) : ("" )}
        </div>
        <div className="content">
          <p>{props.message}</p>
        </div>
      </div>
    );
  
}
export default Errormsg;
