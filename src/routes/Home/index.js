import React from "react";

import Header from '../../Components/Header/Header';
import Layout from "../../Components/Layout/Layout";

import bg1 from '../../assets/bg1.jpg'
import bg3 from '../../assets/buttle.jpg'

const HomePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }
    return(
        <>
            <Header
                title='Welcome to Pockemon Card Game!'
                descr='This is a card game about pockemons, WOW!'
                onClickButton={handleClickButton}
            />
            <Layout
                title='Rules'
                urlBg={bg1}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
                </p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>
            <Layout
                title='Pocemons Buttle!'
                urlBg={bg3}
            >
                <p>###COMING SOON###</p>
            </Layout>
        </>
    );
};

export default HomePage;
