function Member(props) {
  return (
    <div className="member">
      <img src={props.url} className="member-image" alt="photo of team member"/>
      <span className="member-name">{props.name}</span>
    </div>
  )
}

export default Member;
