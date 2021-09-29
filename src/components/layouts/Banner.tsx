import React from 'react'
import banner from 'assets/img/promotion.png';
interface BannerProps {
}
const Banner: React.FC<BannerProps> = ({ }) => {
    return (<div className="banner">
        <img src={banner} alt="" className="banner__img" />
        <h1 className="banner__h2">
            Super Flash Sales <br />
            50% Off
        </h1>
    </div>);
}
export default Banner;