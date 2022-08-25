import React, { useState, useEffect } from "react";
import './App.css';
import GlobalContext from './GlobalContext';
import { initialDeck, card } from './deck'
import Board from './board'
import useCustomDeck from "./customHooks/shuffleDeck";

const App: React.FC = () => {

    const [isOver, setIsOver] = useState<boolean>(false);
    // const [deck, setDeck] = useState<card[]>(initialDeck)
    const [deck, setDeck, shuffleDeck] = useCustomDeck()
    const [players, setPlayers] = useState<string[]>([])

    const providerObj = {
        isOver,
        setIsOver,
        deck,
        setDeck,
        shuffleDeck,
        players,
        setPlayers
    }

    return (
        <div className="App">
            <GlobalContext.Provider value={providerObj}>
                <h1>Hand and Foot</h1>


                <Board />

            </GlobalContext.Provider>
        </div>
    );
}

export default App;
