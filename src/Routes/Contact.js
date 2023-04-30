import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";

function Contact(){
    return(
    <>
    <Navbar/>
    <Hero cName="hero-mid" 
    heroImg="https://cdn.pixabay.com/photo/2017/08/29/12/07/adult-2693054_960_720.jpg"
    title="Contact"
    />
    <ContactForm/>
    <Footer/>
    </>
    )
}
export default Contact;