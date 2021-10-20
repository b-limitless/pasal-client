import React from 'react'
import Footer from 'components/layouts/Footer';
import Header from 'components/layouts/Header';
import x from 'assets/svg/x.svg';
import cartImg from 'assets/img/cart-img1.png';
import './_cart.scss';

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
                <div className="table">
                    <div className="head">
                        <div className="item prdouct">PRODUCT</div>
                        <div className="item">PRICE</div>
                        <div className="item">QTY</div>
                        <div className="item">UNITE PRICE</div>
                    </div>

                    <div className="body">
                        <div className="item">

                            <div className="col image">
                                <span className="remove">
                                    <img src={x} alt="Remove" />
                                </span>
                                <img src={cartImg} alt="" />
                            </div>
                            <div className="col pname">
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
                                $345345
                            </div>
                        </div>
                        
                        <div className="item">

                            <div className="col image">
                                <span className="remove">
                                    <img src={x} alt="Remove" />
                                </span>
                                <img src={cartImg} alt="" />
                            </div>
                            <div className="col pname">
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
                                $345345
                            </div>
                        </div>

                    </div>

                </div>

                <div className="summary">
                    <div className="col vouchar">
                    <div className="search">
                        <input placeholder = "Voucher code" type="text" className="search__input" />
                        <button className="search__btn">Redeem</button>
                </div>
                    </div>
                    <div className="col details__total">
                        <div className="row details">
                            <ul>
                                <li> Subtotal</li>
                                <li> 345</li>
                            </ul>
                            <ul>
                                <li> Subtotal</li>
                                <li> 345</li>
                            </ul>
                            <ul>
                                <li> Subtotal</li>
                                <li> 345</li>
                            </ul>
                        </div>

                        <div className="row total">
                            <ul>
                                <li>Total</li>
                                <li>$345</li>
                            </ul>
                        </div>

                        <div className="row checkout">
                            <button className="btn btn-blue">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </>);
}
export default Cart;