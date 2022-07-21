import Fade from 'react-reveal/Fade';

function Person(props) {
  return (
    <div className="speaker">
      <Fade left>
        <div className="img-box"></div>
      </Fade>
      <Fade right>
        <div className="speaker-text">{props.intro}</div>
      </Fade>
    </div>
  )
}

export default Person;
