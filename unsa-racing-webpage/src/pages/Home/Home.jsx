import './Home.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <img
                className="homeBackgroundImage"
                src="../src/assets/Home/image.png"
            />
            <img 
                className="homeDragonLogo"
                src="../src/assets/Home/teamlogo.png"
            />
            <img 
                className="homeCarImage"
                src="../src/assets/Home/car.png"
            />
            <div className="homeContent">
                <h1 className="homeTitle">UNSA Racing Team</h1>
                <p className="homeSubtitle">Engineering inovation. Driving Passion.</p>
                <a href="#learn-more" className="homeButton">Meet the Team</a>
            </div>
        </div>
    );
}

export default Home;
