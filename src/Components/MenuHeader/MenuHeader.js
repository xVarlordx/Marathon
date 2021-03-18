import { useState } from 'react'

import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";

import classes from './MenuHeader.module.css'

const MenuHeader = ({bgActive}) => {
    const [isActive, setActive] = useState(null);

    const reverseHandler = () => {
        setActive(!isActive);
    }

    return(
        <div className={classes.MenuHeader}>
            <Menu
                isActive={isActive}
                reversHandler={reverseHandler}
            />
            <Navbar
                isActive={isActive}
                onHandle={reverseHandler}
                bgActive={bgActive}
            />
        </div>
    );
};

export default MenuHeader;