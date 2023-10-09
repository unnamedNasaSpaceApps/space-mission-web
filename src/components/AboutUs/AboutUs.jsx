//import react router
import { Link } from 'react-router-dom';

//import styles
import './AboutUs.css'

//import Img
import Astronaut from './img/astronaut.jpg'

const AboutUs = () =>{
    return(
        <div className="AboutUs">

            <div className="block">
                <div className="textBlock">
                    <h1>Who we are</h1>
                    <p>We are "Unnamed.", a group of young people passionate about science and technology applied to space research, we are excited to contribute to scientific advancement through our skills and dedication.</p>
                </div>
                <div className='imgBlock'><img id='block1' src={Astronaut} alt="Astronaut Img" /></div>
            </div>

            <div className="block" id='block2'>
                <div className="textBlock">
                    <h1>Our challenge</h1>
                    <p>"Your challenge is to create an interactive, virtual reality application within a web browser that enables users to visualize a space mission including the mission concept, orbital trajectories, and mission timeline. Don’t forget to embed your space mission visualization app in a web page and deploy that web page on a free web hosting service so that your solution is available to all."</p>
                    <Link to="https://www.spaceappschallenge.org/2023/challenges/visualize-a-space-mission-using-virtual-reality/" target='_blank'><input id='ourChallengeButton' type="button" value="Learn more" /></Link>
                </div>
            </div>
        </div>
    );
}

export {AboutUs};