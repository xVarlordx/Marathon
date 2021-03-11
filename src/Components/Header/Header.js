import classes from './Header.module.css'

const Header = (props) => {
    return (
            <header className={classes.root}>
                <div className={classes.forest} />
                <div className={classes.container}>
                    {props.title && <h1>{props.title}</h1>}
                    {props.descr && <p>{props.descr}</p>}
                </div>
            </header>
    );
}

export default Header;