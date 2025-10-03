import './About.css'

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our journey and mission</p>
      </section>
      
      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We are a forward-thinking company dedicated to bringing innovative 
            solutions to businesses worldwide. Our passion for technology and 
            design drives us to create exceptional digital experiences.
          </p>
          <p>
            Founded with a vision to transform how businesses interact with 
            their customers through cutting-edge 3D visualization and interactive 
            web experiences, we have grown to become a trusted partner for 
            companies seeking to elevate their digital presence.
          </p>
        </div>
        
        <div className="about-stats">
          <div className="stat">
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
