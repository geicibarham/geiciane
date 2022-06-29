import react from "react";
import Git from "../../assets/images/icons/github.png"
import Gmail from "../../assets/images/gmail.png"
import Linkedin from "../../assets/images/in.circle.png"
import css from './footer.css'
function Footer () {
return (
    <footer>
        <section id="contact">
            <div className="contact">
                <h6>Contact Me!</h6>
            </div>
            <div className="contact-img">
                <a href="https://github.com/geicibarham">
                    <img className="github" src={Git} alt="/" /> </a>

                <a href="mailto:geicianecosta43@gmail.com">
                    <img className="github" src={Gmail} alt="/" />
                </a>
                <a href="https://www.linkedin.com/in/geiciane-barham-43b4aa201/">
                    <img className="github" src={Linkedin} alt="/" />
                </a>
            </div>
            <div className="name">
                <h4> Geiciane Barham</h4>  <br />
                <p>Made by Geiciane Barham © 2022</p>
            </div>
   
    </section>
    </footer>
)
}

export default Footer;