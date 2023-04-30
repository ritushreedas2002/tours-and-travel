import "./Herostyles.css";
import "../assets/houses-4093227_1920.jpg";
function Hero(props){
    return(
    <>
    <div className={props.cName}> 
        <img className="image"alt="Herpimg" src={props.heroImg}/>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    </>
    )
}
export default Hero;