import './css/Login.css'
import { useEffect, useState } from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {MdPassword} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from './UseEfetch'


const Login = ({setUser}) =>{
    const[name, setName] = useState("")
    const[password, setPassword] = useState(" ")
    const navigate = useNavigate();

    const {data, loading, error, fetchData} = useFetch('https://bakery-project-dev-jcda.1.us-1.fl0.io/login')

    const handleClick = async (e) =>  {
        (e).preventDefault()
        await fetchData('post', {usuario: name, clave: password})

        console.log(data)
        if(data){
            console.log(data)
            setName(data)
            setPassword(data)
            console.log('Redirecting')
            navigate('/home')
        }
        
        
    }

    useEffect(() =>{
    },[data])


    return( <>
                <div className="container">
                <div className="img">
                    <img src="/src/components/image/ICON (2).png" alt="" />
                </div>
                <div className="login-content">
                    <form method='post' className='formm'>
                        <img className="avatar" src="/src/components/image/ICON-perfil.png" alt="" />
                        <h2>Welcome</h2>
                        <div className="input-div one focus">
                            <div className="i">
                                <i className='fas fa-user'><AiOutlineUser/></i>
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input type="text" className="input" onChange={e => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <i className='fas fa-user'><MdPassword/></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input type="password" className="input" onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <Link to='/forgot'>
                            <a className="ancla"href="#">Forgot Password?</a>
                        </Link>

                        <Link to='/home'>
                            <input type="submit" className="btn" onClick={handleClick} value={"Log In"} />
                        </Link>
                    </form>
                </div>
            </div>
            </>
        
    )
}

export default Login