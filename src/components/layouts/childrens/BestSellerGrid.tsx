import React from 'react'
import product1Image from 'assets/img/grid-products/product.png'

interface BestSellerGridProps {

}

// The product will be rows from the store 
const BestSellerGrid: React.FC<BestSellerGridProps> = ({ }) => {
    return (<div className="grid">
        <div className="grid__item item1">
            <div className="grid__item__row">
                <img src={product1Image} alt="" className="grid__item__img" />
            </div>
            <div className="grid__item__row">
                <div className="title">Nike Air Max 270 React</div>
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

        <div className="grid__item item1">
            <div className="grid__item__row">
                <img src={product1Image} alt="" className="grid__item__img" />
            </div>
            <div className="grid__item__row">
                <div className="title">Nike Air Max 270 React</div>
            </div>
            <div className="grid__item__row stars">
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
            </div>
            <div className="grid__item__row price">
                <div className="price--original">$299.43</div>
                <div className="price--old">$999.45</div>
                <div className="price--discount">25%off</div>
            </div>
        </div>

        <div className="grid__item item1">
            <div className="grid__item__row">
                <img src={product1Image} alt="" className="grid__item__img" />
                <div className="label">HOT</div>
            </div>
            <div className="grid__item__row">
                <div className="title">Nike Air Max 270 React</div>
            </div>
            <div className="grid__item__row stars">
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
            </div>
            <div className="grid__item__row price">
                <div className="price--original">$299.43</div>
                <div className="price--old">$999.45</div>
                <div className="price--discount">25%off</div>
            </div>
        </div>

        <div className="grid__item item1">
            <div className="grid__item__row">
                <img src={product1Image} alt="" className="grid__item__img" />
            </div>
            <div className="grid__item__row">
                <div className="title">Nike Air Max 270 React</div>
            </div>
            <div className="grid__item__row stars">
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
            </div>
            <div className="grid__item__row price">
                <div className="price--original">$299.43</div>
                <div className="price--old">$999.45</div>
                <div className="price--discount">25%off</div>
            </div>
        </div>
        <div className="grid__item item1">
            <div className="grid__item__row">
                <img src={product1Image} alt="" className="grid__item__img" />
            </div>
            <div className="grid__item__row">
                <div className="title">Nike Air Max 270 React</div>
            </div>
            <div className="grid__item__row stars">
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
            </div>
            <div className="grid__item__row price">
                <div className="price--original">$299.43</div>
                <div className="price--old">$999.45</div>
                <div className="price--discount">25%off</div>
            </div>
        </div>
    
        <div className="grid__item item1">
            <div className="grid__item__row">
                <img src={product1Image} alt="" className="grid__item__img" />
            </div>
            <div className="grid__item__row">
                <div className="title">Nike Air Max 270 React</div>
            </div>
            <div className="grid__item__row stars">
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
                <div className="star enabled"></div>
            </div>
            <div className="grid__item__row price">
                <div className="price--original">$299.43</div>
                <div className="price--old">$999.45</div>
                <div className="price--discount">25%off</div>
            </div>
        </div>
    
    </div>);
}

export default BestSellerGrid;