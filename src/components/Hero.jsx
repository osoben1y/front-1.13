import "../styles/Hero.css"
import logo from '../assets/asd.png'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__left">
                        <div className="hero__subtitle">NEXT GENERATION PLATFORM</div>
                        <h1 className="hero__title">
                            Artificial intelligence
                            <br />& Syber security
                        </h1>
                        <p className="hero__description">
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                            previewing layouts and visual mockups.
                        </p>
                        <div className="hero__buttons">
                            <button className="btn btn--primary">Get Started</button>
                            <button className="btn btn--secondary">
                                <span className="btn__icon">▶</span>
                                Watch Video
                            </button>
                        </div>
                    </div>

                    <div className="hero__right">
                        <div className="hero__illustration">
                            <img src={logo} alt="AI Illustration" className="illustration-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
