import image1 from '../assets/images/image_card4.jpg'
import image2 from '../assets/images/image_card3.jpg'
import image3 from '../assets/images/image_card2.jpg'
import image4 from '../assets/images/image_card1.jpg'


function Recommend(){
    return(
        <>
        <br></br>
        <h1>Trending coureses</h1>
        <div class="recommend">
            
    
        <div class="recomment_1">
            <img src={image1}></img>
            <p>100 Days of Code: The Complete <br></br>Python Pro Bootcamp</p>
            <h6>Dr. Angela Yu, Developer and Lead...</h6>
            <br></br>
            <div class="small_recomment">
                <p id="recommend_p">Bestseller</p>
                <p><i class="fa-solid fa-star" style={{color: '#FFD43B'}}></i> 4.5</p>
                <p>399,317 ratings</p>
            </div>
            <br></br>
            <h4><i class="fa-solid fa-indian-rupee-sign" style={{color: '#13294e'}}></i>519 &emsp;<del>₹3109</del></h4>
        </div>

        <div class="recomment_1">
            <img src={image2}></img>
            <p>AI Engineer Agentic Track: The Complete<br></br> Agent & MCP Course</p>
            <h6>Ed Donner, Ligency</h6>
            <br></br>
            <div class="small_recomment">
                <p id="recommend_p">Bestseller</p>
                <p><i class="fa-solid fa-star" style={{color: '#FFD43B'}}></i> 4.7</p>
                <p>20,539 ratings</p>
            </div>
            <br></br>
            <h4><i class="fa-solid fa-indian-rupee-sign" style={{color: '#13294e'}}></i>519 &emsp;<del>₹799</del></h4>
        </div>

        <div class="recomment_1">
            <img src={image3}></img>
            <p>The Complete Full-Stack <br></br>Web Development Bootcamp</p>
            <h6>Dr. Angela Yu, Developer and Lead...</h6>
            <br></br>
            <div class="small_recomment">
                <p id="recommend_p">Bestseller</p>
                <p><i class="fa-solid fa-star" style={{color: '#FFD43B'}}></i> 4.7</p>
                <p>457,004 ratings</p>
            </div>
            <br></br>
            <h4><i class="fa-solid fa-indian-rupee-sign" style={{color: '#13294e'}}></i>519 &emsp;<del>₹3109</del></h4>
        </div>

        <div class="recomment_1">
            <img src={image4}></img>
            <p>Ultimate AWS Certified Solutions <br></br>Architect Associate 2025</p>
            <h6>Stephane Maarek | AWS Certified Cloud...</h6>
            <br></br>
            <div class="small_recomment">
                <p id="recommend_p">Bestseller</p>
                <p><i class="fa-solid fa-star" style={{color: '#FFD43B'}}></i> 4.7</p>
                <p>273,317 ratings</p>
            </div>
            <br></br>
            <h4><i class="fa-solid fa-indian-rupee-sign" style={{color: '#13294e'}}></i>519 &emsp;<del>₹3379</del></h4>
        </div>
        
    </div>
    </>
    )
}

export default Recommend