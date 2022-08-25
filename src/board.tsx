import React, { useContext, useEffect } from "react";
import GlobalContext from './GlobalContext'
import Card from "./Card";
// import { shuffle } from "./supportFuncs";

const Board: React.FC = () => {
    const { deck, setDeck, shuffleDeck } = useContext(GlobalContext)
    const hand = deck.slice(0, 11);
    const foot = deck.slice(11, 22)
    const stock = deck.slice(22, 54)

    // shuffle on load?
    // useEffect(() => {

    // }, [])

    return (
        <div>
            <ol>
                {deck.map(card => <li>{`${card.value} ${card.suit}`}</li>)}
            </ol>
            <ol>
                {hand.map(card => <li>{`${card.value} ${card.suit}`}</li>)}
            </ol>
            <ol>
                {foot.map(card => <li>{`${card.value} ${card.suit}`}</li>)}
            </ol>
            <ol>
                {stock.map(card => <li>{`${card.value} ${card.suit}`}</li>)}
            </ol>
            <Card suit={'Club'} value={'2'} />
            <button onClick={() => shuffleDeck(deck)}>Shuffle</button>
        </div>
    )
}

export default Board;