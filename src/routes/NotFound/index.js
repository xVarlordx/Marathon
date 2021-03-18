import { useHistory} from 'react-router-dom'
import classes from './style.module.css'

const NotFound = () => {
    const history = useHistory();
    const handleHomePage = () => {
        history.push('/');
    }
    return (
        <div className={classes.bg}>
            <h1>Ooooops! 404 NOT FOUND 404</h1>
            <p>Mayabe you make mistake somethere</p>
            <button onClick={handleHomePage} className={classes.HomeButton}>
                Back to HomePage
            </button>
        </div>
    );
};

export default NotFound;