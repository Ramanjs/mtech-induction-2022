import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Person from './Person';

function Speakers() {
  return (
    <div className="speakers-section" id="speakers-anchor">
      <Slide left>
        <h2 className="text-light speaker-heading">Speakers</h2>
      </Slide>
      <Person intro={"Some random text"}/>
    </div>
  )
}

export default Speakers;
