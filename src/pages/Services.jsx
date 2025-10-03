import { useEffect } from 'react'
import './Services.css'

function Services() {
  useEffect(() => {
    // Load Twitter widget script
    const twitterScript = document.createElement('script')
    twitterScript.src = 'https://platform.twitter.com/widgets.js'
    twitterScript.async = true
    document.body.appendChild(twitterScript)

    // Load Instagram embed script
    const instagramScript = document.createElement('script')
    instagramScript.src = 'https://www.instagram.com/embed.js'
    instagramScript.async = true
    document.body.appendChild(instagramScript)

    return () => {
      document.body.removeChild(twitterScript)
      document.body.removeChild(instagramScript)
    }
  }, [])

  return (
    <div className="services">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for your business needs</p>
      </section>

      <section className="services-content">
        <div className="services-grid">
          <div className="service-card">
            <h3>3D Visualization</h3>
            <p>Create stunning 3D experiences with Spline integration</p>
            <ul>
              <li>Interactive 3D models</li>
              <li>Product visualization</li>
              <li>Immersive experiences</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Web Development</h3>
            <p>Modern, responsive websites built with React</p>
            <ul>
              <li>Single Page Applications</li>
              <li>E-commerce solutions</li>
              <li>Custom web apps</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Social Integration</h3>
            <p>Connect your brand with social media</p>
            <ul>
              <li>Social media embeds</li>
              <li>Content aggregation</li>
              <li>Brand engagement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="social-feed">
        <h2>Follow Us on Social Media</h2>
        <div className="social-embeds">
          <div className="social-embed-item">
            <h3>Twitter</h3>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Just setting up my twttr
              </p>
              &mdash; jack (@jack) 
              <a href="https://twitter.com/jack/status/20?ref_src=twsrc%5Etfw">March 21, 2006</a>
            </blockquote>
          </div>

          <div className="social-embed-item">
            <h3>Instagram</h3>
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/p/CwkxyqHvQet/"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: 'calc(100% - 2px)'
              }}
            >
              <div style={{ padding: '16px' }}>
                <a 
                  href="https://www.instagram.com/p/CwkxyqHvQet/"
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this post on Instagram
                </a>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
