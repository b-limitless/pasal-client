import React from 'react'
// refund, shipping, support
import refundSVG from 'assets/svg/refund.svg';
import shippingSVG from 'assets/svg/shipping.svg';
import supportSVG from 'assets/svg/support.svg';

interface Section6Props {

}

const Section6: React.FC<Section6Props> = ({}) => {
        return (
            <section className="section6">
                <div className = "grid">
                    <div className="item">
                        <div className="row item__icon">
                            <img src={shippingSVG} alt="" className="icon" />
                        </div>
                        <div className="row title">
                        FREE SHIPPING
                        </div>
                        <div className="row description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                    <div className="item">
                        <div className="row item__icon">
                            <img src={refundSVG} alt="" className="icon" />
                        </div>
                        <div className="row title">
                        FREE SHIPPING
                        </div>
                        <div className="row description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                    <div className="item">
                        <div className="row item__icon">
                            <img src={supportSVG} alt="" className="icon" />
                        </div>
                        <div className="row title">
                        FREE SHIPPING
                        </div>
                        <div className="row description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                
                </div>
            </section>
        );
}

export default Section6;