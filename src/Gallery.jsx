import { ImPlus } from "react-icons/im";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
function Gallery(){
       

    return(

<div className="se">

<div className="gf"><h1>Gallery</h1>
  <p>Home <i><GoDotFill /></i> Gallery</p>
</div>

         <div className="fi">

        <div className="fifthsection">
         <div className="fifthse">
            Delicious Ice Cream Made From Our Very Own Organic Milk
         </div>
         <div className="fifth">
            <div className="fifone">
              <div className="fif1">
               <div className="fi2"> <Link className="zc"><ImPlus /></Link></div> 
              </div>
            </div>
            <div className="fiftwo">
            <div className="fif1">
            <div className="fi2"> <Link className="zc"><ImPlus /></Link></div> 
            </div>
            </div>
            <div className="fifthree">
            <div className="fif1">
            <div className="fi2"> <Link className="zc"><ImPlus /></Link></div> 
            </div>
            </div>
            <div className="fiffour">
            <div className="fif1">
            <div className="fi2"> <Link className="zc"><ImPlus /></Link></div> 
            </div>
            </div>
            <div className="fiffive">
            <div className="fif1">
            <div className="fi2"> <Link className="zc"><ImPlus /></Link></div> 
            </div>
            </div>
            <div className="fifsix">
            <div className="fif1">
            <div className="fi2"> <Link className="zc"><ImPlus /></Link></div> 
            </div>
            </div>







        
       </div> 
       </div>
       </div>
       <div className="ninethsection">
     <div className="nineth">
        <div className="leno">
        <h1 class="her"><span class="text">i</span>CREAM</h1>
        </div>
        <div className="lenoone">
            <div className="praku">
            <Link  className='pra'><BsTwitter />
            </Link>
            </div>
            <div className="praku">
            <Link className="pra"> <FaFacebookF />
             </Link>
            </div>
            <div className="praku">
            <Link className='pra'><LiaLinkedinIn />
             </Link>
            </div>
            <div className="praku">
            <Link className='pra'><IoLogoInstagram />
             </Link>
            </div>
        </div>
        <div className="shark">
            <div className="sha"><h5 class="get">Get In Touch</h5></div>
    
            <p className="gett">123 Street, New York, USA</p>
          
            <p class="gettt">+012 345 67890</p>
        </div>
        <div className="shark1">
        <h5 class="open">Opening Hours</h5>
        <p class="openn">Mon – Sat, 8AM – 5PM</p>
        <p class="opennn">Sunday: Closed</p>
        </div>
        <div className="vida">
        <p class="bcom">© <a href="#">Domain</a>. All Rights Reserved. Designed by
         <a href="https://htmlcodex.com">HTML Codex</a>
                    </p>
        </div>
     </div>

</div>

       </div>
    )
}
export default Gallery;