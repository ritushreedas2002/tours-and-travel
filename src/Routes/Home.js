import Footer from "../Components/Footer";
import Caraousel from "../Components/Caraousel";
import Destination from "../Components/Destination";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";

function Home(){
    return(
    <>
    <Caraousel/>
    <Navbar/>
    <Destination/>
    <Trip/>
    <Footer/>
    </>
    )
}
export default Home;