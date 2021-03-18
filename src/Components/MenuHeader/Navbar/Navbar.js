import classes from './Navbar.module.css'
import cn from 'classnames';

const Navbar = ({isActive, onHandle} ) => {
const onReverseHandler = () => {
    onHandle()
}
    return (
        <nav className={classes.root}>
            <div className={classes.navWrapper}>
                <p className={classes.brand}>
                    LOGO
                </p>
                <div onClick={onReverseHandler} className={cn(classes.menuButton, {[classes.active]: isActive})}>
                    <span/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;