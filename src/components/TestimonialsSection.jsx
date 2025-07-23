import "../styles/TestimonialsSection.css"
import people from '../assets/people.png'

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-content">
                    <div className="testimonials-text">
                        <h2 className="testimonials-title">
                            What our clients say about
                            <br />
                            our awesome solutions
                        </h2>

                        <div className="testimonials-paragraphs">
                            <p className="testimonial-paragraph">
                                To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain
                                some advantage from it who do not know.
                            </p>

                            <p className="testimonial-paragraph">
                                Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing.
                            </p>

                            <p className="testimonial-paragraph">Lorem Ipsum is placeholder previewing layouts and visual mockups.</p>

                            <p className="testimonial-paragraph">
                                Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                                previewing layouts and visual mockups.
                            </p>
                        </div>
                    </div>

                    <div className="testimonials-illustration">
                        <img
                            src={people}
                            alt="Data Analytics Dashboard Illustration"
                            className="dashboard-illustration"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
