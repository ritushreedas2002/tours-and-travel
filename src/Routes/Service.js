import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";

function Service(){
    return(
    <>
    <Navbar/>
    <Hero cName="hero-mid" 
    heroImg="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_960_720.jpg"
    title="Service"/>
    <Trip/>
    <Footer/>
    </>
    )
}
export default Service;