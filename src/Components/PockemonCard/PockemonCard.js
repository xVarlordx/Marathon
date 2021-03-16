import { useState} from 'react';
import classes from './PockemonCard.module.css';
import CardBackSide from '../../assets/card-back-side.jpg';
import cn from 'classnames'

const PockemonCard = (props) => {
    const [isActive, setActive] = useState(false);
    const reverseHandler = () => {
        setActive(!isActive);
    }
    return (
<div className={classes.root} onClick={reverseHandler}>
      <div className={cn(classes.pokemonCard, {[classes.active]: isActive})}>
        <div className={classes.cardFront}>
            <div className={cn(classes.wrap, classes.front)}>
                <div className={cn(classes.pokemon, classes[props.type])}>
                    <div className={classes.values}>
                        <div className={cn(classes.count, classes.top)}>{props.values.top}</div>
                        <div className={cn(classes.count, classes.right)}>{props.values.right}</div>
                        <div className={cn(classes.count, classes.bottom)}>{props.values.bottom}</div>
                        <div className={cn(classes.count, classes.left)}>{props.values.left}</div>
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
            <div className={cn(classes.wrap, classes.back)}>
                <img src={CardBackSide} alt="Сard Backed" />
            </div>
        </div>

    </div>
</div>
    );
}

export default PockemonCard;