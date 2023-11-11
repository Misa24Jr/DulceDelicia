import { Link } from 'react-router-dom'

import './css/Principal.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
const Principal = () =>{
    return(
        <div className="contenedor">
            <div className="nav-var">
            <img className="logo" src="/src/components/image/icon.png" alt="" />
                <ul className='uli'>
                    <li className='lista'><a className="ala" href="#">Persona</a></li>
                    <li className='lista'><a className="ala" href="#">Profile</a></li>
                    <li className='lista'><a className="ala" href="#">Rute</a></li>
                    <li className='lista'><a className="ala" href="#">Debt</a></li>
                    <li className='lista'><a className="ala" href="#">Contact</a></li>
                    <li className='lista'><a className="ala" href="#">State</a></li>
                    <li className='lista'><a className="ala" href="#"></a></li>
                    
                </ul>
            </div>

            <div className='caja'>
                <p className='titulo'>
                        <span className="efe">D</span>
                        <span className="efe">U</span>
                        <span className="efe">L</span>
                        <span className="efe">C</span>
                        <span className="efe">E</span>
                        <span className="efe">-</span>
                        <span className="efe">D</span>
                        <span className="efe">E</span>
                        <span className="efe">L</span>
                        <span className="efe">I</span>
                        <span className="efe">C</span>
                        <span className="efe">I</span>
                        <span className="efe">A</span>
                </p>
            <div>
                <Link to='/register'>
                <button className='btn-1'><span className='color'></span>Register</button>
                </Link>
                <Link to='/login'>
                <button className='btn-1'><span className='color'></span>Log In</button>
                </Link>
            </div>
            </div>

        </div>
    )
}

export default Principal