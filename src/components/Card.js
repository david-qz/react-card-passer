import React from 'react';
import { useGame } from '../context/GameContext';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ player, card, canBeSelected }) {
  const { setFrom, setSelectedCard, selectedCard } = useGame();

  function handleCardClick() {
    setFrom(player);
    setSelectedCard(card);
  }

  // if this card can selected and this card has the same value as the selected card, style it differently
  const thisIsTheSelectedCard = canBeSelected && selectedCard
    ? selectedCard.value === card.value && selectedCard.suit === card.suit
    : false;

  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`}
      onClick={handleCardClick}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}
