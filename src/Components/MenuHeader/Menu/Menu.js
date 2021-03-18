import classes from './Menu.module.css'
import cn from 'classnames'

const Menu = ({isActive}) => {
    return(
        <div className={cn(classes.menuContainer,  isActive ? classes.active : classes.deactive)}>
            <div className={classes.overlay}/>
            <div className={classes.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu