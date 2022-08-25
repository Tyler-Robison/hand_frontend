import React from "react"
import { initialDeck, card } from './deck'

interface GlobalContextInter {
    deck: card[]
    setDeck: any
    shuffleDeck: any
    players: any
    // dealer: any, //may get rid of this, don't need as state
    isOver: boolean
}

const GlobalContext = React.createContext<GlobalContextInter>({
    deck: initialDeck,
    setDeck: '',
    shuffleDeck: '',
    players: [],
    // dealer: null,
    isOver: false
});

export default GlobalContext;