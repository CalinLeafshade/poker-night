import React, { PropTypes as T } from 'react';
import classNames from 'classnames';
import { Suits, Ranks } from './constants/game';

import styles from './styles/card.scss';

export default class Card extends React.Component {

    render() {

        let classes = classNames(
            styles.card,
            styles[(this.props.suit || '').toLowerCase()],
            {
                [`${styles.unturned}`]: this.props.unturned
            }
        );

        return (
            <div className={classes}>
                <div className={styles.cardInner}>
                    { Suits[this.props.suit]}
                    { this.props.rank }
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    rank: T.oneOf(Ranks),
    suit: T.oneOf(Object.keys(Suits)),
    unturned: T.bool
};
