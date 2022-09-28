import logoApp from '../assets/img/logo.jpeg'
import '../assets/styles/header.css'
function header() {
    return(
        <header>
            <div className="containerLogo">
                <div className="logo">
                    <img src={logoApp} alt="" />
                </div>
            </div>
            <div className="menu">
                <li>Home</li>
                <a href="#intro"><li>Introduccion</li></a>
                <a href="#top"><li>Top poderosos</li></a>
                <a href="https://www.instagram.com/alexlg.xx/"><li>contacto</li></a>
                
            </div>
        </header>
    )
}export default header