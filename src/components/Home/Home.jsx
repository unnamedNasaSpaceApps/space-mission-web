//import react router
import { Link } from 'react-router-dom';

//import styles
import './Home.css'

const Home = () =>{
    return(
        <div className='home'>
            <div className='homeBlock'>
                <h1>Unnamed.<sup id='HomeSup'>Team</sup> Mission Visualizer</h1>
                <Link to="/demo"><input type="button" value="Try it now" /></Link>
            </div>
        </div>
    );
}

export {Home}