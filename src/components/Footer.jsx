import React from 'react'

// Simple inline SVG icons to avoid extra dependencies
const Icon = ({ title, children }) => (
  <svg
    className="size-5 md:size-6 text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-label={title}
  >
    {children}
  </svg>
)

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          © {year} Zinhle Mahlangu • All rights reserved
        </p>

        <div className="flex items-center justify-center">
          <p className="text-center md:text-start">Let’s connect</p>
        </div>

        <div className="socials">
          <a
            className="icon"
            href="https://www.linkedin.com/in/chickeeteetta-mahlangu-4037111b6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Icon title="LinkedIn">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.97h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V23h-4v-5.91c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z" />
            </Icon>
          </a>

          <a
            className="icon"
            href="https://github.com/chickeeteettaz-art"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Icon title="GitHub">
              <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.06.67-3.71-1.3-3.71-1.3-.5-1.28-1.21-1.62-1.21-1.62-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.56 1.2 3.18.92.1-.71.38-1.2.69-1.48-2.44-.28-5-1.22-5-5.45 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.41.11-2.94 0 0 .93-.3 3.05 1.13.88-.24 1.83-.36 2.78-.37.95.01 1.9.13 2.79.37 2.11-1.43 3.04-1.13 3.04-1.13.6 1.53.22 2.66.11 2.94.7.77 1.13 1.75 1.13 2.95 0 4.24-2.57 5.16-5.02 5.43.39.34.74 1.01.74 2.05 0 1.48-.01 2.68-.01 3.05 0 .29.2.64.76.53 4.35-1.45 7.5-5.57 7.5-10.43C23.02 5.24 18.27.5 12 .5z" clipRule="evenodd" />
            </Icon>
          </a>

          <a
            className="icon"
            href="https://web.facebook.com/chickitteetta.zinhle.9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <Icon title="Facebook">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.49v-9.294H9.691V11.01h3.124V8.41c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.796.143v3.243l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </Icon>
          </a>

          <a
            className="icon"
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <Icon title="WhatsApp">
              <path d="M20.52 3.48A11.92 11.92 0 0 0 12.03 0C5.44 0 .09 5.35.09 11.94c0 2.1.55 4.14 1.59 5.95L0 24l6.29-1.64a11.9 11.9 0 0 0 5.72 1.46h.01c6.58 0 11.93-5.35 11.93-11.94 0-3.19-1.24-6.19-3.43-8.4zM12.02 21.3h-.01a9.38 9.38 0 0 1-4.78-1.3l-.34-.2-3.73.97.99-3.64-.22-.37a9.28 9.28 0 0 1-1.41-4.86c0-5.16 4.2-9.36 9.37-9.36 2.51 0 4.87.98 6.65 2.76a9.3 9.3 0 0 1 2.74 6.62c0 5.16-4.2 9.38-9.36 9.38zm5.44-7.06c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.68.15-.2.3-.78.95-.95 1.15-.17.2-.35.22-.64.07-.3-.16-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.47.13-.62.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.5-.68-.5l-.58-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.26-.2-.56-.35z" />
            </Icon>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
