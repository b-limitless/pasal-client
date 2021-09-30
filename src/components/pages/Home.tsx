import React from 'react'
import Header from 'components/layouts/Header';
import Banner from 'components/layouts/Banner';
import BannerProducts from 'components/layouts/BannerProducts';

interface HomeProps {

}

//https://codepen.io/danaidesign/pen/xMVNbPhome
const Home: React.FC<HomeProps> = ({ }) => {
        return (
                <div className="container">
                        <Header />
                        <Banner />
                        <BannerProducts/>
                 </div>);
}

export default Home;