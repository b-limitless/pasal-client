import React, { useState, useRef } from 'react';
import Logo from 'assets/svg/logo.svg';
import useOnClickOutside from 'hooks/useOnClickOutside';
interface NavigationProps {
}
const Navigation: React.FC<NavigationProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [checkedList, setCheckedLi] = useState<string>('');
    const [cagegoryChecked, setCategoryChecked] = useState<boolean>(false);
    useOnClickOutside(ref, () => {
        setCheckedLi('')
        setCategoryChecked(false);
    });
    const updateCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setCategoryChecked(true)
        } else {
            setCategoryChecked(false)
        }
    }
    return (
        <>
            <section className="navigation">
                <img src={Logo} alt="" className="navigation__logo" />
                <div className="navigation__category" ref={ref}>
                    <label htmlFor="category-menu">Category</label>
                    <input hidden
                        checked={cagegoryChecked ? true : false}
                        type="checkbox"
                        className="category__checkbox"
                        id="category-menu"
                        onChange={(e) => updateCheckbox(e)}
                    />
                    <div className="navigation__megamenu">
                        <ul className="megamenu">
                            <li className="megamenu__item">
                                <label htmlFor="sub-menu-1">Electronic & Mobile</label>
                                <input hidden
                                    checked={checkedList === 'sub-menu-1' ? true : false}
                                    onChange={() => setCheckedLi('sub-menu-1')}
                                    type="radio" className="megamenu__checkbox" id="sub-menu-1" name="megamenu__radio" />
                                <ul className="dropdown__submenu">
                                    <a href="#1"><li> Sub Item 1 </li></a>
                                    <a href="#1"><li> Sub Item 2 </li></a>
                                </ul>
                            </li>
                            <li className="megamenu__item">
                                <label htmlFor="sub-menu-2">Beuty & Health</label>
                                <input hidden
                                    checked={checkedList === 'sub-menu-2' ? true : false}
                                    onChange={() => setCheckedLi('sub-menu-2')}
                                    type="radio" className="megamenu__checkbox" id="sub-menu-2" name="megamenu__radio" />
                                <ul className="dropdown__submenu">
                                    <a href="#1"><li> Sub Item 3 </li></a>
                                    <a href="#1"><li> Sub Item 4 </li></a>
                                </ul>
                            </li>
                            <li className="megamenu__item">
                                <label htmlFor="sub-menu-3">Computers</label>
                                <input hidden type="radio" className="megamenu__checkbox" id="sub-menu-3" name="megamenu__radio" />
                                <ul className="dropdown__submenu">
                                    <a href="#1"><li> Sub Item 5 </li></a>
                                    <a href="#1"><li> Sub Item 6 </li></a>
                                    <a href="#1"><li> Sub Item 5 </li></a>
                                    <a href="#1"><li> Sub Item 6 </li></a>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                </div>
                <div className="navigation__container">
                    <input hidden type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
                    <ul className="navigation__ul">
                        <li className="ul__item"><a href="!#">ELETRONICS</a></li>
                        <li className="ul__item"><a href="!#">MEN</a></li>
                        <li className="ul__item"><a href="!#">WOMAN</a></li>
                        <li className="ul__item"><a href="!#">BEAUTY & FRAGANCE</a></li>
                        <li className="ul__item"><a href="!#">SPORTS</a></li>
                    </ul>
                </div>
                {children}
            </section>
            { }
        </>
    );
}
export default Navigation;