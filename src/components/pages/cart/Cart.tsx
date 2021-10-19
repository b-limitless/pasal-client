import React from 'react'
import Footer from 'components/layouts/Footer';
import Header from 'components/layouts/Header';
import x from 'assets/svg/x.svg';
import cartImg from 'assets/img/cart-img1.png';
import './cart.scss';

interface CartProps {
}
export const Cart: React.FC<CartProps> = () => {
    return (<>
        <Header />
        <div className="main cart">
            <div className="hotdeals__bedcrumber">
                <span>Home</span>
                <span>/</span>
                <span>Cart</span>
            </div>

            <div className="container">
                <div className="head">
                    <div className="item">PRODUCT</div>
                    <div className="item">PRICE</div>
                    <div className="item">QTY</div>
                    <div className="item">UNITE PRICE</div>
                </div>

                <div className="body">
                    <div className="item">
                        <div className="col remove">
                            <img src={x} alt="Remove" />
                        </div>
                        <div className="col image">
                            <img src={cartImg} alt="" />
                        </div>
                        <div className="col">
                            Nike Airmax 270 react
                        </div>
                        <div className="col price">
                            $988
                        </div>
                        <div className="col update">
                            <div className="qty">
                                <button className="btn btn--secondary">-</button>
                                <button className="btn btn--secondary number">1</button>
                                <button className="btn btn--secondary">+</button>
                            </div>
                        </div>
                        <div className="col unite__price">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}
export default Cart;