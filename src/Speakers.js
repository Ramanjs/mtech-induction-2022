import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Speakers() {
  return (
    <div className="speakers-section">
      <Slide left>
        <h2 className="text-light speaker-heading">Speakers</h2>
      </Slide>
      <div className="speaker">
        <Fade left>
          <div className="img-box"></div>
        </Fade>
        <Fade right>
          <div className="speaker-text">Ut nunc erat, sollicitudin quis commodo vel, faucibus ut ipsum. Nunc tempor nisl volutpat scelerisque commodo. Cras quis est nulla. Suspendisse consectetur lorem eu lacinia posuere. Nulla dapibus ut tortor sit amet aliquam. Nunc vitae pretium libero, quis lobortis quam. Praesent pellentesque nulla in urna consequat, quis dictum magna interdum. Phasellus nec blandit elit. Aenean id mi id ex semper gravida at ac urna. Curabitur pretium metus ex, a eleifend neque elementum lobortis. Praesent blandit, elit vitae accumsan lobortis, mauris dolor euismod purus, at feugiat erat mi vitae ipsum. </div>
        </Fade>
      </div>
    </div>
  )
}

export default Speakers;
