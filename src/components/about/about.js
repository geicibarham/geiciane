
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
                    I am a Full Stack Web Developer in
                    the Triangle Area (Raleigh - NC) with a Bachelor’s Degree
                    and 2+ years of professional experience in teaching English as
                    a second language. I am a great communicator who works well on
                    a team, a curious person who loves learning new things,
                    a hard worker who keeps working until the job is done, and
                    someone who loves traveling and experiencing different cultures. <br />
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