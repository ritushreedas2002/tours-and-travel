import "./FooterStyles.css"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h2>Tours and Travel</h2>
                    <p>"The journey of a thousand miles begins with a single step.”</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
                
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/about">ChangeLog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Version</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/service">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/Contact">Contact Us</a>
            
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms Of Service</a>
                    <a href="/Contact">License</a>
            
                </div>
            </div>
        </div>
    );
}
export default Footer;