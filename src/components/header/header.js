import geici from '../../assets/images/geici.png'
import css from './header.css'
import 'animate.css';
const Header = () => {
    return (
        <>
    
        <section id="hero">
            <div className="text">
                
            <h1 class="animate__animated animate__fadeInDown">
                Geiciane Barham</h1> < br /> 
            <h2 style={{fontWeight:"lighter"}}
            >Full Stack Web Developer</h2>
            </div>
            
            <img id="geici" src={geici} alt="geiciane barham" />
        </section>

        </>
    )
}

export default Header