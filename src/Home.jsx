
import { ImCheckmark } from "react-icons/im";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import y1 from './img/service-1.jpg'
import y2 from './img/service-2.jpg'
import y3 from './img/service-3.jpg'
import y4 from './img/service-4.jpg'
import { ImPlus } from "react-icons/im";
import { Link } from "react-router-dom";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import d2 from'./img/product-1.jpg'
import d3 from'./img/product-2.jpg'
import d4 from'./img/product-3.jpg'
import d5 from'./img/product-4.jpg'
import d6 from'./img/product-5.jpg'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import {Link} from "react-router-dom"
import { FaQuoteLeft } from "react-icons/fa";
import p2 from'./img/testimonial-3.jpg'
import p3 from'./img/testimonial-2.jpg'
import p4 from'./img/testimonial-1.jpg'
// import {Link} from "react-router-dom"
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";


import t1 from './img/team-1.jpg'
import t2 from './img/team-2.jpg'
import t3 from './img/team-3.jpg'
import t4 from './img/team-4.jpg'


function Home(){
    
    return(
         <div className='award'>
             <div className="hu">
             <div className="pm">
             <h2>TRADITIONAL & DELICIOUS</h2>
          <p>Traditional Ice Cream Since 1950</p>
          <div className='butt1'>Learn More</div> 
          </div> 
                                                               
             </div>
                              
  {/* {section2} */}
    {/* <About/> */}

    <div className="second">
          <div className="secone"> 
          <div className="sectwo">
            <div className="secd"></div>
            <div className="sech">Traditional & Delicious Ice Cream Since 1950</div>
            </div> 
            <div className="wol1">
              <div className="seone">About Us</div>
              <div className="setwo">Eos kasd eos dolor vero vero, lorem stet diam rebum.
                                  Ipsum amet sed vero dolor sea</div>
              <div className="sethree">Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
                                nonumy kasd sed dolor eos diam lorem eirmod.
                                Amet sit amet amet no. Est nonumy sed labore eirmod sit magna.
                                Erat at est justo sit ut.
                                Labor diam sed ipsum et eirmod</div>
              <div className="sebutton">Learn More</div>
             
            </div>
            <div className="wol2"></div>
            <div className="wol3">
            <div className="sone">Our Features</div>
            <div className="stwo">Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                            justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                            Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                                  </div>
                        <div className="s3ic">  Eos kasd eos dolor<div className="ic"><ImCheckmark /></div>
                       </div> 
                       <div className="s3ico">  Eos kasd eos dolor<div className="ico"><ImCheckmark /></div>
                       </div> 
                       <div className="s3icon">  Eos kasd eos dolor<div className="icon"><ImCheckmark /></div>
                       </div> 
              <div className="seebutton">Learn More</div>
              
            </div>

          </div>
        </div>
  
  {/* {section3} */}
     {/* <Product/> */}
     <div className="thirdsection">
         <div className="third">
           <div className="thone">
           <div className='rbutton'>
           <button type="button" class="btn-play"
            data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                        <span></span>
                    </button>
            <div className="ricon"></div>
           </div>
            </div>
           <div className="thtwo">
        
            <div className='ttone'>
              <div className='tone'>$199</div>
              </div>
             <div className='ttwo'>Chocolate Ice Cream</div>
             <div className='tthree'>
                                 <p>Lorem justo clita dolor ipsum ut sed eos,
                                     ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. 
                                     Ea et erat ut sed diam sea ipsum</p>
             </div>
             <div className='tfour'>Order Now</div>  
             </div>
           </div>   
    </div>
    
  {/* {section4} */}
     {/* <Service/>  */}
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

  {/* {section5} */}
     {/* <Gallery/> */}
            
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
  {/* {section6} */}
      {/* <Gallery1/> */}
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

  {/* {section7} */}
       {/* <Gallery2/> */}
       <div className="seventh">
            <div className="seven"></div>
                Experienced &amp; Most Famous Ice Cream Chefs</div>
       
 <OwlCarousel className='owl-themeee' loop margin={10} nav>
    {/* <div className='semone'> */}
    <div class="sem1">
      <div className='sem2'>
      <img
          className="lup"src={t1}alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    {/* </div> */}





    <div class="sem1"> 
    <div className='sem2'>
      <img
          className="lup"src={t2}alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div></div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t3 }alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    <div class="sem1"> 
    <div className='sem2'>
      <img
          className="lup"src={t4}alt="Fil" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
            </div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t1}alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t2}alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t3 }alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t4}alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t1}alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t2}alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t3 }alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>
    <div class="sem1">
    <div className='sem2'>
      <img
          className="lup"src={t4}alt="Fi" 
        />
      </div>
            {/* <div className='lupp'></div> */}
            <div className='lup1'>
                <div className='l1'>
            <h3 className="luph">Full Name</h3>
                </div>
                <div className='l2'>
            <h6 className="luphh">Designation</h6>
                </div>
                <div className='luphhh'>
                <div className="pr1">
                     <Link className='pro1'><FaFacebookF /></Link>
               </div>
               <div className="pr2">
                     <Link className='pro2'><LiaLinkedinIn /></Link>
               </div>
               <div className="pr3">
                     <Link className='pro3'><BsTwitter /></Link>
               </div>
                </div>
            </div>
    </div>

</OwlCarousel>
  {/* {Galler} */}
      {/* <Galler/> */}
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


  {/* {Contact} */}
      {/* <Contact/> */}
      <div className="ninethsection">
     <div className="nineth">
        <div className="leno">
        <h1 class="her"><span class="text">i</span>CREAM</h1>
        </div>
        <div className="lenoone">
            <div className="praku">
            <Link className='pra'><BsTwitter />
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
export default Home;