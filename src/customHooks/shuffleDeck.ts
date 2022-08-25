import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { initialDeck, card } from "../deck";

const useCustomDeck = () => {
    const [deck, setDeck] = useState<card[]>(initialDeck)

    const shuffleDeck = (array: card[]) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        setDeck([...array])
        // return array
    }

    const outputArray: [card[], Dispatch<SetStateAction<card[]>>, (array: card[]) => void] = [deck, setDeck, shuffleDeck]
    return outputArray
}

export default useCustomDeck;