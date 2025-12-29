import logo_img from '../assets/images/card_files/logo-udemy-inverted.svg'

function Footer(){
    return(
        <>
        <div class="container">
        <div class="footer_2">
            About
                <p>About us</p>
                <p>Careers</p>
                <p>Contact us</p>
                <p>Blog</p>
                <p>Investors</p>
            
        </div>
        <div class="footer_2">
            Discover Udemy
            <p>Get the app</p>
            <p>Teach on Udemy</p>
            <p>Plans and Pricing</p>
            <p>Affiliate</p>
            <p>Help and Support</p>
        </div>
        <div class="footer_2">
            Udemy for Business
                <p>Udemy Business</p>
        </div>
        <div class="footer_2">
            Legal & Accessibility
            
                <p>Accessibility statement</p>
                <p>Privacy Policy</p>
                <p>Sitemap</p>
                <p>Terms</p>
            
        </div>
        
    </div>
    
    <div class="footer1">
        <div id="foot_img"><img src={logo_img}></img><p>&copy;2025 Udemy, Inc.</p></div>
         
         <p>Cookie settings</p>
         <p><i class="fa-solid fa-globe" style={{color: 'white'}}></i>English</p>
    </div>
        </>
    )
}

export default Footer

