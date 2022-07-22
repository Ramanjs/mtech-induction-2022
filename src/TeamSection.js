import Member from './Member';

function TeamSection(props) {
  return (
    <div className="team-section">
      <p className="text-dark team-section-heading">{props.heading}</p>
      <div className="team-members">
        {props.members.map(member => (
          <Member url={member.split(' ').join('-').toLowerCase() + '.jpg'} name={member}/>
        ))}
      </div>
    </div>
  )
}

export default TeamSection;
