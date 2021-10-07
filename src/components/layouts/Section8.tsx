import React from 'react'
import ShoeSVG from 'assets/svg/shoe1.svg';
interface Section8Props {

}

const Section8: React.FC<Section8Props> = ({ }) => {
    return (
        <div className="section8">
            <div className="title">FEATURED PRODUCTS</div>

            <div className="grid">
                <div className="item">
                    <div className="col">
                        <img src={ShoeSVG} alt="" className="col__img" />
                    </div>
                    <div className="col">
                        <div className="col__title">Blue Swade Nike Sneakers</div>
                        <div className="stars">
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                        </div>

                        <div className="price">
                            <div className="price--red">$299.43</div>
                            <div className="price--old">$999.45</div>
                            <div className="price--discount">25%off</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="col">
                        <img src={ShoeSVG} alt="" className="col__img" />
                    </div>
                    <div className="col">
                        <div className="col__title">Blue Swade Nike Sneakers</div>
                        <div className="stars">
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                        </div>

                        <div className="price">
                            <div className="price--red">$299.43</div>
                            <div className="price--old">$999.45</div>
                            <div className="price--discount">25%off</div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="col">
                        <img src={ShoeSVG} alt="" className="col__img" />
                    </div>
                    <div className="col">
                        <div className="col__title">Blue Swade Nike Sneakers</div>
                        <div className="stars">
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                            <div className="star enabled"></div>
                        </div>

                        <div className="price">
                            <div className="price--red">$299.43</div>
                            <div className="price--old">$999.45</div>
                            <div className="price--discount">25%off</div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>);
}

export default Section8;