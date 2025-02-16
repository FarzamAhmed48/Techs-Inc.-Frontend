import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>TECH AWAITS!</h1>
                    <p>Welcome to Techs Inc.Discover the latest in tech with unbeatable prices and seamless shopping. Elevate your lifestyle with cutting-edge gadgets and smart home solutions.!</p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img src={BannerImg} alt="" className="banner-img"/>
            </div>
        </div>
    );
};

export default Banner;
