import React from 'react'
import Header from 'components/layouts/Header';
import Banner from 'components/layouts/Banner';
import BannerProducts from 'components/layouts/BannerProducts';
import BestSeller from 'components/layouts/BestSeller';
import Section5 from 'components/layouts/Section5';
import Section6 from 'components/layouts/Section6';
import Section7 from 'components/layouts/Section7';
import Section8 from 'components/layouts/Section8';
import Section9 from 'components/layouts/Section9';
import Footer from 'components/layouts/Footer';
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
                        <Section5 marginTop = "default-margin-top" variant = "Home"/>
                        <Section6/>
                        <Section7/>
                        <Section8/>
                        <Section9/>
                        <Footer/>
                        {children}
                       
                 </div>);
}

export default Home;