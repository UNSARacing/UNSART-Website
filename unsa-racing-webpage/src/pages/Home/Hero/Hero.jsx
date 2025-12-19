import vfsaaLivery from '../../../assets/Home/vfsaa livery image.webp'
import vfsaaLiveryTransparent from '../../../assets/Home/vfsaa livery image transparent.webp'
import hoverImage from '../../../assets/Home/hoverImage.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className="homeContainer">

            <img
                className="homeBackgroundImage"
                src={vfsaaLivery}
                alt="Garage"
            />
            
            <img
                className="homeForegroundImage"
                src={vfsaaLiveryTransparent}
                alt="Car Foreground"
            />

            <div className="homeContent">
                <h1 className="homeTitle">UNSA RACING TEAM</h1>

                {/* OVO MORA BITI POSLIJE WRAPPERA */}
                <img
                    className="hoverImage"
                    src={hoverImage}
                    alt="Team"
                />
            </div>

        </div>
    );
}

export default Hero;
