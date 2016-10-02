import React from 'react';

import Card from './card';

import styles from './styles/board.scss';

export default class Board extends React.Component {
  render() {
    return (
      <div className={styles.board}>
          { this.props.cards.map((x, i) => <Card className="lol" key={i} {...x} />) }
      </div>
    )
  }
}
