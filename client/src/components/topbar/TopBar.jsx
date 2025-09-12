import "./topbar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";



export default function Topbar() {
  const { user, dispatch } = useContext(Context);


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='top'>
      <div className="topLeft">
     <h1>BlogVerse</h1>
      </div>
      <div className="topCenter">
         <ul className="topList">
         <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
         <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
         </ul>
      </div>
      <div className="topRight">
        <Link to="/settings">
         <img 
         className="topImg"
         src="bg.jpg" alt="" />
         </Link>
         <button className="regButton">
         <Link className="link" to="/register"> Register</Link>
         </button>
       
        
         
      </div>
      </div>
  );
}
