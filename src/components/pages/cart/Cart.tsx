import React from 'react'
import Footer from 'components/layouts/Footer';
import Header from 'components/layouts/Header';
import './_cart.scss';
import x from 'assets/svg/x.svg';
import cartImg from 'assets/img/cart-img1.png';
import backIcon from 'assets/svg/back.svg';
import closeIcon from 'assets/svg/times.svg';
import bankIcon from 'assets/svg/bank.svg';
import creditCardIcon from 'assets/svg/credit-card.svg';
import paypalIcon from 'assets/svg/paypal.svg';
import creditCardImg from 'assets/img/credit-card.png';
import completedIcon from 'assets/svg/completed.svg';

// back.svg, close.svg, bank, credit-card, paypal

interface CartProps {
}
export const Cart: React.FC<CartProps> = () => {
    return (<>
        <Header />
        <div className="model">
            <div className="popup">

                <div className="navigations">
                    <div className="item back">
                        <img src={backIcon} alt="Back" />
                    </div>
                    <div className="item close">
                        <img src={closeIcon} alt="Close" />
                    </div>
                </div>
                <div className="title">Make Payment</div>
                <div className="stages">
                    <div className="items">
                        <div className="item active">1</div>
                        <div className="item deactive">2</div>
                        <div className="item deactive">3</div>
                    </div>

                </div>

                <form className="form" id="step-1">
                    <div className="row">
                        <div className="col">
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Last Name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <input type="text" placeholder="Email Address" />
                        </div>
                        <div className="col">
                            <textarea name="" id="" rows={3} placeholder="Address for delivery"></textarea>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col payments">
                            <div className="title">Select payment method</div>
                            <div className="lists">
                                <ul className="selected">
                                    <li><img src={creditCardIcon} alt="" /></li>
                                    <li className="payment__name">Card Card or Debit</li>
                                    <li> <input type="radio" name="payment_option" /></li>
                                </ul>
                                <ul>
                                    <li><img src={paypalIcon} alt="" /></li>
                                    <li className="payment__name">Card Card or Debit</li>
                                    <li> <input type="radio" name="payment_option" /></li>
                                </ul>
                                <ul>
                                    <li><img src={bankIcon} alt="" /></li>
                                    <li className="payment__name">Card Card or Debit</li>
                                    <li> <input type="radio" name="payment_option" /></li>
                                </ul>

                            </div>

                        </div>

                        <div className="col">
                            <input type="text" placeholder="Mobile Phone" />
                        </div>
                    </div>

                    <div className="row btn-pay">
                        <button className="btn btn--secondary">
                            Go to Payment
                        </button>
                    </div>


                </form>


                {/* <form className="form" id="step-2">
                    <div className="row">
                        <div className="col card__img">
                            <img src={creditCardImg} alt="" />
                        </div>
                        <div className="col">
                            <div className="row">
                                <input type="text" placeholder="Card Number" />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input type="text" placeholder="Expiry" />
                                </div>
                                <div className="col">
                                    <input type="text" placeholder="CVV" />
                                </div>
                            </div>

                            <div className="row">
                                <input type="text" placeholder="Holder Name" />
                            </div>
                            <div className="row">
                                <div className="save__card">
                                    <input type="checkbox" id="save-card" />
                                    <label htmlFor="save-card">Save the credit card</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row btn-pay">
                        <button className="btn btn--secondary">
                            Confirm
                        </button>
                    </div>
                </form>


                <form className="form" id="step-3">
                    <div className="row">
                        <div className="done">
                            <div className="completed">
                                <img src={completedIcon} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="success">Success</div>

                    </div>
                    <div className="row">
                        <div className="row btn-pay">
                            <button className="btn btn--secondary">
                                Complete
                            </button>
                        </div>
                    </div>
                </form> */}

            </div>
        </div>

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
                            <input placeholder="Voucher code" type="text" className="search__input" />
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