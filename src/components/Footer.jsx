import FooterLogo from "../components/FooterLogo";
import About from "../components/About";
import Copyright from "../components/Copyright";


function Footer() {
    return (
        <div className="container">
            <div className="footer-content">
                <FooterLogo/>
                <About/>
                <Copyright/>
            </div>
        </div>
    );
  }
  
  export default Footer;