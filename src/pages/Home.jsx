import Spline from '@splinetool/react-spline'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Business</h1>
          <p>Experience innovation in 3D</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="spline-container">
          {/* Replace this URL with your actual Spline scene URL */}
          <Spline 
            scene="https://prod.spline.design/Dk8niESKiS0jm53f/scene.splinecode" 
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>
      
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🚀 Innovation</h3>
            <p>Cutting-edge solutions for modern businesses</p>
          </div>
          <div className="feature-card">
            <h3>💡 Creativity</h3>
            <p>Transform ideas into reality with 3D visualization</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Results</h3>
            <p>Proven track record of client success</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
