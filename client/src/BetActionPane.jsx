import React, { PropTypes as T } from 'react';

import Button from './Button.jsx';

import styles from './styles/betactionpane.scss';

export default class BetActionPane extends React.Component {
  render() {
    return (
      <div className={styles.pane}>
          <p>Current Pot: {this.props.currentPot}</p>
          <div style={ {display: 'flex', justifyContent: 'center'} }>
              <Button onClick={this.props.onFold}>Fold</Button>
              <Button onClick={this.props.onBet(this.props.minBet)}>Call ({this.props.minBet} Florins)</Button>
              <Button onClick={this.props.onBet}>Raise</Button>
          </div>
      </div>
    )
  }
}

BetActionPane.propTypes = {
    currentPot: T.number,
    minBet: T.number,
    maxBet: T.number,
    onFold: T.func,
    onBet: T.func
};
