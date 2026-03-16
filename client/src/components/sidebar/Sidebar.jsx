import "./sidebar.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats , setCats] = useState([]);

  useEffect (() => {
    const getCats = async () =>
    {
      const res = await axios.get("https://mern-blog-website-zepb.onrender.com/categories");
      setCats(res.data);
    };
    getCats();
  },[]);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
         <span className="sidebarTitle">ABOUT ME</span>
         <img 
         className="sidebarImg" src="/l.jpg" alt=""
         />

  <p className="sidebartext">
  Blog writing is about knowing your audience and keeping your content clear.
   A catchy title, simple language make it easy to read. 
   Adding visuals like images  improves understanding. 
   Consistency and proofreading help build trust and make your blog professional.

</p>
      
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
      {cats.map((c) => (
  <Link to={`/?cat=${c.name}`} className="link" key={c._id || c.name}>
    <li className="sidebarListItem">{c.name}</li>
  </Link>
))}
        </ul>
</div> 
    

      <div className="sidebarItem">
  <span className="sidebarTitle">FOLLOW US</span>
  <div className="sidebarSocial">
    <a 
      href="https://facebook.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="sidebarIcon fa-brands fa-square-facebook"></i>
    </a>

    <a 
      href="https://twitter.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
    </a>

    <a 
      href="https://instagram.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
    </a>

    
  </div>
</div>

      </div>
      
      
  );
}
