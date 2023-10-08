//import react router
import { Link } from 'react-router-dom';

//import styles
import './Demo.css'

const Demo = () =>{
    return(
        <div className='Demo'>
            <div className='demo-block' id='demo-block1'>
                <div className='demo-block-content'>
                    <h1>Demo 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque varius gravida. Morbi et tristique risus. Proin in elit nibh. Integer interdum, velit ac consectetur pulvinar, libero ipsum pellentesque justo, aliquet porttitor sapien orci placerat elit.</p>
                    <Link to="https://admirable-bienenstitch-bea43e.netlify.app/trajectory1_json" target='_blank'><input type="button" value="Play" /></Link>
                </div>
            </div>

            <div className='demo-block' id='demo-block2'>
                <div className='demo-block-content'>
                    <h1>Demo 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque varius gravida. Morbi et tristique risus. Proin in elit nibh. Integer interdum, velit ac consectetur pulvinar, libero ipsum pellentesque justo, aliquet porttitor sapien orci placerat elit.</p>
                    <Link to="https://admirable-bienenstitch-bea43e.netlify.app/trajectory2_json" target='_blank'><input type="button" value="Play" /></Link>
                </div>
            </div>

            <div className='demo-block' id='demo-block3'>
                <div className='demo-block-content'>
                    <h1>Demo 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque varius gravida. Morbi et tristique risus. Proin in elit nibh. Integer interdum, velit ac consectetur pulvinar, libero ipsum pellentesque justo, aliquet porttitor sapien orci placerat elit.</p>
                    <Link to="https://admirable-bienenstitch-bea43e.netlify.app/json_trajectory_reader_with_model_appendix" target='_blank'><input type="button" value="Play" /></Link>
                </div>
            </div>
        </div>
    );
}

export {Demo}