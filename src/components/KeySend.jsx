import './css/keySend.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
const KeySend = () =>{
    return(
        <div className="contenedor-2">
            <div className="success-2">
                <i className='icon-2'><BsFillBookmarkCheckFill/></i>
                <p className="texto-2"><b>The key was sent to the Email</b></p>
            </div>
        </div>
    )
}

export default KeySend