import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import y1 from './img/service-1.jpg'
import y2 from './img/service-2.jpg'
import y3 from './img/service-3.jpg'
import y4 from './img/service-4.jpg'
import { GoDotFill } from "react-icons/go";
import { FaQuoteLeft } from "react-icons/fa";
import p2 from'./img/testimonial-3.jpg'
import p3 from'./img/testimonial-2.jpg'
import p4 from'./img/testimonial-1.jpg'
import {Link} from "react-router-dom"
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
function Service(){
    return(
        <div className="se">

      <div className="gf"><h1>Service</h1>
        <p>Home <i><GoDotFill /></i> Service</p>
      </div>
        <div className="fourthcontainer">
            <div className='fourt'>
            <div className="sixx"></div>
            <div className='four'> Best Services We Provide For Our Clients</div>  
           
            </div>
           
            <OwlCarousel className='owl-theme' loop margin={10} nav>
           
      <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y1}alt="First " 
        />
            </div>
        </div>
        <h4>Quality Maintain</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y2}alt="First " 
        />
            </div>
        </div>
        <h4>individual approach</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y3}alt="First " 
        />
            </div>
        </div>
        <h4>Celebration Ice Cream</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y4}alt="First " 
        />
            </div>
        </div>
        <h4>Delivery To Any Point</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y1}alt="First " 
        />
            </div>
        </div>
        <h4>Quality Maintain</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y2}alt="First " 
        />
            </div>
        </div>
        <h4>individual approach</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y3}alt="First " 
        />
            </div>
        </div>
        <h4>Celebration Ice Cream</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y4}alt="First " 
        />
            </div>
        </div>
        <h4>Delivery To Any Point</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y1}alt="First " 
        />
            </div>
        </div>
        <h4>Quality Maintain</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y2}alt="First " 
        />
            </div>
        </div>
        <h4>individual approach</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y3}alt="First " 
        />
            </div>
        </div>
        <h4>Celebration Ice Cream</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
    <div class='item1'>
        <div className='onea'>
            <div className='oneb'>
            <img
          className="on"src={y4}alt="First " 
        />
            </div>
        </div>
        <h4>Delivery To Any Point</h4>
        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
        <a class="wwe">Learn More</a>
    </div>
  

    
</OwlCarousel>
        
         </div>
         <div className="eightsection">
        <div className="avarage">
          <div className="eight"></div>
         <div className="eightse">Clients Say About Our Famous Ice Cream</div>
         
        
         <OwlCarousel className='owl-themeeee' items={1} loop margin={10} nav>
    <div class="col1">
      <div className='colic'>
      <Link className='clic' > <FaQuoteLeft /></Link>
      </div>
    
     <h4> Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
       Rebum elitr dolore et eos labore, stet justo sed est sed.
        Diam sed sed dolor stet amet eirmod eos labore diam</h4>
        <div className='jpic'>
        <img 
          className="jl"src={p2}alt="Second slllide"
        />
        </div>
        <h5 class="fn">Client Name</h5>
        <span className='s'>Profession</span>
    </div>

    <div class="col1">
    <div className='colic'>
      <Link className='clic' > <FaQuoteLeft /></Link>
      </div>
    
     <h4> Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
       Rebum elitr dolore et eos labore, stet justo sed est sed.
        Diam sed sed dolor stet amet eirmod eos labore diam</h4>
        <div className='jpic'>
        <img 
          className="jl"src={p3}alt="Second slllide"
        />
        </div>
        <h5 class="fn">Client Name</h5>
        <span className='s'>Profession</span>
    </div>
    <div class="col1"> <div className='colic'>
      <Link className='clic' > <FaQuoteLeft /></Link>
      </div>
    
     <h4> Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
       Rebum elitr dolore et eos labore, stet justo sed est sed.
        Diam sed sed dolor stet amet eirmod eos labore diam</h4>
        <div className='jpic'>
        <img 
          className="jl"src={p4}alt="Second slllide"
        />
        </div>
        <h5 class="fn">Client Name</h5>
        <span className='s'>Profession</span></div>
    


</OwlCarousel>
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
export default Service;