import { useHistory } from 'react-router-dom'
import classes from './style.module.css'
import PockemonCard from "../../Components/PockemonCard/PockemonCard";
import React, {useState, useEffect} from "react";
import database from "../../service/firebase";

const GamePage = ({onChangePage}) => {
    const history = useHistory();
    const handleHomePage = () => {
        history.push('/');
    }

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    const handleClick = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                const newKey = database.ref().child('pokemons').push().key;
                if (newKey === newKey) {

                    database.ref('pokemons/').update(
                        {active: !newKey.active}
                    )
                }

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }



    return (
        <div>
            <div className={classes.flex}>
                {
                    Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) =>
                        <PockemonCard
                        key={key}
                        name = {name}
                        id = {id}
                        values = {values}
                        type = {type}
                        img = {img}
                        isActive={active}
                        reverseHandler={handleClick}
                    />)
                }
            </div>
            <button onClick={handleHomePage} className={classes.HomeButton}>
                Back to HomePage
            </button>
        </div>
    );
};

export default GamePage;