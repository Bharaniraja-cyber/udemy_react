import logo from '../assets/images/logo-udemy.svg'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar_s1">
                <img src={logo} alt='logo'></img>
            </div>
            <div class="nav1">
                <p>Explore</p>
            </div>
            <div className="navbar_s2">
                <i class="fa-solid fa-magnifying-glass" style={{color:'black'}} ></i>
                <input type="text" placeholder="Search for anything here"></input>
            </div>
            <div className="navbar_s3">
                <p>Plans&pricing</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div class="mylearning_popup">
                        <p>you did not purchase anything</p>
                    </div>
            </div>
            <i class="fa-solid fa-cart-shopping" style={{color:'black'}}></i>
            <button id="login"><h4>Log in</h4></button>
            <button id="signup"><h4>Sign up</h4></button>
            <button id="globe"><i class="fa-solid fa-globe" style={{color:'black'}}></i></button>
        </div>
        <div className="navbar_s4">
            <i class="fa-solid fa-list" style={{color:'black'}}></i>
        </div>
    </div>
    )
}

export default Navbar