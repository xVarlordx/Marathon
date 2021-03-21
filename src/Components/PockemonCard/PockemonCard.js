import classes from './PockemonCard.module.css';
import CardBackSide from '../../assets/card-back-side.jpg';
import cn from 'classnames'

const PockemonCard = ({type, values, id, img, name, isActive, reverseHandler}) => {
    return (
<div className={classes.root} onClick={() => reverseHandler(id)}>
      <div className={cn(classes.pokemonCard, {[classes.active]: isActive})}>
        <div className={classes.cardFront}>
            <div className={cn(classes.wrap, classes.front)}>
                <div className={cn(classes.pokemon, classes[type])}>
                    <div className={classes.values}>
                        <div className={cn(classes.count, classes.top)}>{values.top}</div>
                        <div className={cn(classes.count, classes.right)}>{values.right}</div>
                        <div className={cn(classes.count, classes.bottom)}>{values.bottom}</div>
                        <div className={cn(classes.count, classes.left)}>{values.left}</div>
                    </div>
                    <div className={classes.imgContainer}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={classes.info}>
                        <span className={classes.number}>#{id}</span>
                        <h3 className={name}>
                            {name}
                        </h3>
                        <small className={type}>Type: <span>{type}</span></small>
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