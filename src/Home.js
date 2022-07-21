import Navbar from './Navbar';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home">
        <div className="img-container">
          <img src="logo.png" className="logo"/>
        </div>
        <div className="home-text">
          <h1 className="text-light home-heading">Induction 2022</h1>
          <h2 className="text-dark mtech-phd">MTech | Phd</h2>
          <h2 className="text-dark">27th-30th July</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;
