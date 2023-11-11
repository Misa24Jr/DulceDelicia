import './css/register.css'
import { Link } from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {MdPassword} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'

const Register = () =>{
    return (
        <div className="register-content">
            <form action="post" className="formm">
                <img className="avatar" src="/src/components/image/ICON-perfil.png" alt="" />
                <h2>Welcome</h2>
                <div className="input-div one focus">
                    <div className="i">
                        <i className='fas fa-user'><AiOutlineUser/></i>
                    </div>
                    <div>
                        <h5>Username</h5>
                        <input type="text" className="input" />
                    </div>
                </div>
                <div className="input-div two focus">
                    <div className="i">
                        <i className='fas fa-user'><AiOutlineMail/></i>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="text" className="input" />
                    </div>
                </div>
                <div className="input-div two focus">
                    <div className="i">
                        <i className='fas fa-user'><MdPassword/></i>
                    </div>
                    <div>
                        <h5>Password</h5>
                        <input type="password" className="input" />
                    </div>
                </div>
                <div className="input-div two focus">
                    <div className="i">
                        <i className='fas fa-user'><MdPassword/></i>
                    </div>
                    <div>
                        <h5>Confirm Password</h5>
                        <input type="password" className="input" />
                    </div>
                </div>
                <Link to='/login'>
                <input type="submit" className="btn" value={"Register"} />
                </Link>
            </form>
        </div>
    )
}

export default Register