import classes from './Menu.module.css'
import cn from 'classnames'
import {Link} from 'react-router-dom'

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: 'game',
    },
    {
        title: 'ABOUT',
        to: 'about',
    },
    {
        title: 'CONTACT',
        to: 'contact',
    },
]

const Menu = ({isActive, reversHandler}) => {
    return(
        <div className={cn(classes.menuContainer, {
            [classes.active]: isActive === true,
            [classes.deactive]: isActive === false
        })}>
            <div className={classes.overlay}/>
            <div className={classes.menuItems}>
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <Link to={to} onClick={reversHandler}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Menu