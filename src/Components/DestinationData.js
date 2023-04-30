import{ Component}from "react";
import "./DestinationStyles.css";



 
class DestinationData extends Component{

    render(){
        
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2 >{this.props.heading}</h2>
                    <p>{this.props.text} </p>

                </div>
                <div className="des-image">
                    <img alt="first" src={this.props.img1}/>
                    <img alt="sec" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}
export default DestinationData;