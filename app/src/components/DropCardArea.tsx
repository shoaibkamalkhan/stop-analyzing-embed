import React, { DragEvent } from 'react';

export type DropCardAreaProps = {
  /** function invoked when the card is dropped */
  onDrop?: Function;

  /** class name of drop area */
  className?: string;
};

function DropCardArea({ onDrop, className }: DropCardAreaProps) {
  const drop = (event: DragEvent) => {
    event.preventDefault();

    const cardId = event.dataTransfer.getData('card_id');

    const card = document.getElementById(cardId);
    if (card) card.style.display = 'none';

    if (onDrop) {
      onDrop(event, { cardId });
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      data-testid="dropCardArea"
      className={className}
      onDrop={drop}
      onDragOver={dragOver}
    />
  );
}

export default DropCardArea;
