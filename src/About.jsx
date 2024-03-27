import { GoDotFill } from "react-icons/go";
import { ImCheckmark } from "react-icons/im";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import t1 from './img/team-1.jpg'
import t2 from './img/team-2.jpg'
import t3 from './img/team-3.jpg'
import t4 from './img/team-4.jpg'
import {Link} from "react-router-dom"
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
function About(){
    return(
         <div className="se">

          <div className="gf"><h1>About</h1>
            <p>Home <i><GoDotFill /></i> About</p>
          </div>
           
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
export default About;