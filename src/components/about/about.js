
import css from './about.css'
import tech from '../../assets/images/tech.jpg'
import check from '../../assets/images/check.png'
import Typewriter from 'typewriter-effect';
const About = () => {

    const technologies = [
        {
            text: " React, Handlebars.",
            id: '1'

        },
        {
            text: "HTML5, Javascript, CSS,Sass, Bootstrap.",
            id: '2'

        },
        {
            text: " GraphQL,SQL,MySQL,Sequelize, MongoDB, Rest APIs.",
            id: '3'

        },
        {
            text: " Express, Node.js.",
            id: '4'

        }
    ]
    return (
        <>
            <h2 style={{
                backgroundColor:
                    "#fbdce1",
                color: "#e83983",
                textAlign: "center",
                marginTop: "13pxc"
            }}>About</h2>
            <section id='container'>

                < img
                    id="tech"
                    src={tech} alt="" />

                <p style={{

                    color: "#2f286c",
                    width: "60%", alignSelf: "center"
                }}>
                    <span style={{ fontWeight: "bold", textAlign: "center" }}>
                        <Typewriter

                            options={{

                                autoStart: true,
                                loop: false,

                                fontWeight: "bold",
                                animateCursor: true,
                                blinkSpeed: 50,
                                cursorClassName: 'cursor'

                            }}

                            onInit={(typewriter) => {
                                typewriter.typeString("Hi! I'm Geici!")
                                    .callFunction(() => {

                                        console.log('String typed out!');

                                    })
                                    .start();
                            }} /></span>

                    < br />
                    < br />
                    Detail-oriented and analytical Full Stack Web Developer that stops at nothing to solve a problem.Values self-learning, persistence, and drivenness. My previous experience as an English teacher taught me problem-solving, time management, communication, and teamwork skills. <br />
                    <br />

                    Some of the Technologies I have used are:
                    <ul id="technology-list">

                        {
                            technologies.map(technology => (

                                <li key={technology.id}
                                style={{color: "rgb(47, 40, 108)"}}>
                                    <img id="check"
                                        src={check} alt="" />
                                    {technology.text} </li>

                            ))}

                    </ul>
                </p>
            </section>
        </>
    )
}
export default About;