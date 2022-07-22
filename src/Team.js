import Fade from 'react-reveal/Fade';
import TeamSection from './TeamSection';
import Professors from './Professors';
import Staff from './Staff';
import Students from './Students';

function Team() {
  return (
    <div className="team" id="team-anchor">
      <h2 className="text-light team-heading">Organising Team</h2>
      <TeamSection className="professors" heading="Faculty and Office of Student Affairs" members={Professors}/>
      <TeamSection className="staff" heading="Staff" members={Staff}/>
      <TeamSection className="students" heading="Students" members={Students}/>
    </div>
  )
}

export default Team;
