import React from 'react'
import Logo from 'assets/svg/logo.svg';
import ArrowRight from 'assets/svg/arrow__right.svg';
import Facebook from 'assets/svg/facebook.svg';
import Instagram from 'assets/svg/instagram.svg';
import Twitter from 'assets/svg/twitter.svg';
interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({ }) => {
        return (<footer className="footer">
                <div className="footer__container">
                        <div className="footer__top">
                                <div className="item logo">
                                        <img src={Logo} alt="" />
                                </div>
                                <div className="item ready">
                                        Ready to get started?
                                </div>
                                <div className="item button">
                                        <button className="btn btn--primary">Get started</button>
                                </div>
                        </div>

                        <div className="footer__main">
                                <div className="item newsletter">
                                        <div className="row newsletter-txt">
                                                Subscribe to our
                                                newsletter
                                        </div>
                                        <div className="row input">
                                                <input placeholder = "Email address" type="text" className="input__subscribe" />
                                                <button className="btn__subscript">
                                                        <img src={ArrowRight} alt="" />
                                                </button>
                                        </div>
                                </div>
                                
                                <div className="item services">
                                        <ul className="services__ul">
                                                <li><a href="!#">Email Marketing</a></li>
                                                <li><a href="!#">Email Marketing</a></li>
                                                <li><a href="!#">Email Marketing</a></li>
                                                <li><a href="!#">Email Marketing</a></li>
                                                <li><a href="!#">Email Marketing</a></li>
                                        </ul>
                                </div>
                                <div className="item about">
                                        <ul className="about__ul">
                                                <li><a href="!#">Our Story</a></li>
                                                <li><a href="!#">Our Story</a></li>
                                                <li><a href="!#">Our Story</a></li>
                                                <li><a href="!#">Our Story</a></li>
                                        </ul>
                                </div>
                                <div className="item help">
                                        <ul className="help__ul">
                                                <li><a href="!#">FAQS</a></li>
                                                <li><a href="!#">Concats Us</a></li>
                                        </ul>
                                </div>
                        </div>
                        <div className="footer__bottom">
                                <div className="item">
                                        Terms & Conditions
                                </div>
                                <div className="item privacy">
                                        Privacy
                                </div>

                                <div className="item social">
                                        <img src= {Facebook} alt="" className="" />
                                        <img src= {Twitter} alt="" className="" />
                                        <img src= {Instagram} alt="" className="" />
                                </div>
                        </div>

                </div>
        </footer>);
}

export default Footer;