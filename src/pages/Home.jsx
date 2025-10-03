import Spline from '@splinetool/react-spline'
import './Home.css'
import ErrorBoundary from '../components/ErrorBoundary';

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
          <ErrorBoundary>
            <Spline 
              scene="https://prod.spline.design/uyt7L26SAtQtEnm0/scene.splinecode" 
              style={{ width: '100%', height: '100%' }}
            />
          </ErrorBoundary>
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
