import {useMediaQuery} from "react-responsive";

function Navbar() {

  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  return (
    <div className="navbar">
      <img src="iiitd.png" className="icon"/>
      {!isMobile ?
        <div className="nav-buttons">
          <a href="#about-anchor" className="button fill">About</a>
          <a href="#schedule-anchor" className="button fill">Schedule</a>
          <a href="#team-anchor" className="button fill">Our Team</a>
        </div>
        : null}
    </div>
  )
}

export default Navbar;
