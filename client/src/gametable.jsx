import React from 'react';

import styles from './styles/gametable.scss';

import Board from './board';
import PlayerHand from './playerhand';

export default class GameTable extends React.Component {
  render() {
    return (
      <div className={styles.gameTable}>
          <Board cards={this.props.game.board} />
          <PlayerHand cards={this.props.game.hand} />
      </div>
    )
  }
}
