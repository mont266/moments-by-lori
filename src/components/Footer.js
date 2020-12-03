import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Moments by Lori. All rights reserved. Developed by{' '}
          <a href="https://talismanwebs.com">Talisman Webs</a>.
        </span>
      </div>
    </footer>
  </div>
)
