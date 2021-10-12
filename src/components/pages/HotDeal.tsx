import React, { useState } from 'react'
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import Section5 from 'components/layouts/Section5';
import PriceSlider from 'components/material/PriceSlider';
import ListSVG from 'components/icons/List';
import GridSVG from 'components/icons/Grid';
import BestSellerGrid from 'components/layouts/childrens/BestSellerGrid';
import Pagination from '@mui/material/Pagination';

interface HotDealProps {

}

type ViewTypes = "grid" | "list";

export const HotDeal: React.FC<HotDealProps> = ({ }) => {
    const [viewType, setViewType] = useState<ViewTypes>("grid");

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    const viewTypeFun = (e: React.MouseEvent<HTMLInputElement>) => {
        let button = e.target as HTMLInputElement;
    }
    console.log(page, viewType)
  

    return (<div className="container">
        <Header />
        <div className="main hotdeals">
            <div className="hotdeals__bedcrumber">
                <span>Home</span>
                <span>/</span>
                <span>Hot Deals</span>
            </div>

            <div className="hotdeals__main">
                <div className="left">
                    <div className="row">
                        <div className="title">
                            Hot Deals
                        </div>
                        <div className="name__value">
                            <div className="name"><a href="!#">Nike</a></div>
                            <div className="value"><a href="!#">2</a></div>
                        </div>
                        <div className="name__value">
                            <div className="name"><a href="!#">Arimax</a></div>
                            <div className="value"><a href="!#">44</a></div>
                        </div>
                        <div className="name__value">
                            <div className="name"><a href="!#">Arimax</a></div>
                            <div className="value"><a href="!#">44</a></div>
                        </div>

                    </div>
                    <div className="row flex-column">
                        <div className="title">
                            Prices
                        </div>
                        <div className="ranger">
                            <span className="title__ranger">Ranger</span>
                            <span className="range">$12.33 - $22.44</span>
                        </div>
                        <div className="ranger">
                            <PriceSlider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="title">COLORS</div>
                        <div className="colors">

                            <div className="color color__red selected"></div>
                            <div className="color color__blue"></div>
                            <div className="color color__green"></div>
                            <div className="color color__black"></div>
                            <div className="color color__white"></div>
                            <div className="color color__pink"></div>
                        </div>
                    </div>
                    <div className="row"></div>
                </div>
                <div className="right">
                    <div className="row section__5">
                        <Section5 />
                    </div>
                    <div className="row sort">
                        <div className="item item-1">11 Items</div>
                        <div className="item item-2">Sort By</div>
                        <div className="item item-3">Name</div>
                        <div className="item item-4">Show</div>
                        <div className="item item-5">12</div>
                        <div className="item item-6">&#8679;</div>
                        <div className="item item-7" onClick = {() => setViewType('grid')}>
                        <GridSVG fill = "#40BFFF"/>
                        </div>
                        <div className="item item-8" onClick = {() => setViewType('list')}>
                           <ListSVG fill = "#C1C8CE"/>
                        </div>


                    </div>
                    <div className="row">
                    <BestSellerGrid />
                    </div>
                    <div className="row pagination">
                    <Pagination  style = {{
                       fontFamily: "Montserrat !important"
                    }}count={10} shape="rounded" onChange = {handleChange}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>);
}

export default HotDeal;
