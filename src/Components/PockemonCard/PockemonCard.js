import { useState} from 'react';
import classes from './PockemonCard.module.css';
import CardBackSide from '../../assets/card-back-side.jpg';

const PockemonCard = (props) => {
    const [isActive, setActive] = useState(false);
    const reverseHandler = () => {
        setActive(!isActive);
    }
    return (
<div className={classes.root} onClick={reverseHandler}>
      <div className={`${classes.pokemonCard} ${isActive ? classes.active : ''}`}>
        <div className={classes.cardFront}>
            <div className={`${classes.wrap} ${classes.front}`}>
                <div className={`${classes.pokemon} ${classes[props.type]}`}>
                    <div className={classes.values}>
                        <div className={`${classes.count} ${classes.top}`}>{props.values.top}</div>
                        <div className={`${classes.count} ${classes.right}`}>{props.values.right}</div>
                        <div className={`${classes.count} ${classes.bottom}`}>{props.values.bottom}</div>
                        <div className={`${classes.count} ${classes.left}`}>{props.values.left}</div>
                    </div>
                    <div className={classes.imgContainer}>
                        <img src={props.img} alt={props.name} />
                    </div>
                    <div className={classes.info}>
                        <span className={classes.number}>#{props.id}</span>
                        <h3 className={classes.name}>
                            {props.name}
                        </h3>
                        <small className={classes.type}>Type: <span>{props.type}</span></small>
                    </div>
                </div>
            </div>
        </div>

        <div className={classes.cardBack}>
            <div className={`${classes.wrap} ${classes.back}`}>
                <img src={CardBackSide} alt="Сard Backed" />
            </div>
        </div>

    </div>
</div>
    );
}

export default PockemonCard;