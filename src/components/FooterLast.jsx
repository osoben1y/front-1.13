import "../styles/FooterLast.css"
import ai__bot from '../assets/ai__bot.svg'

const FooterLast = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-company">
            <div className="company-logo">
              <img src={ai__bot} alt="AI Robot" className="robot-icon" />
            </div>
            <h3 className="company-name">Artificial Intelligence</h3>
            <p className="company-description">
              Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
              previewing layouts and visual mockups.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <span>Company@gmail.com.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>Phone: (064) 332-1233</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>450 Wall Street, USA, New York</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">INFORMATION</h4>
            <ul className="footer-links">
              <li>
                <a href="#new-collection">New Collection</a>
              </li>
              <li>
                <a href="#about-store">About Store</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
              <li>
                <a href="#latest-news">Latest News</a>
              </li>
              <li>
                <a href="#our-sitemap">Our Sitemap</a>
              </li>
              <li>
                <a href="#orders-history">Orders History</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">FOOTER MENU</h4>
            <ul className="footer-links">
              <li>
                <a href="#instagram-profile">Instagram profile</a>
              </li>
              <li>
                <a href="#new-collection">New Collection</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
              <li>
                <a href="#latest-news">Latest News</a>
              </li>
              <li>
                <a href="#terms-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="#purchase-theme">Purchase Theme</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">USEFUL LINKS</h4>
            <ul className="footer-links">
              <li>
                <a href="#instagram-profile">Instagram profile</a>
              </li>
              <li>
                <a href="#new-collection">New Collection</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
              <li>
                <a href="#latest-news">Latest News</a>
              </li>
              <li>
                <a href="#terms-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="#purchase-theme">Purchase Theme</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">ABOUT THE STORE</h4>
            <p className="store-description">
              Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
              previewing layouts and visual mockups.
            </p>

            <div className="website-url">
              <strong>www.company.com</strong>
            </div>

            <div className="social-links">
              <a href="#facebook" className="social-link">
                f
              </a>
              <a href="#instagram" className="social-link">
                📷
              </a>
              <a href="#twitter" className="social-link">
                🐦
              </a>
              <a href="#linkedin" className="social-link">
                in
              </a>
              <a href="#youtube" className="social-link">
                ▶
              </a>
            </div>

            <div className="language-selector">
              <select className="language-dropdown">
                <option value="en">🌐 English</option>
                <option value="es">🌐 Spanish</option>
                <option value="fr">🌐 French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterLast
