import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Sale from "./components/sale";
import Ad from "./components/ad";
import Course from "./components/course";
import Course_list from "./components/cousrse_list";
import Logo from "./components/logo";
import Recommend from "./components/recommend";
import Recommend2 from "./components/recommend2";
import Footer from "./components/footer";
function App(){
  return(
    <>
    <Navbar></Navbar>
    <Menu></Menu>
    <Sale></Sale>
    <Ad></Ad>
    <Course></Course>
    <Course_list></Course_list>
    <Logo></Logo> 
    <Recommend></Recommend>
    <Recommend2></Recommend2>
    <Footer></Footer>
    </>
  )
}

export default App