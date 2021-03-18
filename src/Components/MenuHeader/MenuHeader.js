import { useState } from 'react'

import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";

import classes from './MenuHeader.module.css'

const MenuHeader = () => {
    const [isActive, setActive] = useState(null);

    const reverseHandler = () => {
        setActive(!isActive);
    }

    return(
        <div className={classes.MenuHeader}>
            <Menu
                isActive={isActive}
            />
            <Navbar
                isActive={isActive}
                onHandle={reverseHandler}
            />
        </div>
    );
};

export default MenuHeader;