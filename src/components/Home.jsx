import {BiCake} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsFillGridFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {ImProfile} from 'react-icons/im'
import {MdOutlineStreetview} from 'react-icons/md'
import {TbPigMoney} from 'react-icons/tb'
import {MdOutlinePayments} from 'react-icons/md'
import {SiMobxstatetree} from 'react-icons/si'
import {BiLogIn} from 'react-icons/bi'
import {FaAngleLeft} from 'react-icons/fa'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'

const Home = () =>{

    useEffect(() => {
        const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");
        toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
        })
        searchBtn.addEventListener("click" , () =>{
        sidebar.classList.remove("close");
        })
        modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";

        }
});
    }, [])
    return(
    <>
    <nav className="sidebar close">
        <header>
            <div className="image-text">
                <span className="image">
                    <img src="/src/components/image/icon.png" alt=""/>
                </span>

                <div className="text logo-text">
                    <span className="name">Dulce Delicia</span>
                    <span className="profession">Web developer</span>
                </div>
            </div>

            <i className='bx bx-chevron-right toggle'><FaAngleLeft/></i>
        </header>

        <div className="menu-bar">
            <div className="menu">

                <li className="search-box">
                    <i className='bx bx-search icon'><BiSearchAlt/></i>
                    <input type="text" placeholder="Search..."/>
                </li>

                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="#">
                            <Link to='/users'>
                            <i className='bx bx-home-alt icon'><AiOutlineUser/></i>
                            <span className="text nav-text">User</span>
                            </Link>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <Link to='/profile'>
                            <i className='bx bx-bar-chart-alt-2 icon'><ImProfile/></i>
                            <span className="text nav-text">Profile</span>
                            </Link>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bell icon'><MdOutlinePayments/></i>
                            <span className="text nav-text">Deuda</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-pie-chart-alt icon'><TbPigMoney/></i>
                            <span className="text nav-text">Pay</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-heart icon'><SiMobxstatetree/></i>
                            <span className="text nav-text">State</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-wallet icon'><MdOutlineStreetview/></i>
                            <span className="text nav-text">Route</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <a href="#">
                        <i className='bx bx-log-out icon' ><BiLogIn/></i>
                        <span className="text nav-text">Logout</span>
                    </a>
                </li>

                <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="mode-text text">Dark mode</span>

                    <div className="toggle-switch">
                        <span className="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>

    <section className="home">
        <div className="text">Home</div>
    </section>

        </>
    )
}

export default Home

