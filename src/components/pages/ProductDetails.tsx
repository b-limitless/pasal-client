import React from 'react'
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import ProductImage from 'assets/img/Product1.png';
import thumb1 from 'assets/img/thumb1.png';
import thumb2 from 'assets/img/thumb2.png';
import thumb3 from 'assets/img/thumb3.png';
import Cart2 from 'assets/svg/cart_2.svg';
import Heart from 'assets/svg/hearts.svg';
import Grid from 'styled-components/Grid';
import FacebookPNG from 'assets/img/facebook.png';
import TwitterIPNG from 'assets/img/twitter.png';

interface ProductDetailsProps {

}

const ProductDetails: React.FC<ProductDetailsProps> = ({ }) => {
    return (
        <div className="container">
            <Header />
            <div className="main">
                <div className="hotdeals__bedcrumber">
                    <span>Home</span>
                    <span>/</span>
                    <span>Nike Airmax 270 React</span>
                </div>

                <div className="col__container">
                    <div className="col">
                        <div className="details">
                            <div className="catlog">
                                <div className="row product__image">
                                    <img src={ProductImage} alt="" />
                                </div>
                                <div className="row thumbnails">
                                    <img src={thumb1} alt="" id="" />
                                    <img src={thumb2} alt="" id="" />
                                    <img src={thumb3} alt="" id="" />
                                    <img src={thumb3} alt="" id="" />
                                </div>
                            </div>
                            <div className="text-description">
                                <div className="ptitle">
                                    Nike Airmax 270 React
                                </div>

                                <div className="row reviews">
                                <div className="stars">
                                    <div className="star enabled"> </div>
                                    <div className="star enabled"></div>
                                    <div className="star enabled"></div>
                                    <div className="star enabled"></div>
                                    <div className="star disabled"></div>
                                </div>
                                <div className="review">0 Review</div>
                                <div className="submit">Submit a review</div>
                                </div>
                                
                                <div className="row price">
                                    <div className="price--original">$299.43</div>
                                    <div className="price--old">$999.45</div>
                                    <div className="price--discount">25%off</div>
                                </div>

                                <div className="row avaibility">
                                    <div className="atext">Avaibility</div>
                                    <div className="atext">Avaibility</div>
                                    <div className="atext">Avaibility</div>
                                    <div className="atext">Avaibility</div>
                                    <div className="atext">Avaibility</div>
                                </div>

                                <div className="row color__row">
                                    <div className="col title">Select Color</div>
                                    <div className="col">
                                        <div className="colors">
                                            <div className="color color__red selected"></div>
                                            <div className="color color__blue"></div>
                                            <div className="color color__green"></div>
                                            <div className="color color__black"></div>
                                            <div className="color color__white"></div>
                                            <div className="color color__pink"></div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row size">
                                    <div className="title"> Size</div>
                                    <select name="size" className = "select">
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                    </select>
                                </div>

                                <div className="row action">
                                    <div className="qty">
                                        <button className = "btn btn--secondary">-</button>
                                        <button className = "btn btn--secondary number">1</button>
                                        <button className = "btn btn--secondary">+</button>
                                    </div>
                                    <div className="cart">
                                        <button className="btn btn--primary addtocart">
                                            <img src={Cart2} alt="Add To Cart" /> <span>Add To Card</span>
                                        </button>
                                        <button className="btn btn--primary wishlist">
                                            <img src={Heart} alt="Add To Wish List" />
                                        </button>
                                    </div>
                                </div>

                                <div className="socials">
                                    <div className="item">
                                        <button className = "btn btn--facebook">
                                            <img src= {FacebookPNG} alt="Share on Facebook" />
                                            <span> Share on Facebook</span>
                                        </button>

                                        <button className = "btn btn--twitter">
                                            <img src= {TwitterIPNG} alt="Share on Twitter" />
                                            <span> Share on Twitter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="tabs">
                            This is tabs
                        </div>
                    </div>

                    <div className="col add">
                        <Grid view="grid">
                            <div className="grid">
                                <div className="grid__item item1">
                                    <div className="col">
                                        <div className="grid__item__row">
                                            <img src={ProductImage} alt="" className="grid__item__img" />
                                            <div className="label">HOT</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="grid__item__row">
                                            <div className="title">Nike Air Max 270 Reac</div>
                                        </div>
                                        <div className="grid__item__row  stars">
                                            <div className="star enabled"> </div>
                                            <div className="star enabled"></div>
                                            <div className="star enabled"></div>
                                            <div className="star enabled"></div>
                                            <div className="star disabled"></div>
                                        </div>
                                        <div className="grid__item__row price">
                                            <div className="price--original">$299.43</div>
                                            <div className="price--old">$999.45</div>
                                            <div className="price--discount">25%off</div>
                                        </div>
                                        <div className="grid__item__row">
                                            <div className="description">
                                                Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...

                                            </div>
                                        </div>

                                        <div className="grid__item__row">
                                            <div className="action">
                                                <button className="addtocart">
                                                    <img src={Cart2} alt="Add To Cart" /> <span>Add To Card</span>
                                                </button>
                                                <button className="wishlist">
                                                    <img src={Heart} alt="Add To Wish List" />
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </Grid>

                    </div>

                </div>

            </div>
            <Footer />
        </div>);
}

export default ProductDetails;