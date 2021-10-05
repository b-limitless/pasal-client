import React from 'react'
import Shoe from 'assets/svg/shoe.svg';

const Section5: React.FC<{}> = ({children}) => {
        return (
            <section className="section5">
                
                <div className="section5__item item-1">
                    <div className="title  title1">Adidas Men Running
Sneakers</div>
                    <div className="title title2">Performance and design. Taken right to the edge.</div>
                    <div className="title title3">SHOP NOW</div>
                </div>
                <div className="section5__item item-2">
                    <img src= {Shoe} alt="" className="shoe" />
                </div>     
                {children}
            </section>
        );
}

export default Section5;