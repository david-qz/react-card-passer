import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return <GameContext.Provider
    value={{
      deck, setDeck,
      playerOneHand, setPlayerOneHand,
      selectedCard, setSelectedCard,
      playerTwoHand, setPlayerTwoHand,
      playerThreeHand, setPlayerThreeHand,
      from, setFrom,
      to, setTo
    }}
  >
    {children}
  </GameContext.Provider>;
}

export function useGame() {
  const gameContextValue = useContext(GameContext);
  if (!gameContextValue) {
    throw new Error('useGame called outside of a GameContextProvider');
  }
  return gameContextValue;
}
