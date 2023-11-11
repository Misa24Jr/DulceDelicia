import './css/forgotPassword.css'
import { Link } from 'react-router-dom'
import {MdPassword} from 'react-icons/md'

const SecretAnswer = () =>{
    return(
        <div className="forgot-content">
            <form action="post" className="formm">
                <img className="avatar" src="/src/components/image/ICON-perfil.png" alt="" />
                <div className="input-div two focus">
                    <div className="i">
                        <i className='fas fa-user'><MdPassword/></i>
                    </div>
                    <div>
                        <h5>Secret Answer</h5>
                        <input type="text" className="input" />
                    </div>
                </div>
                <Link to='/key'>
                <input type="submit" className="btn" value={"Continue"} />
                </Link>
            </form>
        </div>
    )
}

export default SecretAnswer