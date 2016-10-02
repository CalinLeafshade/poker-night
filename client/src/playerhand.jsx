import React from 'react';

import Card from './card';

import styles from './styles/playerhand.scss';

export default class PlayerHand extends React.Component {
  render() {
    return (
      <div className={styles.playerHand}>
          { this.props.cards.map(x => <Card className="lol" key={x.suit + x.rank} {...x} />) }
      </div>
    )
  }
}
