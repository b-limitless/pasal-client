import React from 'react'
import nike from 'assets/svg/nike.svg';
import kronos from 'assets/svg/kronos.svg';
import figma from 'assets/svg/figma.svg';
interface Section7Props {
}
const Section7: React.FC<Section7Props> = ({ }) => {
    return (
        <section className="section7">
            <div className="heading">LATEST NEWS</div>
            <div className="grid">
                <div className="item item1">
                    <div className="col">
                        <img src={nike} alt="" />
                    </div>
                    <div className="col">
                        <div className="date">01 Jan, 2015</div>
                        <div className="title">Fashion Industry</div>
                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                </div>
                <div className="item item1">
                    <div className="col">
                        <img src={figma} alt="" />
                    </div>
                    <div className="col">
                        <div className="date">01 Jan, 2015</div>
                        <div className="title">Best Design Tools</div>
                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                </div>
            
                <div className="item item1">
                    <div className="col">
                        <img src={kronos} alt="" />
                    </div>
                    <div className="col">
                        <div className="date">01 Jan, 2015</div>
                        <div className="title">HR Community</div>
                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                </div>
            
            </div>
        </section>
    );
}
export default Section7;