import card1 from '../assets/images/card_files/nasdaq-light.svg'
import card2 from '../assets/images/card_files/result8.svg'
import card3 from '../assets/images/card_files/netapp-light.svg'
import card4 from '../assets/images/card_files/eventbrite-light.svg'




function Recommend2(){
    return(
        <>
        <br></br>

    <div class="logo_ad">
        <p id="p_logo" style={{color: 'white' ,fontSize: '20px'}}>Top companies choose Udemy Business to build in-demand career skills.</p>
        <p><img src={card1} alt="none"></img></p>
        <p><img src={card2} alt="none"></img></p>
        <p><img src={card3} alt="none"></img></p>
        <p><img src={card4} alt="none"></img></p>

    </div>    

    <p style={{backgroundColor: '#2a2b40' ,padding: '30px', color: 'white' ,fontSize: '22px'}}>Explore top skills and certifications</p>

    <div class="footer">
        
        <div class="footer_2">
            In-demand Careers
            
                <p>Data Scientist</p>
                <p>Full Stack Web Developer</p>
                <p>Cloud Engineer</p>
                <p>Project Manager</p>
                <p>Game Developer</p>
                <p>All Career Accelarators</p>
            
        </div>
       <div class="footer_2">
            Web Development
            <p>Web Development</p>
            <p>JavaScript</p>
            <p>React JS</p>
            <p>Angular</p>
            <p>Java</p>
                
            
        </div>
        <div class="footer_2">
            IT Certifications
            
               <p>Amazon AWS</p>
               <p>AWS Certified Cloud Pratitioner</p>
               <p>AZ-900: Microsoft Azure Fundamentals</p>
               <p>AWS Certified Solutions Architect-Associate</p>
               <p>kubernetes</p>
               
            
        </div>
        <div class="footer_2">
            Leadership
            
                <p>Leadership</p>
                <p>Management Skills</p>
                <p>Project Management</p>
                <p>Personal Productivity</p>
                <p>Emotional Intelligence</p>
            
        </div>
        
        <div class="footer_2">
            Certications by Skill
            <p>Cybersecurity Certifications</p>
            <p>Project Management Certification</p>
            <p>Cloud Certification</p>
            <p>Data Analytics Certification</p>
            <p>HR Management Certification</p>
            <p>See all Certification</p>
            
        </div>
        <div class="footer_2">
            Data Science
            <p>Data Science</p>
            <p>Python</p>
            <p>Machine Learning</p>
            <p>ChatGPT</p>
            <p>Deep Learning</p>
            
        </div>
        <div class="footer_2">
            Communication
            <p>Communication Skills</p>
            <p>Presenting Skills</p>
            <p>Public Speaking</p>
            <p>Writing</p>
            <p>PowerPoint</p>
            
        </div>
        <div class="footer_2">
            Business Analyticsc & Intelligence
            <p>Microsoft Excel</p>
            <p>SQL</p>
            <p>Microsoft Power BI</p>
            <p>Data Analytics</p>
            <p>Business Analytics</p>
            
        </div>
    </div>
    </>
    )
}

export default Recommend2