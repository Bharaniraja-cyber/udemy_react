import ad_img from '../assets/images/card_files/ai-career@1x.webp'


function Ad(){
    return(
        <div className="ad">
            <div className="ad_sec">
                <h1>Reimagine Your Career in the AI era</h1>
                <p>Future -proof your skills with Personal Plan.<br></br>Get access to a variety content from real-worls experts.</p>
                <br></br>
                <div className="ad_p1">
                    <p><i class="fa-solid fa-star-of-life" style={{color:'#FFD43B'}} ></i> Learn AI and more</p>
                    <p><i class="fa-solid fa-trophy" style={{color:'#19ae61'}}></i> Prep for a Certification</p>
                    <p><i class="fa-regular fa-message" style={{color:'#FFD43B'}}></i> Practice with AI coaching</p>
                    <p><i class="fa-solid fa-lightbulb" style={{color:'#19ae61'}}></i> Advance your Career</p>
                </div>
                <br></br>
        {/* <button style="color:black; width: 200px; height: 50px;border-radius: 10px;">Learn more</button> */}
        <button style={{color:'black', width:'200px',height:'50px',borderRadius:'10px',border:'none'}}>Learn More</button>
        <p>Starting at ₹500/month</p>
    </div>
 
        <div class="ad_img">
            <img src={ad_img} alt=""></img>
        </div>
 <br></br>
</div>
    )

}

export default Ad