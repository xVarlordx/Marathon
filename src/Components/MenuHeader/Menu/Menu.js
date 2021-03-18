import classes from './Menu.module.css'
import cn from 'classnames'

const MENU = [
    {
        title: 'HOME',
        to: '#welcome',
    },
    {
        title: 'GAME',
        to: '#game',
    },
    {
        title: 'ABOUT',
        to: '#about',
    },
    {
        title: 'CONTACT',
        to: '#contact',
    },
]

const Menu = ({isActive}) => {
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
                                <a href={to}>
                                    {title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Menu