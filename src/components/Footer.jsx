import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} LoopHole InfoTech. Built with passion.</p>
          <div className="footer-socials">
            <a href="https://www.tiktok.com/@loophole.infotech" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://www.linkedin.com/company/loophole-infotech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/loophole.infotech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
