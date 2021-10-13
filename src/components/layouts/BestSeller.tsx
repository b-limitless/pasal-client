import React, { useState } from 'react';
import BestSellerGrid from 'components/layouts/childrens/BestSellerGrid';

interface TabInterface {
    id: number;
    title: string;
    content: JSX.Element
}
const tabs: TabInterface[] = [
    { id: 1, title: 'All', content: <BestSellerGrid view = "grid"/>, },
    { id: 2, title: 'Shoe', content: <div>Tab Content 2</div> },
    { id: 3, title: 'Snikers', content: <div>Tab Content 3</div> },
    { id: 4, title: 'Belt', content: <div>Tab Content 4</div> },
    { id: 5, title: 'Sunglass', content: <BestSellerGrid view = "grid"/> },
];

const BestSeller: React.FC<{}> = ({ children }) => {
    const [selectedList, setSelectedList] = useState<null | string>('tab__item-1');
    const loadMore = (selectedList: string | null, offset: number) => {
    }
    return (
        <section className="bestseller">
            <div className="bestseller__title">
                Best Seller
            </div>
            <div className="bestseller__ul">
                <ul>
                    {tabs.map(tab =>
                        <li className={`item item${tab.id} ${selectedList === `tab__item-${tab.id}` ? 'selected' : ''}`}
                            onClick={() => setSelectedList(`tab__item-${tab.id}`)}>
                            {tab.title}
                        </li>)}
                </ul>
            </div>
            <div className="bestseller__tabcontent">
                {tabs.map(tab => <div className={`tab__item ${selectedList === `tab__item-${tab.id}` ? 'show' : 'hide'}`} id={`tab__item-${tab.id}`}>{tab.content}</div>)}
            </div>
            <div className="bestseller__loadmore" onClick={() => loadMore(selectedList, 20)}>
                <span>LOAD MORE</span>
            </div>
            {children}
        </section>);
}
export default BestSeller;