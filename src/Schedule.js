import Fade from 'react-reveal/Fade';

function Schedule() {
  return (
    <div className="schedule" id="schedule-anchor">
      <Fade left>
        <h2 className="text-light schedule-heading">Schedule</h2>
      </Fade>
        <iframe width="100%" height="500px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTsvltLK0UvXbIPkIB0AuuzIiXsVEQDKrGmyjn5DsZJ3bl7b68DdPeQfl7ihJyeb5QrS2hiwcNmvo-q/pubhtml?gid=318054788&amp;single=true&amp;widget=false&amp;headers=false&amp;range=A1:E11"></iframe>
    </div>
  )
}

export default Schedule;
