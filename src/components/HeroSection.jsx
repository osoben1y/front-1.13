import "../styles/HeroSection.css"
import brain from '../assets/techbrain.png'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-illustration">
                        <img
                            src={brain}
                            alt="AI Brain Technology Illustration"
                            className="brain-illustration"
                        />
                    </div>
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Apply AI, Deep Learning
                            <br />
                            and Data Science to solve
                        </h1>
                        <p className="hero-description">
                            Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                            previewing layouts and visual mockups.
                        </p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
