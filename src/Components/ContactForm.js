import Button from "./Button";
import "./ContactFormStyles.css";
const ContactForm=()=>{
    return(
        <div className="contact">
            <div className="form-container">
                <h1>Send A Message To Us</h1>
                <form>
                    <input value="Name" placeholder="Name"></input>
                    <input placeholder="Email"/>
                    <input placeholder="Subject"/>
                    <textarea placeholder="Message" rows="4"></textarea>
                    <Button/>
                </form>
            </div>

        </div>
    )
}
export default ContactForm;