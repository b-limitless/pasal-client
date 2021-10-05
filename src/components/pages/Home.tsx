import React from 'react'
import Header from 'components/layouts/Header';
import Banner from 'components/layouts/Banner';
import BannerProducts from 'components/layouts/BannerProducts';
import BestSeller from 'components/layouts/BestSeller';
import Section5 from 'components/layouts/Section5';

interface HomeProps {

}

//https://codepen.io/danaidesign/pen/xMVNbPhome
const Home: React.FC<HomeProps> = ({ children }) => {
        return (
                <div className="container">
                        <Header />
                        <Banner />
                        <BannerProducts/>
                        <BestSeller/>
                       
                        <Section5/>

                        {children}
                       
                 </div>);
}

export default Home;