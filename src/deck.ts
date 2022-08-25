import twoClub from './images/2_of_clubs.png';
import twoSpade from './images/2_of_spades.png'
import twoHeart from './images/2_of_hearts.png' 
import twoDiamond from './images/2_of_diamonds.png'
import threeClub from './images/3_of_clubs.png'
import threeSpade from './images/3_of_spades.png'
import threeHeart from './images/3_of_clubs.png'
import threeDiamond from './images/3_of_clubs.png'
import fourClub from './images/4_of_clubs.png'
import fourSpade from './images/4_of_spades.png'
import fourHeart from './images/4_of_clubs.png'
import fourDiamond from './images/4_of_clubs.png'
import fiveClub from './images/5_of_clubs.png'
import fiveSpade from './images/5_of_spades.png'
import fiveHeart from './images/5_of_clubs.png'
import fiveDiamond from './images/5_of_clubs.png'
import sixClub from './images/6_of_clubs.png'
import sixSpade from './images/6_of_spades.png'
import sixHeart from './images/6_of_clubs.png'
import sixDiamond from './images/6_of_clubs.png'
import sevenClub from './images/7_of_clubs.png'
import sevenSpade from './images/7_of_spades.png'
import sevenHeart from './images/7_of_clubs.png'
import sevenDiamond from './images/7_of_clubs.png'
import eightClub from './images/8_of_clubs.png'
import eightSpade from './images/8_of_spades.png'
import eightHeart from './images/8_of_clubs.png'
import eightDiamond from './images/8_of_clubs.png'
import nineClub from './images/9_of_clubs.png'
import nineSpade from './images/9_of_spades.png'
import nineHeart from './images/9_of_clubs.png'
import nineDiamond from './images/9_of_clubs.png'
import tenClub from './images/10_of_clubs.png'
import tenSpade from './images/10_of_spades.png'
import tenHeart from './images/10_of_clubs.png'
import tenDiamond from './images/10_of_clubs.png'
import jackClub from './images/jack_of_clubs.png'
import jackSpade from './images/jack_of_spades.png'
import jackHeart from './images/jack_of_clubs.png'
import jackDiamond from './images/jack_of_clubs.png'
import queenClub from './images/queen_of_clubs.png'
import queenSpade from './images/queen_of_spades.png'
import queenHeart from './images/queen_of_clubs.png'
import queenDiamond from './images/queen_of_clubs.png'
import kingClub from './images/king_of_clubs.png'
import kingSpade from './images/king_of_spades.png'
import kingHeart from './images/king_of_clubs.png'
import kingDiamond from './images/king_of_clubs.png'
import aceClub from './images/ace_of_clubs.png'
import aceSpade from './images/ace_of_spades.png'
import aceHeart from './images/ace_of_clubs.png'
import aceDiamond from './images/ace_of_clubs.png'
import blackJoker from './images/black_joker.png'
import redJoker from './images/red_joker.png'



export type validSuit = 'Club' | 'Spade' | 'Heart' | 'Diamond';
export type validValue = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'j' | 'q' | 'k' | 'a' | 'j';

export type card = {
    suit: validSuit;
    value: validValue;
    img: string;
};

export const initialDeck: card[] = [
    { suit: 'Club', value: '2', img: twoClub },
    { suit: 'Spade', value: '2', img: twoSpade },
    { suit: 'Heart', value: '2', img: twoHeart },
    { suit: 'Diamond', value: '2', img: twoDiamond },
    { suit: 'Club', value: '3', img: threeClub },
    { suit: 'Spade', value: '3', img: threeSpade },
    { suit: 'Heart', value: '3', img: threeHeart },
    { suit: 'Diamond', value: '3', img: threeDiamond },
    { suit: 'Club', value: '4', img: fourClub },
    { suit: 'Spade', value: '4', img: fourSpade },
    { suit: 'Heart', value: '4', img: fourHeart},
    { suit: 'Diamond', value: '4', img: fourDiamond },
    { suit: 'Club', value: '5', img: fiveClub },
    { suit: 'Spade', value: '5', img: fiveSpade },
    { suit: 'Heart', value: '5', img: fiveHeart },
    { suit: 'Diamond', value: '5', img: fiveDiamond },
    { suit: 'Club', value: '6', img: sixClub },
    { suit: 'Spade', value: '6', img: sixSpade },
    { suit: 'Heart', value: '6', img:sixHeart },
    { suit: 'Diamond', value: '6', img: sixDiamond},
    { suit: 'Club', value: '7', img: sevenClub },
    { suit: 'Spade', value: '7', img: sevenSpade },
    { suit: 'Heart', value: '7', img: sevenHeart },
    { suit: 'Diamond', value: '7', img: sevenDiamond },
    { suit: 'Club', value: '8', img: eightClub },
    { suit: 'Spade', value: '8', img: eightSpade},
    { suit: 'Heart', value: '8', img: eightHeart },
    { suit: 'Diamond', value: '8', img: eightDiamond},
    { suit: 'Club', value: '9', img: nineClub },
    { suit: 'Spade', value: '9', img: nineSpade },
    { suit: 'Heart', value: '9', img: nineHeart},
    { suit: 'Diamond', value: '9', img: nineDiamond },
    { suit: 'Club', value: '10', img: tenClub },
    { suit: 'Spade', value: '10', img: tenSpade },
    { suit: 'Heart', value: '10', img: tenHeart },
    { suit: 'Diamond', value: '10', img: tenDiamond},
    { suit: 'Club', value: 'j', img: jackClub },
    { suit: 'Spade', value: 'j', img: jackSpade},
    { suit: 'Heart', value: 'j', img: jackHeart },
    { suit: 'Diamond', value: 'j', img: jackDiamond },
    { suit: 'Club', value: 'q', img: queenClub },
    { suit: 'Spade', value: 'q', img: queenSpade },
    { suit: 'Heart', value: 'q', img: queenHeart},
    { suit: 'Diamond', value: 'q', img: queenDiamond },
    { suit: 'Club', value: 'k', img: kingClub },
    { suit: 'Spade', value: 'k', img: kingSpade },
    { suit: 'Heart', value: 'k', img: kingHeart },
    { suit: 'Diamond', value: 'k', img: kingDiamond },
    { suit: 'Club', value: 'a', img: aceClub },
    { suit: 'Spade', value: 'a', img: aceSpade },
    { suit: 'Heart', value: 'a', img: aceHeart },
    { suit: 'Diamond', value: 'a', img: aceDiamond },
    { suit: 'Spade', value: 'j', img: blackJoker},
    { suit: 'Heart', value: 'j', img: redJoker }
];

