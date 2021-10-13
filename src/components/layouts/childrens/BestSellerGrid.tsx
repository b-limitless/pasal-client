import React from 'react'
import product1Image from 'assets/img/grid-products/product.png'
import Grid from 'styled-components/Grid';
import { viewType } from 'types'; 
import Cart2 from 'assets/svg/cart_2.svg';
import Heart from 'assets/svg/hearts.svg';

interface BestSellerGridProps {
    view: viewType
}

//<div className="grid">

// The product will be rows from the store 
const BestSellerGrid: React.FC<BestSellerGridProps> = ({ view }) => {
    return (
        <Grid view = {`${view}`}>
            <div className="grid">
        <div className="grid__item item1">
            <div className="col">
                <div className="grid__item__row">
                    <img src={product1Image} alt="" className="grid__item__img" />
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
                            <img src= {Cart2} alt="Add To Cart" /> <span>Add To Card</span>
                        </button>
                        <button className="wishlist">
                          <img src= {Heart} alt="Add To Wish List" />
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <div className="grid__item item1">
            <div className="col">
                <div className="grid__item__row">
                    <img src={product1Image} alt="" className="grid__item__img" />

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

            </div>

        </div>

        <div className="grid__item item1">
            <div className="col">
                <div className="grid__item__row">
                    <img src={product1Image} alt="" className="grid__item__img" />

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

            </div>

        </div>

        <div className="grid__item item1">
            <div className="col">
                <div className="grid__item__row">
                    <img src={product1Image} alt="" className="grid__item__img" />

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

            </div>

        </div>

        <div className="grid__item item1">
            <div className="col">
                <div className="grid__item__row">
                    <img src={product1Image} alt="" className="grid__item__img" />

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

            </div>

        </div>

        <div className="grid__item item1">
            <div className="col">
                <div className="grid__item__row">
                    <img src={product1Image} alt="" className="grid__item__img" />

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

            </div>

        </div>

    </div>  </Grid>);

      
    
}

export default BestSellerGrid;