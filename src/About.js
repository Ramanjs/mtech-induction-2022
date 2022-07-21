import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function About() {
  return (
    <div className="about" id="about-anchor">
      <Slide left>
        <div className="about-heading">
          <h3 className="text-dark about-h3">Welcome to</h3>
          <h2 className="text-light about-h2">IIIT Delhi</h2>
        </div>
      </Slide>
      <div className="about-content">
        <Fade left>
          <div className="about-description">
            <p>Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) was created by an act of Delhi legislature empowering it to carry out R&D, conduct educational programs, and grant degrees. The General Council is the apex body of the Institute, chaired by Hon'ble Lt. Governor of Delhi and the Board of Governors is the policy and decision-making body of the Institute. The Senate is empowered to take all academic decisions.</p>

            <p>IIIT-Delhi is accelerating on the path of becoming one of the leading comprehensive research-led teaching institutes in India and has proven to be consistently responsive towards the evolving needs of society. The faculty members at IIIT-Delhi are among the finest in the country and are internationally recognized. Carrying out cutting-edge research is in the institutional DNA of IIIT-Delhi.</p>
          </div>
        </Fade>
        <Fade right>
          <img src="iiitd-about.png" className="about-image"/>
        </Fade>
      </div>
    </div>
  )
}

export default About;
