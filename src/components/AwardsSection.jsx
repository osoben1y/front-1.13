import "../styles/AwardsSection.css"
import svg1 from '../assets/1.svg'
import svg2 from '../assets/2.svg'
import svg3 from '../assets/3.svg'
import svg4 from '../assets/4.svg'
import svg5 from '../assets/5.svg'

const AwardsSection = () => {
    const awards = [
        {
            id: 1,
            icon: svg1,
            title: "Naxly as the Winners in Global Agency Awards",
            description:
                "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            id: 2,
            icon: svg2,
            title: "Expert Prespective Agency Awards",
            description:
                "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            id: 3,
            icon: svg3,
            title: "Business Prespective Global Agency Awards",
            description:
                "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            id: 4,
            icon: svg4,
            title: "Value for Results in Global Agency Awards",
            description:
                "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
        {
            id: 5,
            icon: svg5,
            title: "Global Experience in Agency Awards",
            description:
                "Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.",
        },
    ]

    return (
        <section className="awards-section">
            <div className="awards-container">
                <div className="awards-grid">
                    {awards.map((award) => (
                        <div key={award.id} className="award-card">
                            <div className="award-icon">
                                <img src={award.icon || "/placeholder.svg"} alt={award.title} />
                            </div>
                            <h3 className="award-title">{award.title}</h3>
                            <p className="award-description">{award.description}</p>
                        </div>
                    ))}
                </div>
                <div className="pagination-dots">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </section>
    )
}

export default AwardsSection
