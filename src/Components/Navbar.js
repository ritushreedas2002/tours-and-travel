import { Component } from "react";
import "./NavbarStyles.css";
import{MenuItems} from "./MenuItems" ;
import { Link} from "react-router-dom";
class Navbar extends Component{
    state={clicked:false};
    handleclick=()=>{
        this.setState({clicked:!this.state.clicked});
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Tours and Travel</h1>
                <div className="menu-icons" onClick={this.handleclick}>
                    <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                    {MenuItems.map((items,index)=>{
                        return(
                            <li key={index}>
                            <Link className={items.cName} to={items.url}><i class={items.icon}></i>{items.title}</Link>
                            </li>
                        )
                    
                    
                    })}
                    
                </ul>
            </nav>
        );
    }
}
export default Navbar;