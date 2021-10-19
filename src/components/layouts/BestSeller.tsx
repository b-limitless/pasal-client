import React, { useState } from 'react';
import BestSellerGrid from 'components/layouts/childrens/BestSellerGrid';
import { TabInterface } from 'interfaces';

const tabs: TabInterface[] = [
    { id: 1, title: 'All', content: <BestSellerGrid view = "grid" type = "home"/>, },
    { id: 2, title: 'Shoe', content: <div>Tab Content 2</div> },
    { id: 3, title: 'Snikers', content: <div>Tab Content 3</div> },
    { id: 4, title: 'Belt', content: <div>Tab Content 4</div> },
    { id: 5, title: 'Sunglass', content: <BestSellerGrid view = "grid" type = "home"/> },
];

interface BestSellerInterface {
    tabs: TabInterface[],
    title?: string;
}

const BestSeller: React.FC<BestSellerInterface> = ({title, tabs, children }) => {
    const [selectedList, setSelectedList] = useState<null | string>('tab__item-1');
    const loadMore = (selectedList: string | null, offset: number) => {
    }
    return (
        <section className="bestseller">
            <div className="bestseller__title">
               {title}
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
            
            {children}
        </section>);
}
export default BestSeller;