import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import SearchIcon from 'assets/svg/search.svg';
import ProfileIcon from 'assets/svg/profile.svg';
import CartIcon from 'assets/svg/cart.svg';
import Logo from 'assets/svg/logo.svg';
import Navigation from 'components/layouts/Navigation';


interface HeaderProps {
}
const BootstrapInput = withStyles((theme: Theme) =>
        createStyles({
                input: {
                        borderRadius: 4,
                        position: 'relative',
                        border: 'none',
                        fontFamily: 'Montserrat, sans-serif'
                },
        }),
)(InputBase);
const Header: React.FC<HeaderProps> = ({ children }) => {
        const [lang, setLant] = useState('EN');
        const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
                setLant(event.target.value as string);
        };
        return (
                <div className="home">
                        <section className="header">
                                <div className="header__item-1 header__item">
                                        <Select
                                                labelId="demo-customized-select-label"
                                                id="demo-customized-select"
                                                value={lang}
                                                onChange={handleChange}
                                                input={<BootstrapInput />}
                                        >
                                                <MenuItem value="EN">EN</MenuItem>
                                                <MenuItem value="NO">Norwegian</MenuItem>
                                        </Select>
                                </div>
                                <div className="header__item-2 header__item">
                                        <Select
                                                labelId="demo-customized-select-label"
                                                id="demo-customized-select"
                                                value="USD"
                                                onChange={handleChange}
                                                input={<BootstrapInput />}
                                        >
                                                <MenuItem value="USD">USD</MenuItem>
                                                <MenuItem value="NOK">NOK</MenuItem>
                                        </Select>
                                </div>
                                <div className="header__item-7 header__item">
                                        <span className="header__search">
                                                <input type="text" className="header__search__input" placeholder="Search ....." />
                                                { }
                                        </span>
                                </div>
                                <div className="header__item-3 header__item">
                                        <span className="header__icon--profile">
                                                <img src={ProfileIcon} alt="" className="header__icon" />
                                        </span>
                                        <span className="header__icon--titel">My Profile</span>
                                </div>
                                <div className="header__item-4 header__item">
                                        <span className="header__icon">
                                                <img src={CartIcon} alt="" className="header__icon" />
                                        </span>
                                        <span className="header__item__icon--notification">6</span>
                                </div>
                                <div className="header__item-5 header__item">Items</div>
                                <div className="header__item-6 header__item">$0.00</div>
                                {children}
                        </section>
                       <Navigation/>
                
                </div>
        );
}
export default Header;