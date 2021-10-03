import React, { useState } from 'react'



const BestSeller: React.FC<{}> = ({ children }) => {
    const [selectedList, setSelectedList] = useState<null | string>(null);
    
    return (
        <section className="bestseller">
            <div className="bestseller__title">
                Best Seller
            </div>
            <div className="bestseller__ul">
                <ul>
                    <li className={`item item1 ${selectedList === 'tab__item-1' ? 'selected' : ''}`} onClick = {() => setSelectedList('tab__item-1')}>All</li>
                    <li className={`item item2 ${selectedList === 'tab__item-2' ? 'selected' : ''}`} onClick = {() => setSelectedList('tab__item-2')}>All</li>
                    <li className="item item3">Snekers</li>
                    <li className="item item4">Belt</li>
                    <li className="item item5">Sunglasses</li>
                </ul>
            </div>
            <div className="bestseller__tabcontent">
                <div className={`tab__item ${selectedList === 'tab__item-1' ? 'show' : 'hide'}`} id="tab__item-1">This is my content</div>
                <div className={`tab__item ${selectedList === 'tab__item-2' ? 'show' : 'hide'}`} id="tab__item-2">Bags</div>
                <div className="tab__item hide" id="tab__item-3">Sneakers</div>
                <div className="tab__item hide" id="tab__item-4">Belt</div>
                <div className="tab__item hide" id="tab__item-5">Sunglass</div>
               
            </div>

            {/* <div className="bestseller__loadmore">
                LOAD MORE
            </div> */}

            {children}
        </section>);
}

export default BestSeller;