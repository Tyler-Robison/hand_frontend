import React from "react"
import { validSuit, validValue } from './deck'
import './Card.css'

import twoClub from './images/2_of_clubs.png'
import twoHeart from './images/2_of_hearts.png'
import twoDiamond from './images/2_of_diamonds.png'
import twoSpade from './images/2_of_spades.png'

interface CardProps {
    suit: validSuit;
    value: validValue;
}

const Card: React.FC<CardProps> = ({ suit, value }) => {

    // const two

    return (
        <div className="Card">
            <img src={twoClub} ></img>

        </div>
    )
}

export default Card