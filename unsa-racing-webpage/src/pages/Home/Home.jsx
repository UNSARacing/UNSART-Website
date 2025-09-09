import './Home.css'

const Home = () => {
    return (
        <>
        <div className="homeContainer">
            <img
                className="homeBackgroundImage"
                src="../src/assets/Home/garage.svg"
                alt="Garage"
            />

            {/* KONTEJNER ZA DRAGON I CAR */}
            <div className="homeLogoGroup">
                <img 
                    className="homeDragonLogo"
                    src="../src/assets/Home/dragon.svg"
                    alt="Dragon Logo"
                />
                <img 
                    className="homeCarImage"
                    src="../src/assets/Home/car.svg"
                    alt="Car"
                />
            </div>

            <div className="homeContent">
                <h1 className="homeTitle">UNSA Racing Team</h1>
                <p className="homeSubtitle">Engineering inovation. Driving Passion.</p>
                <a href="#learn-more" className="homeButton">Meet the Team</a>
            </div>
            <div className="teamContainer">
                {/*
                    kontejner za tim
                */}
            </div>
        </div>
        </>
    );
}

export default Home;
