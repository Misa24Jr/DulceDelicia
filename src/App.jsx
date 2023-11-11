import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login.jsx'
import Principal from './components/Principal.jsx'
import ForgotPassword from './components/ForgotPassword.jsx'
import SecretAnswer from './components/SecretAnswer.jsx'
import KeySend from './components/KeySend.jsx'
import Register from './components/Register.jsx'
import './components/css/index.css'
import Users from './components/Users.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'

const App = () =>{
    
    return(
        <>
        {/* Tablas de rutas disponibles <Routes></Routes> */}
            <Routes>
                {/* Ruta definida con su vista */}
                {/* PATH -> Es la ruta */}
                {/* ELEMENT -> Componente que va a renderizar con dicha ruta */}
                <Route path='/' element={<Principal/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/forgot' element={<ForgotPassword/>} />
                <Route path='/secret' element={<SecretAnswer/>} />
                <Route path='/key' element={<KeySend/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/profile' element={<Profile/>}></Route>
            </Routes>
        </>
    )
}

export default App