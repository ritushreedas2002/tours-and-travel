import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

function About(){
    return(
    <>
    <Navbar/>
    <Hero cName="hero-mid" 
    heroImg="https://cdn.pixabay.com/photo/2015/03/31/11/39/snails-700868_960_720.jpg"
    title="ABOUT"/>
    <AboutUs/>
    <Footer/>
    </>
    )
}
export default About;