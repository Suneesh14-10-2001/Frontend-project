import {Link, NavLink} from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Navbar(){
    return(
        <div className="mov">
         
        <div className="nav-head">
           <NavLink className="link1">
            FAQs
           </NavLink>
           <NavLink className="link2">
            Help
           </NavLink>
           <NavLink className="link3">
            Support
           </NavLink>
           <div className="nav-head1">
               <div className="van">
                
                        <Link to="/" className="va">Home</Link>
                        <Link to="/About" className="va1">About</Link>
                        <Link to="/Product" className="va2">Product</Link>
               </div>
               <div className="vann"> 
               <h1 className="her"><span class="text">i</span>CREAM</h1>
               </div>
               <div className="vannn">
               
                        <Link to="/Service"className="vaa">Service</Link>
                        <Link to="/Gallery"className="vaa1">Gallery</Link>
                        <Link to="/Contact"className="vaa2">Contact</Link>
                  
               </div>

           </div>
          
                <Link className="z"><FaFacebookF /></Link>
                <Link className="y"><FaTwitter /></Link>
                <Link className="x"><FaLinkedinIn /></Link>
                <Link className="w"><FaInstagram /></Link>
                <Link className="v"><FaYoutube /></Link>

        </div>

      
       
        </div>
    )
}
export default Navbar