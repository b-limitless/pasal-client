import React from 'react'
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import './_contact.scss';
import callPNG from 'assets/img/call.png';
interface ContactProps {
}
const Contact: React.FC<ContactProps> = ({ }) => {
    return (
        <>
            <Header />
            <div className="main">
                <div className="contact">
                    <div className="form">
                        <div className="row contact__form">
                            <div className="col call-img">
                                <div className="contain">
                                    <img src={callPNG} alt="" />
                                </div>
                                <div className="contain touch">
                                    <div className="get-touch">
                                        Get in touch
                                    </div>
                                    <div className="lists">
                                        <ul>
                                            <li>support@someting.com</li>
                                            <li>support@someting.com</li>
                                            <li>support@someting.com</li>
                                        </ul>
                                    </div>
                                    <div className="ball"></div>
                                </div>
                            </div>
                            <div className="col form__el">
                                <div className="row">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Type your full name" />
                                </div>
                                <div className="row">
                                    <label>Email</label>
                                    <input type="text" placeholder="Type your email" />
                                </div>
                                <div className="row">
                                    <label>Your message</label>
                                    <textarea placeholder="Type your message"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Contact;