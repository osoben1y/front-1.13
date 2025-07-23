import "../styles/Header.css"
import robot from '../assets/robot.svg'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <div className="logo">
                            <div className="logo__icon">
                                <img src={robot} alt="" />
                            </div>
                            <span className="logo__text">Artificial Intelligence</span>
                        </div>
                    </div>

                    <nav className="header__nav">
                        <ul className="nav-list">
                            <li>
                                <a href="#" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__auth">
                        <button className="sign-in-btn">Sign In</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
