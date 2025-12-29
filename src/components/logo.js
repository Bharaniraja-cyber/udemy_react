import logo1 from '../assets/images/card_files/result1.svg'
import logo2 from '../assets/images/card_files/result2.svg'
import logo3 from '../assets/images/card_files/result.svg'
import logo4 from '../assets/images/card_files/result3.svg'
import logo5 from '../assets/images/card_files/result4.svg'
import logo6 from '../assets/images/card_files/result5.svg'
import logo7 from '../assets/images/card_files/result6.svg'
import logo8 from '../assets/images/card_files/result7.svg'



function Logo(){
    return(
        <div class="logo_card">
        <p>Trusted by over 17,000 companies and millions of learners around the world</p>
        <div class="logo_card1">
            <img src={logo1} alt='logo1'></img>
            <img src={logo2} alt='logo2'></img>
            <img src={logo3} alt='logo3'></img>
            <img src={logo4} alt='logo4'></img>
            <img src={logo5} alt='logo5'></img>
            <img src={logo6} alt='logo6'></img>
            <img src={logo7} alt='logo7'></img>
            <img src={logo8} alt='logo8'></img>

            
        </div>
        
        </div>

    )
}

export default Logo