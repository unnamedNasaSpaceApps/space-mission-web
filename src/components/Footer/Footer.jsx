//import styles
import './Footer.css';

//import img
import Uruguay from './img/uruguay.png'

const Footer = () =>{
    return(
        <footer>
            <div className='footerBlock'>
                <p>Developed by Unnamed.<sup>Team</sup> in Uruguay for Space Apps Challenge 2023</p>
                <img src={Uruguay} alt="Uruguay flag"/>
            </div>
        </footer>
    );
}

export {Footer};