import ad1 from '../assets/images/card_files/6112535_7103.jpg'
import ad2 from '../assets/images/card_files/6791359_66d8_2.jpg'
import ad3 from '../assets/images/card_files/6814079_b2f0_4.jpg'

function Course_list(){
    return(
        <div className="recommend">
            <div className="recomment_2">
                <img src={ad1} alt=""></img>
                <p>The AI Engineer Course 2025: Complete AI<br></br> Engineer Bootcamp</p>
                <h6>365 Careers</h6>
                <br></br><br></br>
                <div class="small_recomment">
                    <p id="recommend_p">Bestseller</p>
                    <p><i class="fa-solid fa-star" style={{color: '#FFD43B'}}></i> 4.6</p>
                    <p>11,444 ratings</p>
                </div>
                <br></br>
                <h4><i class="fa-solid fa-indian-rupee-sign" style={{color: '#13294e'}}></i>3,009 &emsp;</h4>
            </div>
            <div class="recomment_2">
                <img src={ad2}></img>
                    <p>Intro to AI Agents and Agentic AI</p>
                    <h6>365 Careers</h6>
                    <br></br><br></br>
                        <div class="small_recomment">
                            <p id="recommend_p">Bestseller</p>
                                <p><i class="fa-solid fa-star" style={{color: '#FFD43B'}}></i> 4.4</p>
                            <p>1,372 ratings</p>
                        </div>
                        <br></br>
                        <h4><i class="fa-solid fa-indian-rupee-sign" style={{color: '#13294e'}}></i>1,709 &emsp;</h4>
                    </div>
                        <div class="recomment_2">
                            <img src={ad3}></img>
                            <p>The Comnplete Guide To AI Powered <br></br>Salesforce Development</p>
                            <h6>Matt Gerry</h6>
                            <br></br><br></br>
                            <div class="small_recomment">
                                <p id="recommend_p">Bestseller</p>
                                <p><i class="fa-solid fa-star" style={{color: '#FFD43B'}}></i> 4.8</p>
                                <p>80 ratings</p>
                            </div>
                            <br></br>
                            <h4><i class="fa-solid fa-indian-rupee-sign" style={{ color: ' #13294e' }}></i>1,769 &emsp;</h4>
                        </div>

                    </div>
                    )
                    }

export default Course_list