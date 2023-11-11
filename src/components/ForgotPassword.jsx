import './css/forgotPassword.css'
import { Link } from 'react-router-dom'
import {AiOutlineMail} from 'react-icons/ai'

const ForgotPassword = () =>{


    
    return(
        <div className="forgot-content">
            <form action="post" className="formm">
                <img className="avatar" src="/src/components/image/ICON-perfil.png" alt="" />
                <div className="input-div two focus">
                    <div className="i">
                        <i className='fas fa-user'><AiOutlineMail/></i>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="text" className="input" />
                    </div>
                </div>
                <Link to='/secret'>
                <input type="submit" className="btn" value={"Continue"} />
                </Link>
            </form>
        </div>
    )
}

export default ForgotPassword