import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer" id="footer">
               <div className="footer-text">
                   Made with 💖
               </div>
               <div className="footer-icons">
                   <div>
                     <a href="/"><i class="fab fa-github fa-lg"></i></a>
                   </div>
                   <div>
                   <a href="/"><i class="fas fa-globe fa-lg"></i></a>
                   </div>
                   <div>
                   <a href="/"><i class="fas fa-envelope fa-lg"></i></a>
                   </div>
               </div>
        </div>
    )
}

export default Footer
