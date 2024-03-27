import { GoDotFill } from "react-icons/go";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import d2 from'./img/product-1.jpg'
import d3 from'./img/product-2.jpg'
import d4 from'./img/product-3.jpg'
import d5 from'./img/product-4.jpg'
import d6 from'./img/product-5.jpg'
import {Link} from "react-router-dom"
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";

function Product(){
                     
return(
  <div className="se">

      <div className="gf"><h1>Product</h1>
        <p>Home <i><GoDotFill /></i> Product</p>
      </div>
      <div className="sixthsection">
      <div className='six'>
            <div className="sixx"></div>
         <div className="sixxx">Best Prices We Offer For Ice Cream Lovers</div>
         </div>  
        
         <OwlCarousel className='owl-themee' items={4} loop margin={10} nav>
            
    <div class="ite1">
    
      <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d2}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
      
    </div>
    <div class="ite1">
       <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d3}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
      </div>
    <div class="ite1"> 
    <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d4}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
      </div>
    <div class="ite1">
       <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d5}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
      </div> 
    <div class="ite1">
    <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d6}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
      </div>
    <div class="ite1">
    <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d2}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
    </div>
    <div class="ite1">
    <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d3}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
    </div>
    <div class="ite1">
    <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d4}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
    </div>
    <div class="ite1">
    <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d5}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
    </div>
    <div class="ite1">
    <div className='itea'>
      <div className='ite'>$99</div>
           <div className='flip'>
           <img 
          className="ops"src={d6}alt="second slide"
        />
           </div>
           <h4 class="opss">Vanilla Ice Cream</h4>
           <div className='btnnn'>Order Now</div>
      </div>
    </div>
   
  
    </OwlCarousel>
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
export default Product;