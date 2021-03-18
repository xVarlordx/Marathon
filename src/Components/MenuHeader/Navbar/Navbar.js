import classes from './Navbar.module.css'
import cn from 'classnames';

const Navbar = ({isActive, onHandle, bgActive = false} ) => {
    return (
        <nav id={classes.navbar} className={cn({
            [classes.bgActive]: bgActive
        })}>
            <div className={classes.navWrapper}>
                <p className={classes.brand}>
                    LOGO
                </p>
                <div
                    onClick={onHandle}
                    className={cn(classes.menuButton, {
                        [classes.active]: isActive
                    })}
                >
                    <span />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;