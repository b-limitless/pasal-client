import React from 'react'
import Header from 'components/layouts/Header';
import Banner from 'components/layouts/Banner';
interface HomeProps {

}

//https://codepen.io/danaidesign/pen/xMVNbPhome
const Home: React.FC<HomeProps> = ({ }) => {
        return (
                <div className="container">
                        <Header />
                        <Banner />
                 </div>);
}

export default Home;