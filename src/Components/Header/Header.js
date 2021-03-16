import classes from './Header.module.css'

const Header = ({title, descr, onClickButton}) => {
    const handleClick = () => {
        console.log('####: <Header />');
        onClickButton && onClickButton('game');
    }
    return (
            <header className={classes.root}>
                <div className={classes.forest} />
                <div className={classes.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <button onClick={handleClick} className={classes.HomeButton}>
                        Start Game!
                    </button>
                </div>
            </header>
    );
}

export default Header;