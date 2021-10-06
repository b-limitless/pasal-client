import React from 'react'
import Header from 'components/layouts/Header';
import Banner from 'components/layouts/Banner';
import BannerProducts from 'components/layouts/BannerProducts';
import BestSeller from 'components/layouts/BestSeller';
import Section5 from 'components/layouts/Section5';
import Section6 from 'components/layouts/Section6';
import Section7 from 'components/layouts/Section7';


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
                        <Section6/>
                        <Section7/>
                        
                        {children}
                       
                 </div>);
}

export default Home;