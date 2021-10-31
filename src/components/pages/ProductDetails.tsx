import React, { useEffect, useState } from 'react'
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
import BestSeller from 'components/layouts/BestSeller';
import BestSellerGrid from 'components/layouts/childrens/BestSellerGrid';
import AddSlider from 'components/material/AddSlider';
import { TabInterface } from 'interfaces';

const tabs: TabInterface[] = [
    {
        id: 1, title: 'Product Information', content: <div><p>
            air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
        </p>
            <p>
                air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
            </p>
            <p>
            </p>
            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p></div>,
    },
    { id: 2, title: 'Reviews', content: <div><p>Tab Content 2</p></div> },
    { id: 3, title: 'Another Tab', content: <div><p>Tab Content 3</p></div> },
];

interface ProductDetailsProps {
}

interface SliderObjectInterface {
    id: number,
    content: JSX.Element
}

const sliderObject: SliderObjectInterface[] = [
    {
        id: 1,
        content: <div className="first slide grid__item item1">
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
    },
    {
        id: 2,
        content: <div className="slide grid__item item1">
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
    },
    {
        id: 3,
        content: <div className="slide grid__item item1">
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

    },
    {
        id: 4,
        content: <div className="slide grid__item item1">
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

    }
];

const ProductDetails: React.FC<ProductDetailsProps> = ({ }) => {
    const [thubMainImg, setThumMainImg] = useState<string>(ProductImage);
    return (
        <div className="container">
            <Header />
            <div className="main main__p__details">
                <div className="hotdeals__bedcrumber">
                    <span>Home</span>
                    <span>/</span>
                    <span>Nike Airmax 270 React</span>
                </div>
                <div className="col__container">
                    <div className="col product__details">
                        <div className="details">
                            <div className="catlog">
                                <div className="row product__image">
                                    <img src={thubMainImg} alt="" />
                                </div>
                                <div className="row thumbnails">
                                    <img src={thumb1} alt="" id="" onClick = {() => setThumMainImg(thumb1)}/>
                                    <img src={thumb2} alt="" id="" onClick = {() => setThumMainImg(thumb2)}/>
                                    <img src={thumb3} alt="" id="" onClick = {() => setThumMainImg(thumb3)}/>
                                    <img src={thumb3} alt="" id="" onClick = {() => setThumMainImg(thumb3)}/>
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
                                    <select name="size" className="select">
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                    </select>
                                </div>
                                <div className="row action">
                                    <div className="qty">
                                        <button className="btn btn--secondary">-</button>
                                        <button className="btn btn--secondary number">1</button>
                                        <button className="btn btn--secondary">+</button>
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
                                        <button className="btn btn--facebook">
                                            <img src={FacebookPNG} alt="Share on Facebook" />
                                            <span> Share on Facebook</span>
                                        </button>
                                        <button className="btn btn--twitter">
                                            <img src={TwitterIPNG} alt="Share on Twitter" />
                                            <span> Share on Twitter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tabs">
                            <BestSeller tabs={tabs} />
                        </div>
                    </div>
                    <div className="col slider">
                        <Grid view="grid">
                            <AddSlider sliders={sliderObject}>
                            </AddSlider>
                            { }
                        </Grid>
                    </div>
                </div>
                <div className="realated">
                    <div className="realated__title">RELATED PRODUCTS</div>
                    <div className="grid">
                        <BestSellerGrid view="grid" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>);
}
export default ProductDetails;