import React from 'react'

interface BannerProductsProps {

}

const BannerProducts: React.FC<BannerProductsProps> = ({ children }) => {
    return (<div className="bannerProducts">
        <div className="products">
            <div className="products__item products__item1">
                <div className="products__item__title">
                    FS - QUILTED MAXI CROSS BAG
                </div>
                <div className="products__item__price">
                    <div className="products__item__price--old">$45.33</div>
                    <div className="products__item__price--discount">24% Off</div>
                </div>
                <div className="products__item__price--bold">
                    $299.43
                </div>
            </div>

            <div className="products__item products__item2">
                <div className="products__item__title">
                    FS - QUILTED MAXI CROSS BAG
                </div>
                <div className="products__item__price">
                    <div className="products__item__price--old">$45.33</div>
                    <div className="products__item__price--discount">24% Off</div>
                </div>
                <div className="products__item__price--bold">
                    $299.43
                </div>
            </div>

            <div className="products__item products__item3">
                <div className="products__item__title">
                    FS - QUILTED MAXI CROSS BAG
                </div>
                <div className="products__item__price">
                    <div className="products__item__price--old">$45.33</div>
                    <div className="products__item__price--discount">24% Off</div>
                </div>
                <div className="products__item__price--bold">
                    $299.43
                </div>
            </div>


        </div>
        {children}
    </div>);
}

export default BannerProducts;