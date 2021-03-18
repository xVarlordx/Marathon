import classes from './style.module.css'

const GamePage = ({onChangePage}) => {
    const handleHomePage = () => {
        onChangePage && onChangePage("app");
    }

    return (
        <div>
            This is GAMEPAGE!!!
            <button onClick={handleHomePage} className={classes.HomeButton}>
                Back to HomePage
            </button>
        </div>
    );
};

export default GamePage;