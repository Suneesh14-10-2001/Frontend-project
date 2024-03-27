import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from "react-router-dom"
import { FaQuoteLeft } from "react-icons/fa";
import p2 from'./img/testimonial-3.jpg'
import p3 from'./img/testimonial-2.jpg'
import p4 from'./img/testimonial-1.jpg'
function Galler(){
    return(

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

    )
}
export default Galler;