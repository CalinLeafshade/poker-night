import React from 'react';

import styles from './styles/gameinfo.scss';

export default class GameInfo extends React.Component {
    render() {
        return (
            <ul className={styles.gameInfo}>
                <li>Pot: {this.props.game.pot}</li>
                { this.props.game.players.map((x, i) => <li key={i}>Player {i + 1}: {x.name}</li>) }
            </ul>
        )
    }
}
